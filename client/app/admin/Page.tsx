"use client"
import React, { FC, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Heading from "../utils/Heading";
import AdminSidebar from "../Components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import Topbar from "../Components/Admin/sidebar/TopBar";
import { ColorModeContext, useMode } from "../Components/Admin/sidebar/theme";

interface Props {
}

const Page: FC<Props> = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AdminProtected>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <div className="flex h-[100vh]">
              {/* Sidebar */}
              {isSidebar && (
                <div className="1500px:w-[16%] w-1/5">
                  <AdminSidebar />
                </div>
              )}

              {/* Main Content */}
              <div className="w-[100%]">
                <Topbar/>
                <Heading
                  title="Elearn-admin"
                  description="Elearning is a platform for students to learn and get help from mentors"
                  keywords="program mern redux ml"
                />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AdminProtected>
  );
};

export default Page;
