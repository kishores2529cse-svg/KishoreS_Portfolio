import fs from 'fs';
import crypto from 'crypto';

const subtle = crypto.webcrypto.subtle;

async function run() {
  const contentId = '0c8ae816-ad40-4bcc-8937-fd574fd27a15';
  const rights = JSON.parse(fs.readFileSync('scratch/mango_rights.json', 'utf-8'));
  console.log('Rights loaded:', Object.keys(rights));

  const atob = (b64) => Buffer.from(b64, 'base64');
  const M = (b64) => new Uint8Array(atob(b64));

  // 1. Import guest token (glt) -> SHA-256 -> AES-GCM CryptoKey
  const gltBytes = new TextEncoder().encode(rights.glt);
  const gltHash = await subtle.digest('SHA-256', gltBytes);
  const gltKey = await subtle.importKey('raw', gltHash, { name: 'AES-GCM' }, false, ['decrypt']);

  // 2. Decrypt AES-CTR key and IV using AES-GCM with contentId as additionalData
  async function decryptGCM(encryptedBytes, aadString, key) {
    const iv = encryptedBytes.slice(0, 12);
    const ciphertext = encryptedBytes.slice(12);
    const additionalData = new TextEncoder().encode(aadString);
    const decrypted = await subtle.decrypt(
      { name: 'AES-GCM', iv, additionalData },
      key,
      ciphertext
    );
    return new Uint8Array(decrypted);
  }

  const rawAesKey = await decryptGCM(M(rights.key), contentId, gltKey);
  const rawAesIv = await decryptGCM(M(rights.iv), contentId, gltKey);

  console.log('Decrypted AES-CTR Key length:', rawAesKey.length, 'bytes');
  console.log('Decrypted AES-CTR IV length:', rawAesIv.length, 'bytes');
  console.log('Key hex:', Buffer.from(rawAesKey).toString('hex'));
  console.log('IV hex:', Buffer.from(rawAesIv).toString('hex'));

  // 3. Decrypt the downloaded m4a file using AES-CTR!
  const encryptedAudio = fs.readFileSync('scratch/suno_downloaded.m4a');
  console.log('Encrypted audio size:', encryptedAudio.length);

  // In Node.js, createDecipheriv for aes-128-ctr or aes-256-ctr
  const cipherName = rawAesKey.length === 32 ? 'aes-256-ctr' : 'aes-128-ctr';
  console.log('Cipher:', cipherName);

  const decipher = crypto.createDecipheriv(cipherName, rawAesKey, rawAesIv);
  const decryptedAudio = Buffer.concat([decipher.update(encryptedAudio), decipher.final()]);

  console.log('Decrypted audio size:', decryptedAudio.length);
  console.log('Decrypted first 32 bytes hex:', decryptedAudio.subarray(0, 32).toString('hex'));
  console.log('Decrypted first 32 bytes ASCII:', decryptedAudio.subarray(0, 32).toString('utf-8').replace(/[^\x20-\x7E]/g, '.'));

  fs.writeFileSync('scratch/decrypted_suno.m4a', decryptedAudio);
  console.log('Saved scratch/decrypted_suno.m4a');
}

run().catch(console.error);

