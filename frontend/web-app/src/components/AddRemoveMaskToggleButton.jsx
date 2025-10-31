import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function AddRemoveMaskToggleButton({ disabled, mode, setMode }) {

  return (
    <Container>
      <Switch disabled={disabled} role="switch" aria-checked={mode === "remove"}>
        <input
          id="switch-opt-1"
          type="radio"
          name="flip-switch"
          checked={mode === "add"}
          onChange={() => setMode("add")}
          disabled={disabled}
        />
        <input
          id="switch-opt-2"
          type="radio"
          name="flip-switch"
          checked={mode === "remove"}
          onChange={() => setMode("remove")}
          disabled={disabled}
        />

        <label htmlFor="switch-opt-1" title="Add mask">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
          </svg>
          <span>Add Mask</span>
        </label>

        <label htmlFor="switch-opt-2" title="Remove mask">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M5 11h14v2H5z" />
          </svg>
          <span>Remove Mask</span>
        </label>

        <SwitchCard aria-hidden="true">
          <CardFrontFace />
          <CardBackFace />
        </SwitchCard>
      </Switch>
    </Container>
  );
}

/* Keyframes */
const flipRight = keyframes`
  0% {
    transform: translateX(0%) rotateY(0deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(100%) rotateY(180deg) scale(1);
  }  
`;

const flipLeft = keyframes`
  0% {
    transform: translateX(100%) rotateY(180deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(0%) rotateY(0deg) scale(1);
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 5px var(--highlight-color);
  }
  to {
    box-shadow:
      0 0 15px var(--highlight-color),
      0 0 25px var(--highlight-color);
  }
`;

/* Styles */
const Container = styled.div`
  --card-width: 110px;
  --card-height: 120px;
  --switch-bg: rgba(255, 255, 255, 0.06);
  --switch-border-color: rgba(255, 255, 255, 0.12);
  --text-color: #ffffff;
  --inactive-text-color: rgba(255, 255, 255, 0.6);
  --icon-shadow-color: rgba(0, 0, 0, 0.3);
  --card-front-bg: linear-gradient(135deg, rgba(255,105,180,0.9), rgba(255,255,255,0.06));
  --card-back-bg: linear-gradient(135deg, rgba(0,150,255,0.9), rgba(255,255,255,0.06));
  --highlight-color: #64ffda;

  display: grid;
  place-content: center;
  min-height: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

/* card that moves and flips */
const SwitchCard = styled.div`
  position: absolute;
  width: var(--card-width);
  height: var(--card-height);
  z-index: 2;
  transform-style: preserve-3d;
  transform-origin: center;
  pointer-events: none;
`;

const Switch = styled.div`
  display: flex;
  position: relative;
  width: calc(var(--card-width) * 2);
  height: var(--card-height);
  background: var(--switch-bg);
  border-radius: 16px;
  border: 1px solid var(--switch-border-color);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.12),
    inset 0 4px 8px rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  perspective: 1000px;
  align-items: center;
  gap: 0;
  

  input[type="radio"] {
    display: none;
  }

  label {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    z-index: 3;
    transition: color 0.2s ease, transform 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    user-select: none;
  }

  label:hover {
    span, svg{
        transition: all 0.5s;
        color: ${({disabled})=>(disabled ? "auto" : "black")};
    }
  }

  label:hover svg {
    transform: ${({disabled})=>(disabled ? "none" : "translateY(-3px)")};
    filter: ${({disabled})=>(!disabled && "drop-shadow(0 4px 6px var(--icon-shadow-color)) brightness(1.1)")};
  }

  label svg {
    transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.24s;
    filter: drop-shadow(0 2px 3px var(--icon-shadow-color));
    width: 24px;
    height: 24px;
    transform: color 1s;
    color: ${({disabled})=>(disabled ? "#3f3f3f" : "var(--inactive-text-color)")};
  }

  label span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
    transform: color 1s;
    color: ${({disabled})=>(disabled ? "#3f3f3f" : "var(--inactive-text-color)")};
  }

  /* highlight for checked label */
  input#switch-opt-1:checked ~ label[for="switch-opt-1"],
  input#switch-opt-2:checked ~ label[for="switch-opt-2"] {
    color: var(--text-color);
    text-shadow: 0 0 8px rgba(100, 255, 218, 0.35);
  }

  input#switch-opt-1:checked ~ label[for="switch-opt-1"]::after,
  input#switch-opt-2:checked ~ label[for="switch-opt-2"]::after {
    content: "";
    position: absolute;
    bottom: -6px;
    width: 32px;
    height: 3px;
    background: var(--highlight-color);
    border-radius: 16px;
    animation: ${glow} 1.5s infinite alternate;
  }

  /* dim the inactive label */
  input#switch-opt-2:checked ~ label[for="switch-opt-1"],
  input#switch-opt-1:checked ~ label[for="switch-opt-2"] {
    color: var(--inactive-text-color);
  }

  /* IMPORTANT: interpolate the SwitchCard styled component so styled-components
     uses the actual generated class name rather than a plain selector. */
  /* When opt-2 (remove) is checked -> flip to right */
  input#switch-opt-2:checked ~ ${/* interpolate */ SwitchCard} {
    animation: ${flipRight} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }

  /* When opt-1 (add) is checked -> flip to left (initial state) */
  input#switch-opt-1:checked ~ ${/* interpolate */ SwitchCard} {
    animation: ${flipLeft} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
`;

/* faces */
const faceCommon = `
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 6px 18px rgba(0,0,0,0.16),
    inset 0 2px 6px rgba(255,255,255,0.03);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const CardFrontFace = styled.div`
  ${faceCommon}
  background: var(--card-front-bg);
  transform: translateZ(0) rotateY(0deg);
`;

const CardBackFace = styled.div`
  ${faceCommon}
  background: var(--card-back-bg);
  transform: rotateY(180deg);
`;
