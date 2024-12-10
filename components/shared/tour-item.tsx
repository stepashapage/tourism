import React from "react";
import Image from "next/image";
import { Calendar, Plane, Star } from "lucide-react";
import Link from "next/link";

type Props = {
  imageURL: string;
  price: string;
  name: string;
  desc: string;
  date: string;
  id?: string;
};

export const Tour_item: React.FC<Props> = ({
  imageURL,
  price,
  name,
  desc,
  date,
  id,
}) => {
  return (
    <div className="relative border border-[#FFBD4E] w-full h-[580px]">
      <Image
        className="absolute top-[-25px] left-[30px] "
        src={imageURL}
        alt="tour"
        width={825}
        height={540}
      />
      <div className="absolute top-[50px] right-[25px] w-[650px] h-[560px] bg-fill-101315-41 backdrop-blur-58 ">
        <div className="flex flex-col gap-12 justify-between px-6 pt-12 gap-[75px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="uppercase font-semibold text-4xl ">{name}</h1>
              <h2 className="text-[#447F8D]">
                Прекрасный тур на живописный остров
              </h2>
            </div>
            <p className="text-[#FFBD4E] text-[30px] tracking-wider after:content-[''] after:block after:h-[2px] after:bg-[#447F8D] after:w-full after:mt-2 after:pl-[-4px]">
              {date}
            </p>
            <p className="opacity-50 w-[80%]">{desc}</p>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex flex-col gap-0">
              <h2 className="text-[#447F8D] font-light text-end">
                за человека
              </h2>
              <h1 className="uppercase font-bold text-4xl">
                {price} <span className="text-[#FFBD4E]"> ₽</span>
              </h1>
            </div>
            <Link
              href={{
                pathname: `/tour/${id}`,
                query: {
                  name,
                  description: desc,
                  price,
                  img: imageURL,
                  Date: date,
                },
              }}
              className="w-full flex"
            >
              <button className="uppercase w-full bg-[#FFBD4E]  py-[12px]">
                Забронировать
              </button>
              <button className="uppercase w-full border border-[#FFBD4E] py-[12px]">
                подробнее о туре
              </button>
            </Link>
            <div className="flex gap-6 justify-center items-center w-full">
              <div className="flex gap-2 justify-center items-center">
                <Calendar size={24} color="#447F8D" />
                <p className="text-[20px]">5 дней</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <Plane size={24} color="#447F8D" />
                <p className="text-[20px]">перелет</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[18px] right-[19px] flex gap-1">
          <Star size={20} color="#FFBD4E" />
          <Star size={20} color="#FFBD4E" />
          <Star size={20} color="#FFBD4E" />
          <Star size={20} color="#FFBD4E" />
          <Star size={20} color="#FFBD4E" />
        </div>
      </div>
    </div>
  );
};
