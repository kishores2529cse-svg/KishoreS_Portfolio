import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_ASPECT = 1920 / 1080;

// Helper to generate frame paths (cache-busted for clean watermark-free frames)
const getFramePath = (index) => {
  const padded = String(index).padStart(4, '0');
  return `/frames/frame_${padded}.webp?v=stag_final`;
};

export default function HeroVideoScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Cached image elements
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);

  const [isPlayingManually, setIsPlayingManually] = useState(false);

  // Render a specific frame onto the high-DPI canvas with 'object-fit: cover'
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(1, Math.min(frameIndex, TOTAL_FRAMES));
    currentFrameRef.current = clampedIndex;

    // Retrieve image from cache or find nearest loaded frame
    let img = imagesRef.current[clampedIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame as instant fallback to eliminate any black flicker
      for (let offset = 1; offset < 20; offset++) {
        const prev = imagesRef.current[clampedIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[clampedIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    const canvasAspect = w / h;

    let drawW, drawH, offX, offY;
    if (canvasAspect > FRAME_ASPECT) {
      drawW = w;
      drawH = w / FRAME_ASPECT;
      offX = 0;
      offY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * FRAME_ASPECT;
      offX = (w - drawW) / 2;
      offY = 0;
    }

    // High performance direct GPU draw
    ctx.drawImage(img, offX, offY, drawW, drawH);
  }, []);

  // Handle high-DPI canvas resizing
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all frames progressively with priority on early frames
  useEffect(() => {
    const images = [];

    // Initialize array
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      images[i] = new Image();
    }
    imagesRef.current = images;

    // Load first frame immediately and render
    images[1].src = getFramePath(1);
    images[1].onload = () => {
      updateCanvasDimensions();
      renderFrame(1);
    };

    // Preload remaining frames
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      images[i].src = getFramePath(i);
    }

    window.addEventListener('resize', updateCanvasDimensions);
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, [updateCanvasDimensions, renderFrame]);

  // Master GSAP ScrollTrigger timeline (Ultra-smooth GPU scrubbing)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6, // Ultra-responsive, smooth momentum scrubbing
        onUpdate: (self) => {
          if (!isPlayingManually) {
            const p = self.progress;
            const targetFrame = Math.round(1 + p * (TOTAL_FRAMES - 1));
            renderFrame(targetFrame);
          }
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, [isPlayingManually, renderFrame]);

  // Manual auto-play preview loop (runs at native screen refresh rate: 80fps - 144Hz)
  useEffect(() => {
    if (!isPlayingManually) {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      return;
    }

    let lastTime = performance.now();
    const targetFps = 30; // Native video playback speed
    const frameInterval = 1000 / targetFps;

    const playLoop = (now) => {
      const delta = now - lastTime;
      if (delta >= frameInterval) {
        lastTime = now - (delta % frameInterval);
        currentFrameRef.current = currentFrameRef.current >= TOTAL_FRAMES ? 1 : currentFrameRef.current + 1;
        renderFrame(currentFrameRef.current);
      }
      animFrameIdRef.current = requestAnimationFrame(playLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(playLoop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isPlayingManually, renderFrame]);

  const toggleManualPlay = () => {
    setIsPlayingManually((prev) => !prev);
  };

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: '400vh' }}
    >
      {/* Pinned Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Hardware-Accelerated 80fps+ Canvas Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />

          {/* Seamless Bottom Gradient Fade into About Section */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#faf9f6] dark:from-[#000000] to-transparent pointer-events-none transition-colors duration-400" />
        </div>

        {/* Floating Controls: Auto Play Button */}
        <div className="absolute bottom-6 left-6 z-20 pointer-events-auto">
          <button
            onClick={toggleManualPlay}
            title={isPlayingManually ? "Pause Video Motion" : "Preview Motion"}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-all hover:scale-105 shadow-xl shadow-black/60"
          >
            {isPlayingManually ? (
              <>
                <Pause className="w-3.5 h-3.5 text-white fill-white" />
                <span className="tracking-wide">Pause Motion</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-white fill-white" />
                <span className="tracking-wide">Auto Play</span>
              </>
            )}
          </button>
        </div>

        {/* =========================================================================
            CUSTOM STAG LOGO + LABEL
            - Adjust bottom / right coordinates to position the whole unit
            - Change the text and styling below as you like
           ========================================================================= */}
        <div
          className="absolute z-20 pointer-events-none select-none flex flex-col items-center gap-1.5 transition-all duration-150"
          style={{
            bottom: '41px',   // ⬅️ Overall distance from bottom
            right: '113px',    // ⬅️ Overall distance from right edge
            width: '60px',    // ⬅️ Logo width
            opacity: 0.66,    // ⬅️ Transparency
          }}
        >
          {/* Stag Logo */}
          <img
            src="/stag-logo.png"
            alt="Stag Brand Logo"
            className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          />

          {/* Micro-Text Label Below Logo */}
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white font-semibold text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] whitespace-nowrap">
            Kishore S
          </span>
        </div>
      </div>
    </section>
  );
}
