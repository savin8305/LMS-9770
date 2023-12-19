import React, { FC, useEffect, useState } from "react";
import {Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChartoutlinedIcon,
  GroupsIcon,
  OndemandVideoIcon,
  VideoCallIcon,
  WebIcon,
  QuizIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  SettingsIcon,
  ExitToAppIcon,
} from "./icon";
import avatarDefault from "../../../../public/assets/avatar.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface ItemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>
      <Typography className="text-[16px] font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const Sidebar: FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  };

  return (
    <Box
      sx={{
        "&.pro-sidebar-inner": {
          background: theme === "dark" ? "#111043 !important" : "#fff !important",
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "&.pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "&.pro-menu-item.active": {
            color: "#6870fa !important",
          },
          "&.pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            opacity: 1,
            "& .pro-menu-item": {
              color: `${theme !== "dark" ? "#000" : "#fff"}`,
            },
          },
        },
      }}
      className="bg-white dark:bg-[#111043]"
    >
      <ProSidebar collapsed={isCollapsed}>
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
          style={{
            margin: "10px 20px 0",
          }}
        >
          {!isCollapsed && (
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
              <Link href="/">
                <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                  Elearning
                </h3>
              </Link>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
                <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {/* Add your other menu items using the <Item /> component */}
        <Item title="Dashboard" to="/dashboard" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
        {/* Add other menu items here */}
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
