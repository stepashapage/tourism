"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

export const Form_container: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = () => {
    if (name && phone && email) {
      setOpen(true);
      setButtonDisabled(true);
    } else {
      setErrorOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setErrorOpen(false);
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "25%",
    left: "calc(50% - 200px)",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    border: "none",
    boxShadow: 24,
    paddingBottom: 24,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000",
  };

  return (
    <div className="flex gap-4">
      <TextField
        className="w-full text-white"
        InputProps={{ className: "text-white" }}
        InputLabelProps={{ className: "text-white" }}
        fullWidth
        label="Ваше имя"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#FFBD4E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFBD4E",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FFBD4E",
          },
        }}
      />
      <TextField
        className="w-full text-white"
        InputProps={{ className: "text-white" }}
        InputLabelProps={{ className: "text-white" }}
        fullWidth
        label="Ваш номер телефона"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#FFBD4E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFBD4E",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FFBD4E",
          },
        }}
      />
      <TextField
        className="w-full text-white"
        InputProps={{ className: "text-white" }}
        InputLabelProps={{ className: "text-white" }}
        fullWidth
        label="Ваш Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#FFBD4E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFBD4E",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FFBD4E",
          },
        }}
      />
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          className="size-full bg-yellow-500 text-white border-2 border-white hover:border-[#FFBD4E]"
          fullWidth
          variant="contained"
          disabled={buttonDisabled}
          onClick={handleOpen}
          sx={{
            "&:hover": {
              borderColor: "#FFBD4E",
            },
          }}
        >
          <Typography variant="button" className="text-white">
            ЗАБРОНИРОВАТЬ
          </Typography>
        </Button>
      </motion.div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            style={modalStyle}
          >
            <div className="flex items-center justify-center bg-green-500 w-full h-24 rounded-t-lg mb-4">
              <CheckCircleIcon className="text-white" fontSize="large" />
            </div>
            <Typography
              variant="h6"
              component="h2"
              className="text-center mb-4"
            >
              Спасибо!
            </Typography>
            <Typography className="text-center mb-4">
              Мы отправили вам подтверждающее письмо. Проверьте свою почту.
            </Typography>
            <Button
              variant="outlined"
              className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
              onClick={handleClose}
            >
              ЗАКРЫТЬ
            </Button>
          </motion.div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={errorOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={errorOpen}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            style={modalStyle}
          >
            <div className="flex items-center justify-center bg-red-500 w-full h-24 rounded-t-lg mb-4">
              <CloseIcon className="text-white" fontSize="large" />
            </div>
            <Typography
              variant="h6"
              component="h2"
              className="text-center mb-4"
            >
              Ошибка!
            </Typography>
            <Typography className="text-center mb-4">
              Пожалуйста, заполните все поля правильно.
            </Typography>
            <Button
              variant="outlined"
              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
              onClick={handleClose}
            >
              ПОПРОБОВАТЬ СНОВА
            </Button>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
};
