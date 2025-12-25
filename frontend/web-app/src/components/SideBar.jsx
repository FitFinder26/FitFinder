import {
  DoorOpen,
  Heart,
  History,
  MessageCircleDashed,
  User as UserIcon,
  Edit2 as EditIcon,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useAuthContext } from "../providers/AuthProvider";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Notifier } from "./Notifier";
import styled from "styled-components";

export default function SideBar({ isOpen, setIsOpen }) {
  const { logout, user, refreshUser, updateProfileImage } = useAuthContext();
  const navigator = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Reset image error when the user's profile image changes
    setImgError(false);
  }, [user?.profileImageURL]);

  const handleLogout = () => {
    logout();
    navigator("/");
    window.location.reload();
  };

  const handleHistoryNavigation = () => {
    navigator("/history");
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
      if (res && res.ok) {
        Notifier.notifySuccess("Profile image changed successfuly");
        await refreshUser();
      } else {
        const text = res ? await res.text() : null;
        console.error("Profile image upload failed", res && res.status, text);
        Notifier.notifyError("Profile image upload failed");
      }
    } catch (err) {
      console.error("Profile image upload error", err);
      Notifier.notifyError("Profile image upload failed");
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  return (
    <>
      {/* Buttons */}
      <TopButtons>
        <ActionButton onClick={() => setIsOpen(true)}>
          Open Sidebar
        </ActionButton>
        <ActionButton onClick={() => setIsOpen(false)}>
          Close Sidebar
        </ActionButton>
      </TopButtons>

      {/* Sidebar */}
      <Sidebar
        toggled={isOpen}
        breakPoint="always"
        onBackdropClick={() => setIsOpen(false)}
      >
        {/* User icon container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.5rem 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.7)", // optional separator
          }}
        >
          {/* hidden file input */}
          <FileInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            aria-hidden="true"
          />

          <UserSection>
            <AvatarContainer>
              <AvatarWrap>
                {user && user.profileImageURL && !imgError ? (
                  <AvatarImg
                    src={user.profileImageURL}
                    alt={user.userName || "Profile"}
                    loading="lazy"
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
                  onClick={handleProfilePicClick}
                  disabled={uploading}
                  title="Change profile photo"
                  aria-label="Change profile photo"
                >
                  {uploading ? <span>...</span> : <EditIcon size={14} />}
                </EditButton>
              )}
            </AvatarContainer>

            <UserName>{user?.userName || "Guest"}</UserName>
          </UserSection>
        </div>

        {/* Menu items */}
        <Menu>
          <MenuItem icon={<History />} onClick={handleHistoryNavigation}>
            Recent Searches
          </MenuItem>
          <MenuItem icon={<Heart />}>Saved Items</MenuItem>
          <MenuItem icon={<MessageCircleDashed />}>Send Feedback</MenuItem>
          <MenuItem icon={<CgPassword />}>Change Password</MenuItem>
          <MenuItem icon={<DoorOpen />} onClick={handleLogout}>
            Sign out
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

// Styled components
const TopButtons = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: inherit;
`;

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
  color: #000;
  padding: 0;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: opacity 0.2s ease, transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.1); /* subtle lift + scale */
    background: #fff;
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
