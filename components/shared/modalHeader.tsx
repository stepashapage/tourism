import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

type Props = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
};

export const ModalHeader: React.FC<Props> = ({
  isOpen,
  onClose,
  onRegisterClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            ref={modalRef}
            className="text-black bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <span
              className="absolute top-0 right-0 p-4 text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4 text-center">Войти</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
              onClick={handleLogin}
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Войти
            </button>
            <p className="flex justify-center gap-4 mt-4 text-center text-black">
              Нет аккаунта?
              <span
                className="text-blue-500 cursor-pointer"
                onClick={onRegisterClick}
              >
                Зарегистрироваться
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
