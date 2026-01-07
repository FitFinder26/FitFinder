import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Component
export default function PreferenceSurvey({ onClose }) {
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);

  const styles = [
    {
      id: 1,
      label: "Streetwear",
      img: "https://source.unsplash.com/600x400/?streetwear,fashion,outfit",
      fallback: "https://loremflickr.com/600/400/streetwear,fashion,outfit",
    },
    {
      id: 2,
      label: "Formal",
      img: "https://source.unsplash.com/600x400/?suit,formal,blazer,evening-wear",
      fallback: "https://loremflickr.com/600/400/suit,formal,blazer",
    },
    {
      id: 3,
      label: "Boho",
      img: "https://source.unsplash.com/600x400/?boho,bohemian,dress,floral",
      fallback: "https://loremflickr.com/600/400/boho,bohemian,dress,floral",
    },
    {
      id: 4,
      label: "Athleisure",
      img: "https://source.unsplash.com/600x400/?athleisure,sportswear,hoodie,leggings",
      fallback: "https://loremflickr.com/600/400/athleisure,sportswear,hoodie",
    },
  ];

  const handleAnswer = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3);
      setTimeout(() => closePopup(), 1500);
    }
  };

  const closePopup = () => {
    setClosing(true);
    setTimeout(() => onClose && onClose(), 400);
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 800);
    return () => clearTimeout(timer);
  }, []);

  const ImageWithFallback = ({ src, fallback, alt }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    return (
      <StyleImg
        src={currentSrc}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => {
          if (fallback && currentSrc !== fallback) setCurrentSrc(fallback);
        }}
      />
    );
  };

  return (
    <Overlay>
      <Dialog role="dialog" aria-modal="true" closing={closing}>
        <Header>
          <Heading>Quick Preferences</Heading>
          <CloseButton aria-label="Close" onClick={closePopup}>
            ×
          </CloseButton>
        </Header>
        <Intro>
          Hello new user 👋. A few quick questions to personalize your
          recommendations.
        </Intro>

        {step !== 3 && (
          <Progress>
            {[0, 1, 2].map((i) => (
              <Dot key={i} $active={step === i} />
            ))}
          </Progress>
        )}

        <Body>
          {step === 0 && (
            <Section>
              <Title>Your gender</Title>
              <Options>
                <PrimaryButton onClick={handleAnswer}>Male</PrimaryButton>
                <PrimaryButton onClick={handleAnswer}>Female</PrimaryButton>
                <SecondaryButton onClick={handleAnswer}>
                  Prefer not to say
                </SecondaryButton>
              </Options>
            </Section>
          )}

          {step === 1 && (
            <Section>
              <Title>Your favorite color</Title>
              <Options>
                <PrimaryButton onClick={handleAnswer}>Red</PrimaryButton>
                <PrimaryButton onClick={handleAnswer}>Blue</PrimaryButton>
                <PrimaryButton onClick={handleAnswer}>Black</PrimaryButton>
                <PrimaryButton onClick={handleAnswer}>White</PrimaryButton>
              </Options>
            </Section>
          )}

          {step === 2 && (
            <Section>
              <Title>Your favorite style</Title>
              <ImageGrid>
                {styles.map((s) => (
                  <StyleCard key={s.id} onClick={handleAnswer}>
                    <ImageWithFallback
                      src={s.img}
                      fallback={s.fallback}
                      alt={`${s.label} example`}
                    />
                    <StyleLabel>{s.label}</StyleLabel>
                  </StyleCard>
                ))}
              </ImageGrid>
            </Section>
          )}

          {step === 3 && (
            <ThankYou>
              <BigCheck>✔</BigCheck>
              <ThanksTitle>Thanks!</ThanksTitle>
              <ThanksText>Your preferences have been saved.</ThanksText>
            </ThankYou>
          )}
        </Body>

        {step !== 3 && (
          <Footer>
            <SkipButton onClick={closePopup}>Skip for now</SkipButton>
          </Footer>
        )}
      </Dialog>
    </Overlay>
  );
}

// Animations
const scaleIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const scaleOut = keyframes`
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(-8px) scale(0.98); }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  z-index: 9999;
  padding: 1rem;
`;

const Dialog = styled.div`
  width: 100%;
  max-width: 520px;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: 16px;
  padding: 18px 18px 12px 18px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: ${(props) => (props.closing ? scaleOut : scaleIn)} 0.28s ease;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const Heading = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
`;

const CloseButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 1;
  padding: 0.25rem 0.4rem;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
  &:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  &:active {
    transform: scale(0.96);
  }
`;

const Intro = styled.p`
  margin: 8px 4px 12px 4px;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.9rem;
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 4px 14px 4px;
`;

const Dot = styled.span`
  width: ${(p) => (p.$active ? "12px" : "8px")};
  height: ${(p) => (p.$active ? "12px" : "8px")};
  border-radius: 50%;
  background: ${(p) =>
    p.$active ? "var(--primary-color, #4d96ff)" : "rgba(127,127,127,0.35)"};
  box-shadow: ${(p) => (p.$active ? "0 0 0 3px rgba(77,150,255,0.2)" : "none")};
  transition: all 0.2s ease;
`;

const Body = styled.div`
  padding: 4px;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.05rem;
  font-weight: 700;
  text-align: center;
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const baseButton = `
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.2s ease;
  outline: none;
  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { box-shadow: 0 0 0 3px rgba(77,150,255,0.35); }
`;

const PrimaryButton = styled.button`
  ${baseButton}
  background: linear-gradient(135deg, var(--primary-color, #4d96ff), var(--secondary-color, #6bcb77));
  color: #ffffff;
`;

const SecondaryButton = styled.button`
  ${baseButton}
  background: rgba(127,127,127,0.12);
  color: var(--text-color);
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12px;
`;

const StyleCard = styled.button`
  border: none;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  color: var(--text-color);
  background: var(--card-bg, rgba(127, 127, 127, 0.08));
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const StyleImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
`;

const StyleLabel = styled.div`
  padding: 8px 10px;
  text-align: center;
  font-size: 0.9rem;
`;

const SkipButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Footer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding: 4px 0 4px 0;
`;

const ThankYou = styled.div`
  text-align: center;
  padding: 18px 0 8px 0;
`;

const BigCheck = styled.div`
  font-size: 42px;
  line-height: 1;
  color: var(--primary-color, #4d96ff);
  margin-bottom: 8px;
`;

const ThanksTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
`;

const ThanksText = styled.div`
  margin-top: 6px;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.95rem;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
