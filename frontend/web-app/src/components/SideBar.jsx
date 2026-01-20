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
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

/* ---------------------------------------------
   Sidebar Component
----------------------------------------------*/
export default function SideBar({ isOpen, setIsOpen }) {
  const { t } = useTranslation(NAMESPACES.sidebar);
  const { i18n } = useTranslation();
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
        Notifier.notifySuccess(t("profileImageSuccess"));
      } else {
        Notifier.notifyError(t("profileImageFailed"));
      }
    } catch {
      Notifier.notifyError(t("profileImageFailed"));
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  const sidebarContent = (
    <aside aria-label={t("sidebarMenu") || "Sidebar menu"}>
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
            <AvatarWrap onClick={handleProfilePicClick} tabIndex={0} aria-label={t("editProfileImage") || "Edit profile image"}>
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
                aria-label={t("editProfileImage") || "Edit profile image"}
              >
                {uploading ? t("uploading") : <EditIcon size={14} />}
              </EditButton>
            )}
          </AvatarContainer>
          <UserName>{user?.userName || t("guest")}</UserName>
        </UserSection>
      </UserHeader>
      {/* Menu */}
      <nav aria-label={t("sidebarMenu") || "Sidebar menu"}>
        <MenuList as="ul">
          <li>
            <MenuItemRow as="button" onClick={handleHistoryNavigation} aria-label={t("recentSearches")}> <History /> {t("recentSearches")} </MenuItemRow>
          </li>
          <li>
            <MenuItemRow as="button" onClick={handleFavoriteNavigation} aria-label={t("savedItems")}> <Heart /> {t("savedItems")} </MenuItemRow>
          </li>
          <li>
            <MenuItemRow as="button" onClick={() => window.open(feedbackFormLink)} aria-label={t("sendFeedback")}> <MessageCircleDashed /> {t("sendFeedback")} </MenuItemRow>
          </li>
          <li>
            <SubMenuTitle as="button" onClick={() => setIsThemeOpen((v) => !v)} aria-expanded={isThemeOpen} aria-controls="theme-options">
              {theme === "light" ? (
                <Sun style={{ rotate: isThemeOpen ? "90deg" : "0deg", transition: "rotate 0.5s ease-in-out" }} />
              ) : (
                <Moon style={{ rotate: isThemeOpen ? "90deg" : "0deg", transition: "rotate 0.5s ease-in-out" }} />
              )}
              {t("theme")}
            </SubMenuTitle>
            <SubMenuContent $open={isThemeOpen} id="theme-options">
              <MenuItemRow as="button" onClick={() => setTheme("light")} aria-checked={theme === "light"} role="menuitemradio">{theme === "light" && <FaCheck />} {t("light")}</MenuItemRow>
              <MenuItemRow as="button" onClick={() => setTheme("dark")} aria-checked={theme === "dark"} role="menuitemradio">{theme === "dark" && <FaCheck />} {t("dark")}</MenuItemRow>
              <MenuItemRow as="button" onClick={() => setTheme("system")} aria-checked={theme === "system"} role="menuitemradio">{theme === "system" && <FaCheck />} {t("system")}</MenuItemRow>
            </SubMenuContent>
          </li>
          <li>
            <MenuItemRow as="button" aria-label={t("changePassword")}> <CgPassword size={20} /> {t("changePassword")} </MenuItemRow>
          </li>
          <li>
            <MenuItemRow as="button" onClick={handleLogout} aria-label={t("signOut")}> <DoorOpen /> {t("signOut")} </MenuItemRow>
          </li>
        </MenuList>
      </nav>
    </aside>
  );

  return (
    <Sidebar
      open={isOpen}
      onSetOpen={setIsOpen}
      pullRight={i18n.language === "ar" ? false : true}
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
  li{
    width: 100%;
  }
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
  width: 100%;
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
  width: 100%;
  background: transparent;
  color: var(--text-color);
  transition: opacity 0.2s ease;
  outline: none;
  border: none;
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
