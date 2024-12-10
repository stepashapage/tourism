import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, User as FirebaseUser } from "firebase/auth";
import { auth } from "../../firebase"; // Убедитесь, что путь правильный

type Props = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  user: FirebaseUser | null; // Информация о пользователе
};

// interface User {
//   uid: string;
//   email: string | null;
//   displayName: string | null;
//   metadata: {
//     creationTime: string | undefined;
//   };
// }

export const ModalAccount: React.FC<Props> = ({ isOpen, onClose, user }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error("Error signing out:", error);
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
      {isOpen && user && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            ref={modalRef}
            className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <span
              className="absolute top-0 right-0 p-4 text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">
              Информация о пользователе
            </h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>UID:</strong> {user.uid}
            </p>
            <p>
              <strong>Дата регистрации:</strong> {user.metadata.creationTime}
            </p>
            {/* Пароль не хранится в Firebase Authentication, поэтому его нельзя отобразить */}
            <button
              onClick={handleSignOut}
              className="w-full p-2 bg-red-500 text-white rounded mt-4"
            >
              Выйти из аккаунта
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
