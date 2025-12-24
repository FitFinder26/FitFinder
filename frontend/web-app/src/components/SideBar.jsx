import {
  DoorOpen,
  Heart,
  History,
  MessageCircleDashed,
  User as UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useAuth } from "../../../shared/hooks/useAuth";
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function SideBar({ isOpen, setIsOpen }) {
  const { logout } = useAuth();
  const navigator = useNavigate();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      {/* Buttons */}
      <div style={{ padding: "1rem" }}>
        <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
        <button onClick={() => setIsOpen(false)} style={{ marginLeft: "1rem" }}>
          Close Sidebar
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar
        toggled={isOpen}
        breakPoint="always"
        onBackdropClick={() => setIsOpen(false)}
      >
        {/* User icon container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.7)", // optional separator
          }}
        >
          <UserIcon size={48} /> {/* Or use an <img> avatar */}
        </div>

        {/* Menu items */}
        <Menu>
          <MenuItem icon={<History />} onClick={() => navigator("/history")}>
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
