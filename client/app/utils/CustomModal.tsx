import { Modal, Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setRoute?: (route: string) => void;
  component: React.ComponentType<any>;
};

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/564x/3d/28/30/3d2830f396b067447b135942d7d1f8aa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <Box className="h-[80%] w-[70%] bg-white dark:bg-gray-800 rounded-[10px] shadow-lg p-6 outline-none relative overflow-hidden transform scale-100 hover:scale-105 transition-transform duration-300">
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "gray",
          }}
        >
          <CancelIcon />
        </IconButton>
        <div className="flex h-full">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">

            <Component setOpen={setOpen} setRoute={setRoute} />
          </div>
          <div className="hidden md:flex md:w-1/2 lg:w-1/2 xl:w-1/2 overflow-hidden">
            <img
              src="https://i.pinimg.com/236x/9e/5c/55/9e5c552f330c2e8a36d0a46f158072ec.jpg"
              alt="Side Image"
              className="w-full h-full object-cover rounded-r-[10px] transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
