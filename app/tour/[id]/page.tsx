"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Form_container } from "@/components/shared/form-container";
import { Calendar, Clock8, Wallet } from "lucide-react";

const Tours: React.FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const img = searchParams.get("img");
  const Date = searchParams.get("Date");

  return (
    <main>
      <section className="h-screen relative">
        <Image
          className="w-full h-full object-cover"
          src={img || "/default.jpg"}
          alt="hero"
          width={1920}
          height={1080}
        />
        <div className="absolute top-[300px] left-[200px] w-[800px] flex flex-col gap-4 items-start">
          <h1 className="font-bold text-8xl uppercase">{name}</h1>
          <Image
            className=""
            src="/title.svg"
            alt="hero"
            width={450}
            height={90}
          />
        </div>
        <Image
          className="absolute bottom-[105px] left-[350px] w-[1182px] h-[250px]"
          src="/line.svg"
          alt="hero"
          width={1200}
          height={250}
        />
      </section>
      <section className="bg-[#212B34] backdrop-blur-58 py-6 pb-[50px]">
        <div className="flex flex-col gap-12 max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-2xl">Бронирование тура</h1>
            <p className="text-[12px] opacity-50">
              Оставьте ваши данные и мы перезвоним вам для уточнения всех
              деталей для более точного бронирования!
            </p>
          </div>
          <Form_container />
        </div>
      </section>
      <section className="relative pt-[50px]">
        <div className="max-w-[1060px] mx-auto flex flex-col gap-[30px]">
          <h1 className="font-bold text-[40px] leading-[64px] text-center">
            Откройте для себя Шестой континент в роскошном обрамлении на борту
            новейшего экспедиционного лайнера SH Vega.
          </h1>
          <p className="text-[24px] leading-[38px] text-center w-[70%] mx-auto">
            Для этого путешествия мы выбрали даты в самый пик антарктического
            лета, когда богатый природный мир Антарктики раскрывается во всем
            своем многообразии.
          </p>
          <div className="flex justify-center items-center">
            <div className="border border-[3px] border-[#FFBD4E] px-[20px] py-[50px] flex flex-col justify-between items-center gap-2 rounded-[50%] w-[290px] h-[290px]">
              <div className="flex flex-col gap-[15px] items-center justify-center">
                <Clock8 color="#fff" size={42} />
                <h1 className=" uppercase font-bold text-[24px] text-[#FFBD4E]">
                  Даты
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-[24px] text-[#FFBD4E]">{Date}</p>
                <p className="font-bold text-[24px] text-[#fff]">2023 года</p>
              </div>
            </div>
            <div className="border border-[3px] border-[#FFBD4E] px-[20px] py-[50px] flex flex-col justify-between items-center gap-2 rounded-[50%] w-[290px] h-[290px] ml-[-20px]">
              <div className="flex flex-col gap-[15px] items-center justify-center">
                <Wallet color="#fff" size={42} />
                <h1 className=" uppercase font-bold text-[24px] text-[#FFBD4E]">
                  Стоимость
                </h1>
              </div>
              <div className="flex items-center gap-2 pb-9">
                <p className="font-bold text-[24px] text-[#fff] ">{price} </p>
                <p className="font-bold text-[24px] text-[#FFBD4E]"> ₽</p>
              </div>
            </div>
            <div className="border border-[3px] border-[#FFBD4E] px-[20px] py-[50px] flex flex-col justify-between items-center gap-2 rounded-[50%] w-[290px] h-[290px] ml-[-20px]">
              <div className="flex flex-col gap-[15px] items-center justify-center">
                <Wallet color="#fff" size={42} />
                <h1 className=" uppercase font-bold text-[24px] text-[#FFBD4E]">
                  Гид
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-regular text-[16px] text-[#fff] text-center ">
                  Научный руководитель путешествия морский биолог{" "}
                </p>
                <p className="font-regular text-[17px] text-[#FFBD4E]">
                  Владимир Вертянкин
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full h-[1600px] z-[-1] absolute top-[-405px] left-0"
          src="/pageBg.svg"
          alt="hero"
          width={1920}
          height={1080}
        />
      </section>
      <section className="relative pt-[250px]">
        <h1
          className="relative uppercase font-bold text-[36px] pl-[140px] after:content-['Программа'] after:absolute 
        after:top-[-145px] after:left-[0] after:text-[#fff] after:font-bold after:text-[160px] after:z-[-1] after:opacity-10"
        >
          тура <span className="text-[#FFBD4E]">по дням</span>
        </h1>
        <div className="pt-[250px] flex flex-col gap-[370px] ">
          <div className="relative">
            <div className="w-[715px] h-[785px] absolute top-[-90px] right-[205px] bg-fill-101315-41 backdrop-blur-58 py-[38px] px-[28px]">
              <div className="relative flex flex-col items-start gap-[30px] px-[90px]">
                <Image
                  src="/title2.svg"
                  alt="hero"
                  width={468}
                  height={115}
                  className="m-auto"
                />
                <div className="flex items-center gap-[10px]">
                  <Calendar color="#FFBD4E" size={40} />
                  <h2 className="font-bold text-[24px]">7 октября</h2>
                </div>
                <p className="font-regular text-[16px] text-[#fff] leading-[26px]">
                  Прибытие в Международный Аэропорт имени Беназир Бхутто
                  Турецкими авиалиниями в 04:00 утра. Примерно 1 час визовых
                  формальностей. Получение багажа. Пересадка на внутренний рейс
                  в 10:30 утра до Гилгита. Готовимся, день будет длинным. По
                  прилету в Гилгит мы пересаживаемся на наши джипы и
                  отправляемся в долину Фандер (переезд 4 часа). Размещение в
                  отеле. Традиционный вечер знакомств с вручением паганелевских
                  футболок и значков.
                </p>
                <ul className="flex flex-col gap-[10px] pl-[20px]">
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Питание: обед, ужин
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Размещение: отель
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Расстояние: 200 км
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Время в пути: 5 часов
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Высота: 2800 м
                  </li>
                </ul>
              </div>
              <Image
                className="w-[660px] h-[711px] z-[-1] absolute top-[37px] left-[28px]"
                src="/line2.svg"
                alt="hero"
                width={1920}
                height={555}
              />
              <div className="absolute bottom-[-25px] right-[-25px] rounded-[50%] w-[166px] h-[166px] bg-[#FFBD4E] p-[30px] flex flex-col justify-center items-start">
                <p className="uppercase text-[#29343E] font-regular text-[14px]">
                  день
                </p>
                <h1 className="font-bold text-[95px] text-[#29343E] leading-[95px]">
                  01
                </h1>
              </div>
            </div>
            <Image
              className="w-full z-[-1] "
              src="/tourDay1.svg"
              alt="hero"
              width={1920}
              height={555}
            />
          </div>
          <div className="relative">
            <div className="w-[715px] h-[785px] absolute top-[-90px] right-[205px] bg-fill-101315-41 backdrop-blur-58 py-[38px] px-[28px]">
              <div className="relative flex flex-col items-start gap-[30px] px-[90px]">
                <Image
                  src="/title2.svg"
                  alt="hero"
                  width={468}
                  height={115}
                  className="m-auto"
                />
                <div className="flex items-center gap-[10px]">
                  <Calendar color="#FFBD4E" size={40} />
                  <h2 className="font-bold text-[24px]">7 октября</h2>
                </div>
                <p className="font-regular text-[16px] text-[#fff] leading-[26px]">
                  Прибытие в Международный Аэропорт имени Беназир Бхутто
                  Турецкими авиалиниями в 04:00 утра. Примерно 1 час визовых
                  формальностей. Получение багажа. Пересадка на внутренний рейс
                  в 10:30 утра до Гилгита. Готовимся, день будет длинным. По
                  прилету в Гилгит мы пересаживаемся на наши джипы и
                  отправляемся в долину Фандер (переезд 4 часа). Размещение в
                  отеле. Традиционный вечер знакомств с вручением паганелевских
                  футболок и значков.
                </p>
                <ul className="flex flex-col gap-[10px] pl-[20px]">
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Питание: обед, ужин
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Размещение: отель
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Расстояние: 200 км
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Время в пути: 5 часов
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Высота: 2800 м
                  </li>
                </ul>
              </div>
              <Image
                className="w-[660px] h-[711px] z-[-1] absolute top-[37px] left-[28px]"
                src="/line2.svg"
                alt="hero"
                width={1920}
                height={555}
              />
              <div className="absolute bottom-[-25px] right-[-25px] rounded-[50%] w-[166px] h-[166px] bg-[#FFBD4E] p-[30px] flex flex-col justify-center items-start">
                <p className="uppercase text-[#29343E] font-regular text-[14px]">
                  день
                </p>
                <h1 className="font-bold text-[95px] text-[#29343E] leading-[95px]">
                  02
                </h1>
              </div>
            </div>
            <Image
              className="w-full z-[-1] "
              src="/tourDay2.svg"
              alt="hero"
              width={1920}
              height={555}
            />
          </div>
          <div className="relative">
            <div className="w-[715px] h-[785px] absolute top-[-90px] right-[205px] bg-fill-101315-41 backdrop-blur-58 py-[38px] px-[28px]">
              <div className="relative flex flex-col items-start gap-[30px] px-[90px]">
                <Image
                  src="/title2.svg"
                  alt="hero"
                  width={468}
                  height={115}
                  className="m-auto"
                />
                <div className="flex items-center gap-[10px]">
                  <Calendar color="#FFBD4E" size={40} />
                  <h2 className="font-bold text-[24px]">7 октября</h2>
                </div>
                <p className="font-regular text-[16px] text-[#fff] leading-[26px]">
                  Прибытие в Международный Аэропорт имени Беназир Бхутто
                  Турецкими авиалиниями в 04:00 утра. Примерно 1 час визовых
                  формальностей. Получение багажа. Пересадка на внутренний рейс
                  в 10:30 утра до Гилгита. Готовимся, день будет длинным. По
                  прилету в Гилгит мы пересаживаемся на наши джипы и
                  отправляемся в долину Фандер (переезд 4 часа). Размещение в
                  отеле. Традиционный вечер знакомств с вручением паганелевских
                  футболок и значков.
                </p>
                <ul className="flex flex-col gap-[10px] pl-[20px]">
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Питание: обед, ужин
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Размещение: отель
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Расстояние: 200 км
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Время в пути: 5 часов
                  </li>
                  <li className="relative after:content-[''] after:absolute after:top-[8px] after:left-[-15px] after:w-[8px] after:h-[8px] after:bg-[#FFBD4E] after:rounded-[50%]">
                    Высота: 2800 м
                  </li>
                </ul>
              </div>
              <Image
                className="w-[660px] h-[711px] z-[-1] absolute top-[37px] left-[28px]"
                src="/line2.svg"
                alt="hero"
                width={1920}
                height={555}
              />
              <div className="absolute bottom-[-25px] right-[-25px] rounded-[50%] w-[166px] h-[166px] bg-[#FFBD4E] p-[30px] flex flex-col justify-center items-start">
                <p className="uppercase text-[#29343E] font-regular text-[14px]">
                  день
                </p>
                <h1 className="font-bold text-[95px] text-[#29343E] leading-[95px]">
                  03
                </h1>
              </div>
            </div>
            <Image
              className="w-full z-[-1] "
              src="/tourDay2.svg"
              alt="hero"
              width={1920}
              height={555}
            />
          </div>
        </div>
      </section>
      <section className="relative pt-[180px]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto gap-12">
          <p className="text-[18px] text-[#FFFCF9] font-light">
            <strong className="font-semibold">Мы строим маршрут</strong> так,
            чтобы за неделю показать самые интересные места региона. Включаем в
            программу только лучшее проживание, транспорт, питание, людей и
            достопримечательности.{" "}
            <strong className="font-semibold">Работаем с группами</strong> до 10
            человек и лично их сопровождаем.
          </p>
          <Image src="/compass.svg" alt="hero" width={300} height={300} />
          <p className="text-[18px] text-[#FFFCF9] font-light">
            <strong className="font-semibold">Мы строим маршрут</strong> так,
            чтобы за неделю показать самые интересные места региона. Включаем в
            программу только лучшее проживание, транспорт, питание, людей и
            достопримечательности.{" "}
            <strong className="font-semibold">Работаем с группами</strong> до 10
            человек и лично их сопровождаем.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Tours;
