import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25282F] text-white pt-20 pb-4 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">О КОМПАНИИ</h2>
            <ul className="space-y-2">
              <li>Преимущества</li>
              <li>Команда</li>
              <li>Фотоотчёты</li>
              <li>Документы и лицензии</li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <Image src="/logo.svg" alt="Logo" width={410} height={50} />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 text-right">
            <h2 className="text-xl font-semibold mb-4">КОНТАКТЫ</h2>
            <p className="mb-2">Москва</p>
            <p className="mb-2">+7-951-280-0269</p>
            <p className="mb-2">generation@mail.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">Платформа обработает персональные данные</p>
        </div>
      </div>
    </footer>
  );
};
