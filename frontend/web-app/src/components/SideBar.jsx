import {
  DoorOpen,
  Heart,
  History,
  MessageCircleDashed,
  User as UserIcon,
  Edit2 as EditIcon,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Sidebar from "react-sidebar";
import { useAuthContext } from "../providers/AuthProvider";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";
import styled from "styled-components";
import { useTheme } from "../providers/ThemeProvider";
import { FaCheck } from "react-icons/fa";

/* ---------------------------------------------
   Sidebar Component
----------------------------------------------*/
export default function SideBar({ isOpen, setIsOpen }) {
  const { logout, user, updateProfileImage } = useAuthContext();
  const navigator = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const feedbackFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";

  useEffect(() => {
    setImgError(false);
  }, [user?.profileImageURL]);

  const handleLogout = () => {
    logout();
    navigator("/");
    setIsOpen(false);
  };

  const handleHistoryNavigation = () => {
    navigator("/history");
    setIsOpen(false);
  };

  const handleFavoriteNavigation = () => {
    navigator("/favorite");
    setIsOpen(false);
  };

  const handleProfilePicClick = () => {
    if (!user) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await updateProfileImage(file);
      if (res?.ok) {
        Notifier.notifySuccess("Profile image changed successfully");
      } else {
        Notifier.notifyError("Profile image upload failed");
      }
    } catch {
      Notifier.notifyError("Profile image upload failed");
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  const sidebarContent = (
    <>
      {/* User Header */}
      <UserHeader>
        <FileInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <UserSection>
          <AvatarContainer>
            <AvatarWrap onClick={handleProfilePicClick}>
              {user && user.profileImageURL && !imgError ? (
                <AvatarImg
                  src={user.profileImageURL}
                  alt={user.userName}
                  onError={() => setImgError(true)}
                />
              ) : (
                <AvatarFallback>
                  <UserIcon size={48} />
                </AvatarFallback>
              )}
            </AvatarWrap>

            {user && (
              <EditButton
                $theme={theme}
                disabled={uploading}
                onClick={handleProfilePicClick}
              >
                {uploading ? "..." : <EditIcon size={14} />}
              </EditButton>
            )}
          </AvatarContainer>

          <UserName>{user?.userName || "Guest"}</UserName>
        </UserSection>
      </UserHeader>

      {/* Menu */}
      <MenuList>
        <MenuItemRow onClick={handleHistoryNavigation}>
          <History /> Recent Searches
        </MenuItemRow>

        <MenuItemRow onClick={handleFavoriteNavigation}>
          <Heart /> Saved Items
        </MenuItemRow>

        <MenuItemRow onClick={() => window.open(feedbackFormLink)}>
          <MessageCircleDashed /> Send Feedback
        </MenuItemRow>

        <SubMenuTitle onClick={() => setIsThemeOpen((v) => !v)}>
          {theme === "light" ? (
            <Sun
              style={{
                rotate: isThemeOpen ? "90deg" : "0deg",
                transition: "rotate 0.5s ease-in-out",
              }}
            />
          ) : (
            <Moon
              style={{
                rotate: isThemeOpen ? "90deg" : "0deg",
                transition: "rotate 0.5s ease-in-out",
              }}
            />
          )}
          Theme
        </SubMenuTitle>

        <SubMenuContent $open={isThemeOpen}>
          <MenuItemRow onClick={() => setTheme("light")}>
            {theme === "light" && <FaCheck />} Light
          </MenuItemRow>

          <MenuItemRow onClick={() => setTheme("dark")}>
            {theme === "dark" && <FaCheck />} Dark
          </MenuItemRow>

          <MenuItemRow onClick={() => setTheme("system")}>
            {theme === "system" && <FaCheck />} System
          </MenuItemRow>
        </SubMenuContent>

        <MenuItemRow>
          <CgPassword size={20} /> Change Password
        </MenuItemRow>

        <MenuItemRow onClick={handleLogout}>
          <DoorOpen /> Sign out
        </MenuItemRow>
      </MenuList>
    </>
  );

  return (
    <Sidebar
      open={isOpen}
      onSetOpen={setIsOpen}
      pullRight={true}
      styles={{
        root: {
          position: "fixed",
          inset: 0,
          zIndex: 1200,
          pointerEvents: isOpen ? "auto" : "none",
        },
        sidebar: {
          pointerEvents: "auto",

          zIndex: "10",
          background: theme === "light" ? "#ffffffa0" : "#181818a0",
          color: theme === "light" ? "black" : "white",
          transition: "0.5s ease-in-out",
          width: 280,
        },
        overlay: {
          pointerEvents: "auto",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
      sidebar={sidebarContent}
    ></Sidebar>
  );
}

// Styled components

const FileInput = styled.input`
  display: none;
`;

const UserSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: solid 2px white;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
`;

const EditButton = styled.button`
  position: absolute;
  right: -8px;
  bottom: -8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  color: var(--text-color);
  transition:
    transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition:
      opacity 0.2s ease,
      transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.1); /* subtle lift + scale */
    background: ${(props) =>
      props?.$theme && props.$theme === "light" ? "white" : "black"};
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }

  &:hover > svg {
    transform: rotate(360deg);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserHeader = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.5s ease-in-out;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const MenuItemRow = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;
  font-family: inherit;
  transition: opacity 0.2s ease;
  &:hover {
    color: var(--bg-color);
    background-color: var(--primary-color, 50%);
  }
`;

const SubMenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--bg-color);
    background-color: var(--primary-color);
  }
`;

const SubMenuContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  max-height: ${({ $open }) => ($open ? "200px" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-4px)")};

  transition:
    max-height 0.3s ease,
    opacity 0.25s ease,
    transform 0.25s ease;
`;
