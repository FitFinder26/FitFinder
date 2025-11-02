import Logo from './Logo';
import styled from 'styled-components';
import cameraIcon from '../assets/camera-icon.png';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';
import { useEffect, useState } from 'react';

export default function Navbar({ navigationBlocked }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isAuthenticated]);

  // 🧠 when image is selected
  const handleImageSearch = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    // inside handleImageSearch
    navigate('/search-result', { state: { imageFile: file } }); 
  };

  return (
    <NavContainer>
      {/* Left side: Logo */}
      <div
        style={{ gridColumn: '1', textAlign: 'left', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <Logo fontSize={70} scale={0.4} variant={0} />
      </div>

      {/* Center: Search With Image */}
      <div style={{ gridColumn: '2', textAlign: 'center' }}>
        {/* hidden file input */}
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageSearch}
        />

        <SearchWithImageButton onClick={() => document.getElementById('imageInput').click()}>
          <img
            src={cameraIcon}
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
            alt="Camera Icon"
          />
          <label style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>
            Search With Image
          </label>
        </SearchWithImageButton>
      </div>

      {/* Right side: Auth buttons */}
      <div
        style={{
          gridColumn: '3',
          textAlign: 'right',
          gap: '2rem',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <NavButton onClick={() => navigate('/inspiration')} disabled={navigationBlocked}>
          Inspiration
        </NavButton>

        {isLoggedIn ? (
          <NavButton onClick={() => alert('Profile page coming soon!')}>Profile</NavButton>
        ) : (
          <>
            <NavButton
              onClick={() => navigate('/', { state: { form: 'login' } })}
              disabled={navigationBlocked}
            >
              Login
            </NavButton>
            <JoinButton
              onClick={() => navigate('/', { state: { form: 'signup' } })}
              disabled={navigationBlocked}
            >
              Join
            </JoinButton>
          </>
        )}
      </div>
    </NavContainer>
  );
}

// 🎨 Styled Components
const NavContainer = styled.nav`
  background-color: transparent;
  padding: 1rem;
  color: black;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const SearchWithImageButton = styled.button`
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`;

const NavButton = styled.button`
  background: none;
  color: black;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const JoinButton = styled.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 2rem;
  &:hover {
    background-color: #4d96ff;
  }
`;
