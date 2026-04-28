import React, { createContext, useContext, useState, useEffect } from 'react';

const OnboardingContext = createContext();

export const ONBOARDING_STEPS = {
  NAVBAR_SEARCH: 0,
  CHOOSE_SOURCE: 1, // Mobile only
  SEGMENT_IMAGE: 2,
  SELECT_MASK: 3,
  SEND_SELECTED: 4,
  CUSTOMIZE_SEARCH: 5,
  RATE_RESULTS: 6,
  SWIPE_CARDS: 7,
  SWITCH_GRID: 8,
  COMPLETED: 9
};
const IS_ILLUSTRATION_ENABLED = false; // Set to false to completely disable the illustration system

export function OnboardingProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(-1); // -1 means inactive
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!IS_ILLUSTRATION_ENABLED) return;

    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      // Start onboarding after a small delay to ensure everything is loaded
      const timer = setTimeout(() => {
        setCurrentStep(ONBOARDING_STEPS.NAVBAR_SEARCH);
        setIsActive(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (currentStep === ONBOARDING_STEPS.COMPLETED) {
      localStorage.setItem('visitedBefore', 'true');
      setIsActive(false);
    }
  }, [currentStep]);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const skipOnboarding = () => {
    setIsActive(false);
    setCurrentStep(ONBOARDING_STEPS.COMPLETED);
    localStorage.setItem('visitedBefore', 'true');
  };

  const completeOnboarding = () => {
    setIsActive(false);
    setCurrentStep(ONBOARDING_STEPS.COMPLETED);
    localStorage.setItem('visitedBefore', 'true');
  };

  return (
    <OnboardingContext.Provider value={{
      currentStep,
      isActive,
      nextStep,
      skipOnboarding,
      completeOnboarding,
      setCurrentStep
    }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);
