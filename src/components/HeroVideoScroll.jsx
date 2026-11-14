import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 530;
const FRAME_ASPECT = 1920 / 1080;

// Helper to generate frame paths (cache-busted for combined cinematic sequence)
const getFramePath = (index) => {
  const padded = String(index).padStart(4, '0');
  return `/frames/frame_${padded}.webp?v=combined_v1`;
};

export default function HeroVideoScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Audio References
  // 1. bgAudioRef: Default ambient background track (/audio/bg_music.mp3)
  // 2. videoAudioRef: Original video speech & room tone (/audio/portfolio_experience.mp3)
  const bgAudioRef = useRef(null);
  const videoAudioRef = useRef(null);

  // Cached image elements
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);

  // Autoplay is DISABLED by default on load (frames scrub via scroll)
  // Sound is enabled by default (unmuted)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Synchronous refs to prevent React state closure/re-render feedback loops
  const isAutoPlayingRef = useRef(false);
  const isMutedRef = useRef(false);
  isAutoPlayingRef.current = isAutoPlaying;
  isMutedRef.current = isMuted;

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

  // Default Background Audio Handling (Plays unmuted by default when visiting the site)
  useEffect(() => {
    const bgAudio = bgAudioRef.current;
    if (!bgAudio) return;

    bgAudio.volume = 0.5; // Smooth ambient background level
    bgAudio.muted = false;

    const startBgAudio = () => {
      if (bgAudio && bgAudio.paused && !isAutoPlayingRef.current && !isMutedRef.current) {
        bgAudio.play().catch(() => {
          // Awaiting user gesture per browser policy
        });
      }
    };

    // 1. Try starting background audio on mount
    startBgAudio();

    // 2. Gesture fallback: starts on user's first scroll/touch/click
    const onFirstUserAction = () => {
      startBgAudio();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('click', onFirstUserAction);
      window.removeEventListener('scroll', onFirstUserAction);
      window.removeEventListener('wheel', onFirstUserAction);
      window.removeEventListener('touchstart', onFirstUserAction);
      window.removeEventListener('keydown', onFirstUserAction);
    };

    window.addEventListener('click', onFirstUserAction, { once: true });
    window.addEventListener('scroll', onFirstUserAction, { once: true });
    window.addEventListener('wheel', onFirstUserAction, { once: true });
    window.addEventListener('touchstart', onFirstUserAction, { once: true });
    window.addEventListener('keydown', onFirstUserAction, { once: true });

    return () => {
      cleanup();
    };
  }, []);

  // Master GSAP ScrollTrigger timeline (Ultra-smooth GPU scrubbing on user scroll)
  // IMPORTANT: Kept stable so clicking buttons NEVER destroys or re-creates ScrollTrigger
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          // If auto-play is NOT running, scrub frames according to scroll position
          if (!isAutoPlayingRef.current) {
            const p = self.progress;
            const targetFrame = Math.round(1 + p * (TOTAL_FRAMES - 1));
            renderFrame(targetFrame);
          }
        },
        onLeave: () => {
          // Pause all audios when scrolled past the hero section
          if (bgAudioRef.current && !bgAudioRef.current.paused) bgAudioRef.current.pause();
          if (videoAudioRef.current && !videoAudioRef.current.paused) videoAudioRef.current.pause();
        },
        onEnterBack: () => {
          // Resume background audio when scrolling back up into hero
          if (!isMutedRef.current && !isAutoPlayingRef.current && bgAudioRef.current && bgAudioRef.current.paused) {
            bgAudioRef.current.play().catch(() => {});
          }
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, [renderFrame]);

  // If the user physically scrolls with wheel or touch during auto-play, smoothly yield back to scroll control
  useEffect(() => {
    const handlePhysicalScroll = () => {
      if (isAutoPlayingRef.current) {
        setIsAutoPlaying(false);
        isAutoPlayingRef.current = false;
        if (videoAudioRef.current && !videoAudioRef.current.paused) {
          videoAudioRef.current.pause();
        }
        if (!isMutedRef.current && bgAudioRef.current) {
          bgAudioRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener('wheel', handlePhysicalScroll, { passive: true });
    window.addEventListener('touchmove', handlePhysicalScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handlePhysicalScroll);
      window.removeEventListener('touchmove', handlePhysicalScroll);
    };
  }, []);

  // High-precision Auto-Play Loop (Active ONLY when user clicks "Auto Play")
  useEffect(() => {
    if (!isAutoPlaying) {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      return;
    }

    const videoAudio = videoAudioRef.current;
    let lastTime = performance.now();
    const targetFps = 27; // Matches 530 frames over 19.70s video audio
    const frameInterval = 1000 / targetFps;

    const playLoop = (now) => {
      if (
        videoAudio &&
        !videoAudio.paused &&
        videoAudio.duration &&
        !isNaN(videoAudio.duration) &&
        videoAudio.duration > 0
      ) {
        // High-precision sync: video frames driven directly by original video audio hardware clock
        const audioProgress = videoAudio.currentTime / videoAudio.duration;
        const targetFrame = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(1 + audioProgress * (TOTAL_FRAMES - 1)))
        );
        if (targetFrame !== currentFrameRef.current) {
          renderFrame(targetFrame);
        }

        if (videoAudio.ended || videoAudio.currentTime >= videoAudio.duration - 0.05) {
          // Completed intro sequence: pause video audio, resume background audio
          setIsAutoPlaying(false);
          isAutoPlayingRef.current = false;
          videoAudio.pause();
          if (!isMutedRef.current && bgAudioRef.current) {
            bgAudioRef.current.play().catch(() => {});
          }
          return;
        }
      } else {
        // Smooth frame advance while waiting for audio or during audio playback
        const delta = now - lastTime;
        if (delta >= frameInterval) {
          lastTime = now - (delta % frameInterval);
          if (currentFrameRef.current < TOTAL_FRAMES) {
            const nextFrame = currentFrameRef.current + 1;
            renderFrame(nextFrame);
          } else {
            setIsAutoPlaying(false);
            isAutoPlayingRef.current = false;
            if (!isMutedRef.current && bgAudioRef.current) {
              bgAudioRef.current.play().catch(() => {});
            }
            return;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(playLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(playLoop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isAutoPlaying, renderFrame]);

  // Toggle Auto-Play (Stops background music, resumes original video audio + speech)
  const toggleAutoPlay = useCallback(() => {
    const bgAudio = bgAudioRef.current;
    const videoAudio = videoAudioRef.current;

    if (!isAutoPlayingRef.current) {
      // 1. Enable autoplay state immediately
      setIsAutoPlaying(true);
      isAutoPlayingRef.current = true;

      // 2. Pause default background audio
      if (bgAudio && !bgAudio.paused) {
        bgAudio.pause();
      }

      // 3. Start original video audio in sync with speech & scenes
      if (videoAudio) {
        videoAudio.muted = isMutedRef.current;
        videoAudio.volume = 1.0;

        // If at or near the end, restart from frame 1
        if (currentFrameRef.current >= TOTAL_FRAMES - 5) {
          currentFrameRef.current = 1;
          renderFrame(1);
          videoAudio.currentTime = 0;
        } else if (videoAudio.duration && !isNaN(videoAudio.duration) && videoAudio.duration > 0) {
          const progress = (currentFrameRef.current - 1) / (TOTAL_FRAMES - 1);
          videoAudio.currentTime = progress * videoAudio.duration;
        }

        const playPromise = videoAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Video audio play error:', err);
          });
        }
      }
    } else {
      // Pause Auto Play
      setIsAutoPlaying(false);
      isAutoPlayingRef.current = false;

      // Pause video audio
      if (videoAudio && !videoAudio.paused) {
        videoAudio.pause();
      }

      // Resume background ambient audio if unmuted
      if (bgAudio && !isMutedRef.current) {
        bgAudio.play().catch(() => {});
      }
    }
  }, [renderFrame]);

  // Toggle Sound Mute / Unmute
  const toggleMute = useCallback((e) => {
    e?.stopPropagation();
    const bgAudio = bgAudioRef.current;
    const videoAudio = videoAudioRef.current;

    setIsMuted((prevMuted) => {
      const nextMuted = !prevMuted;
      isMutedRef.current = nextMuted;

      if (bgAudio) bgAudio.muted = nextMuted;
      if (videoAudio) videoAudio.muted = nextMuted;

      if (!nextMuted) {
        // Unmuting: make sure the appropriate active audio is playing
        if (isAutoPlayingRef.current) {
          if (videoAudio && videoAudio.paused) {
            videoAudio.volume = 1.0;
            videoAudio.play().catch(() => {});
          }
        } else {
          if (bgAudio && bgAudio.paused) {
            bgAudio.volume = 0.5;
            bgAudio.play().catch(() => {});
          }
        }
      }
      return nextMuted;
    });
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: '650vh' }}
    >
      {/* 1. Default Background Audio Track (/public/audio/bg_music.mp3) */}
      <audio
        ref={bgAudioRef}
        src="/audio/bg_music.mp3"
        preload="auto"
        loop
        playsInline
      />

      {/* 2. Original Video Experience Audio Track (Kishore's Speech + Room Tone) */}
      <audio
        ref={videoAudioRef}
        src="/audio/portfolio_experience.mp3"
        preload="auto"
        playsInline
      />

      {/* Pinned Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none">
        {/* Hardware-Accelerated 80fps+ Canvas Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />
        </div>

        {/* Minimal Professional Bottom-Left Controls (High z-index, pointer-events-auto) */}
        <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-30 pointer-events-auto flex items-center gap-2">
          {/* Clean Responsive Auto Play Button */}
          <button
            type="button"
            onClick={toggleAutoPlay}
            title={isAutoPlaying ? "Pause Video Motion" : "Auto Play Cinematic Sequence"}
            aria-label={isAutoPlaying ? "Pause Video Motion" : "Auto Play Cinematic Sequence"}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 min-h-[36px] rounded-full bg-zinc-950/85 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-colors duration-200 ease-out text-[11px] sm:text-xs font-mono tracking-wider shadow-lg shadow-black/60 cursor-pointer active:scale-95 touch-manipulation"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-300" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-zinc-300 fill-zinc-300" />
                <span>Auto Play</span>
              </>
            )}
          </button>

          {/* Clean Responsive Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            className="group flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 min-h-[36px] rounded-full bg-zinc-950/85 hover:bg-zinc-900 text-neutral-300 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-colors duration-200 ease-out text-[11px] sm:text-xs font-mono tracking-wider shadow-lg shadow-black/60 cursor-pointer active:scale-95 touch-manipulation"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors duration-200 ease-out" />
                <span className="text-neutral-500 group-hover:text-white transition-colors duration-200 ease-out">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-neutral-200 group-hover:text-white transition-colors duration-200 ease-out" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 ease-out">Mute</span>
              </>
            )}
          </button>
        </div>

        {/* Responsive Stag Brand Logo & Label */}
        <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-10 z-20 pointer-events-none select-none flex flex-col items-center gap-1 w-12 sm:w-14 md:w-16 opacity-70">
          {/* Stag Logo */}
          <img
            src="/stag-logo.png"
            alt="Stag Brand Logo"
            className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          />

          {/* Emblem Label Below Logo */}
          <span className="text-[11px] sm:text-xs font-medium tracking-wider text-neutral-200 text-center whitespace-nowrap">
            Kishore S
          </span>
        </div>
      </div>

      {/* Seamless Transition into Real Page (Positioned at bottom of 650vh container, invisible during video playback) */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#faf9f6] dark:to-[#050807] pointer-events-none z-10" />
    </section>
  );
}
