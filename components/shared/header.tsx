"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ModalHeader } from "./modalHeader";
import { ModalRegister } from "./modalRegister";
import { ModalAccount } from "./modalAccount"; // Новый компонент для модального окна аккаунта
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../../firebase"; // Убедитесь, что путь правильный

type Props = {
  className?: string;
};

// interface User {
//   uid: string | null;
//   email: string | null;
//   displayName: string | null;
//   metadata: {
//     creationTime: string | undefined;
//   };
// }

export const Header: React.FC<Props> = ({ className }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null); // Состояние для хранения информации о пользователе

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
    setIsAccountVisible(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterVisible(true);
    setIsLoginVisible(false);
    setIsAccountVisible(false);
  };

  const handleAccountClick = () => {
    setIsAccountVisible(true);
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
  };

  return (
    <>
      <header className={cn("z-[1] absolute t0 l0 w-full", className)}>
        <div className="flex justify-between align-center pt-8 px-4 max-w-[1200px] mx-auto">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={210} height={20} />
          </Link>
          <ul className="flex gap-16 uppercase text-base font-bold">
            <li>Индивидуальные туры</li>
            <li>Груповые туры</li>
            {user ? (
              <li className="cursor-pointer" onClick={handleAccountClick}>
                Аккаунт
              </li>
            ) : (
              <li className="cursor-pointer" onClick={handleLoginClick}>
                Войти
              </li>
            )}
          </ul>
        </div>
      </header>
      <ModalHeader
        isOpen={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
        onRegisterClick={handleRegisterClick}
      />
      <ModalRegister
        isOpen={isRegisterVisible}
        onClose={() => setIsRegisterVisible(false)}
        onLoginClick={handleLoginClick}
      />
      <ModalAccount
        isOpen={isAccountVisible}
        onClose={() => setIsAccountVisible(false)}
        user={user}
      />
    </>
  );
};
