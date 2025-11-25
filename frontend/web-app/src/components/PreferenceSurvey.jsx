import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";



// Component
export default function PreferenceSurvey({ onClose }) {
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);

  const styles = [
    { id: 1, img: "https://via.placeholder.com/150?text=Style+1" },
    { id: 2, img: "https://via.placeholder.com/150?text=Style+2" },
    { id: 3, img: "https://via.placeholder.com/150?text=Style+3" },
    { id: 4, img: "https://via.placeholder.com/150?text=Style+4" },
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

  return (
    <Overlay>
      <Bubble closing={closing}>
        <h2>Hello New user👋, this survey is to gather your preferences for better recommendations.</h2>
        {step === 0 && (
          <>
            <Title>Your Gender?</Title>
            <Options>
              <OptionButton onClick={handleAnswer}>Male</OptionButton>
              <OptionButton onClick={handleAnswer}>Female</OptionButton>
              <OptionButton onClick={handleAnswer}>Prefer not to say</OptionButton>
            </Options>
          </>
        )}

        {step === 1 && (
          <>
            <Title>Your Favorite Color?</Title>
            <Options>
              <OptionButton onClick={handleAnswer}>Red</OptionButton>
              <OptionButton onClick={handleAnswer}>Blue</OptionButton>
              <OptionButton onClick={handleAnswer}>Black</OptionButton>
              <OptionButton onClick={handleAnswer}>White</OptionButton>
            </Options>
          </>
        )}

        {step === 2 && (
          <>
            <Title>Your Favorite Style?</Title>
            <ImageGrid>
              {styles.map(s => (
                <StyleImg key={s.id} src={s.img} onClick={handleAnswer} />
              ))}
            </ImageGrid>
          </>
        )}

        {step === 3 && (
          <ThankYou>
            Thank you!
            <Check>✔</Check>
          </ThankYou>
        )}

        {step !== 3 && (
          <SkipButton onClick={closePopup}>Skip Survey</SkipButton>
        )}
      </Bubble>
    </Overlay>
  );
}


// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Bubble = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${props => (props.closing ? fadeOut : fadeIn)} 0.4s ease;
`;

const Title = styled.h2`
  margin: 0 0 12px 0;
  font-size: 20px;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f1f1f1;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e1e1e1;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12px;
`;

const StyleImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border-color: #999;
  }
`;

const SkipButton = styled.button`
  margin-top: 18px;
  width: 100%;
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  color: #666;
`;

const ThankYou = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 20px 0;
`;

const Check = styled.div`
  font-size: 40px;
  color: green;
  margin-top: 10px;
`;