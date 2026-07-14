import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding, ONBOARDING_STEPS } from '../../providers/OnboardingProvider';
import { useTranslation } from 'react-i18next';
import { NAMESPACES } from '../../locales/namespaces';
import { X, ArrowRight, Sparkles, MousePointer2, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

export default function WalkthroughOverlay() {
  const { currentStep, isActive, nextStep, skipOnboarding, completeOnboarding } = useOnboarding();
  const { t, i18n } = useTranslation(NAMESPACES.common);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, width: 0, height: 0, padding: 8 });

  const stepsMetadata = useMemo(() => ({
    [ONBOARDING_STEPS.NAVBAR_SEARCH]: {
      target: '#navbar-search-button',
      title: t('onboarding.steps.navbarSearch.title'),
      description: t('onboarding.steps.navbarSearch.description'),
    },
    [ONBOARDING_STEPS.CHOOSE_SOURCE]: {
      target: '#image-source-options',
      title: t('onboarding.steps.chooseSource.title'),
      description: t('onboarding.steps.chooseSource.description'),
    },
    [ONBOARDING_STEPS.SEGMENT_IMAGE]: {
      target: '#segment-button',
      title: t('onboarding.steps.segmentImage.title'),
      description: t('onboarding.steps.segmentImage.description'),
    },
    [ONBOARDING_STEPS.SELECT_MASK]: {
      target: '.segmentation-mask',
      title: t('onboarding.steps.selectMask.title'),
      description: t('onboarding.steps.selectMask.description'),
    },
    [ONBOARDING_STEPS.SEND_SELECTED]: {
      target: '#send-selected-button',
      title: t('onboarding.steps.sendSelected.title'),
      description: t('onboarding.steps.sendSelected.description'),
    },
    [ONBOARDING_STEPS.CUSTOMIZE_SEARCH]: {
      target: '#customization-search-button',
      title: t('onboarding.steps.customizeSearch.title'),
      description: t('onboarding.steps.customizeSearch.description'),
    },
    [ONBOARDING_STEPS.RATE_RESULTS]: {
      target: '.product-rating-stars',
      title: t('onboarding.steps.rateResults.title'),
      description: t('onboarding.steps.rateResults.description'),
    },
    [ONBOARDING_STEPS.SWIPE_CARDS]: {
      target: '#search-card-stack',
      title: t('onboarding.steps.swipeCards.title'),
      description: t('onboarding.steps.swipeCards.description'),
    },
    [ONBOARDING_STEPS.SWITCH_GRID]: {
      target: '#grid-view-button',
      title: t('onboarding.steps.switchGrid.title'),
      description: t('onboarding.steps.switchGrid.description'),
    }
  }), [t]);

  useEffect(() => {
    if (!isActive || currentStep >= ONBOARDING_STEPS.COMPLETED) return;

    const updateSpotlight = (shouldScroll = false) => {
      const step = stepsMetadata[currentStep];
      if (!step) return;

      const element = document.querySelector(step.target);
      if (element) {
        if (shouldScroll) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        const rect = element.getBoundingClientRect();
        setSpotlight({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
          padding: step.padding || 8
        });
      }
    };

    updateSpotlight(true);
    window.addEventListener('resize', () => updateSpotlight(false));
    const observer = new MutationObserver(() => updateSpotlight(false));
    observer.observe(document.body, { childList: true, subtree: true });

    // Automatic advancement for the last 3 steps (Rating, Swipe, Grid)
    let autoAdvanceTimeout;
    if (isActive && currentStep >= ONBOARDING_STEPS.RATE_RESULTS && currentStep < ONBOARDING_STEPS.COMPLETED) {
        autoAdvanceTimeout = setTimeout(() => {
            nextStep();
        }, 1000); // Decreased to 1s as requested
    }

    return () => {
      window.removeEventListener('resize', updateSpotlight);
      observer.disconnect();
      if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
    };
  }, [currentStep, isActive, stepsMetadata, nextStep]);

  if (!isActive || currentStep >= ONBOARDING_STEPS.COMPLETED) return null;

  const currentMeta = stepsMetadata[currentStep];
  if (!currentMeta) return null;

  // Refined positioning to avoid overlap
  const isTooLow = spotlight.y + spotlight.height + 300 > window.innerHeight;
  const cardTop = isTooLow 
    ? Math.max(20, spotlight.y - 280) // Move above
    : spotlight.y + spotlight.height + spotlight.padding + 20; // Move below

  const cardWidth = Math.min(320, window.innerWidth - 40);
  const cardLeft = Math.min(Math.max(20, spotlight.x + spotlight.width / 2 - cardWidth / 2), window.innerWidth - cardWidth - 20);
  
  const isAutomaticStep = currentStep >= ONBOARDING_STEPS.RATE_RESULTS;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Backdrop Divs to block everything except the spotlight area */}
      <div
        className="fixed bg-black/85 backdrop-blur-sm pointer-events-auto transition-all duration-700"
        style={{ top: 0, left: 0, width: '100%', height: Math.max(0, spotlight.y - spotlight.padding) }}
      />
      <div
        className="fixed bg-black/85 backdrop-blur-sm pointer-events-auto transition-all duration-700"
        style={{ top: spotlight.y + spotlight.height + spotlight.padding, left: 0, width: '100%', height: Math.max(0, window.innerHeight - (spotlight.y + spotlight.height + spotlight.padding)) }}
      />
      <div
        className="fixed bg-black/85 backdrop-blur-sm pointer-events-auto transition-all duration-700"
        style={{ top: Math.max(0, spotlight.y - spotlight.padding), left: 0, width: Math.max(0, spotlight.x - spotlight.padding), height: spotlight.height + spotlight.padding * 2 }}
      />
      <div
        className="fixed bg-black/85 backdrop-blur-sm pointer-events-auto transition-all duration-700"
        style={{ top: Math.max(0, spotlight.y - spotlight.padding), left: spotlight.x + spotlight.width + spotlight.padding, width: Math.max(0, window.innerWidth - (spotlight.x + spotlight.width + spotlight.padding)), height: spotlight.height + spotlight.padding * 2 }}
      />

      {/* Instruction Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="absolute z-[10000] pointer-events-auto"
          style={{
            top: cardTop,
            left: cardLeft,
            width: cardWidth
          }}
        >
          <div className="bg-background border border-primary/20 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)] space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('onboarding.tutorial')}</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                {currentMeta.title}
              </h3>
              <p className="text-[11px] sm:text-sm font-medium opacity-50 leading-relaxed italic">
                {currentMeta.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/10">
              <div className="flex gap-1.5">
                {Object.keys(stepsMetadata).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-700 ${i === parseInt(currentStep) ? 'w-6 bg-primary' : 'w-1.5 bg-primary/10'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest opacity-30 italic">
                <span className={isAutomaticStep ? "animate-pulse" : ""}>
                  {isAutomaticStep ? t('onboarding.autoAdvancing') || "Previewing..." : t('onboarding.awaitingAction')}
                </span>
                {!isAutomaticStep && (i18n.language === 'ar' ? <ArrowLeft size={12} className="animate-pulse" /> : <ArrowRight size={12} className="animate-pulse" />)}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Target Interaction Highlight */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute border-2 border-primary rounded-2xl pointer-events-none z-[9999]"
        style={{
          left: spotlight.x - spotlight.padding,
          top: spotlight.y - spotlight.padding,
          width: spotlight.width + spotlight.padding * 2,
          height: spotlight.height + spotlight.padding * 2,
        }}
      />

      {/* Click Indicator */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute z-[10001] text-primary pointer-events-none"
        style={{
          left: spotlight.x + spotlight.width / 2,
          top: spotlight.y + spotlight.height / 2,
        }}
      >
        <MousePointer2 size={32} fill="currentColor" className="-translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
}
