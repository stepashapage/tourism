import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className=" h-screen relative">
        <Image
          className="size-full object-cover"
          src="/image.svg"
          alt="hero"
          width={1920}
          height={1080}
        />
        <div className="absolute  bottom-[60px] right-[200px] w-[800px] flex flex-col gap-4 items-end">
          <h2 className="font-regular text-5xl uppercase">Эксрурсии и туры</h2>
          <h1 className="font-bold text-8xl uppercase">на камчатку</h1>
          <p className="text-end opacity-50 ">
            Идейные соображения высшего порядка, а также начало повседневной
            работы по формированию позиции позволяет оценить значение
            соответствующий условий активизации.
          </p>
          <button className="  py-4 px-16 bg-[#FFBD4E] text-black uppercase">
            Подробнее
          </button>
        </div>
      </section>
      <section className="relative pt-[115px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <h1 className="uppercase text-[36px] font-bold">
            немного <br />
            <span className="text-[#FFBD4E]">о нашей компании</span>
          </h1>
          <div className="text-[24px] font-bold flex justify-between gap-4 align-center">
            <button className="uppercase text-[#29343E] bg-[#FFBD4E]   w-full rounded-2xl p-6 text-start">
              кто мы?
            </button>
            <button className="uppercase w-full border border-[#FFBD4E] rounded-2xl p-6 text-start">
              что <span className="text-[#FFBD4E]">мы делаем?</span>
            </button>
            <button className="uppercase w-full border border-[#FFBD4E] rounded-2xl p-6 text-start">
              кто <span className="text-[#FFBD4E]">наши клиенты?</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[50px]">
            <div className="flex flex-col justify-between">
              <Image src="/about.svg" alt="hero" width={270} height={280} />
              <p>
                Идейные соображения высшего порядка, а также начало повседневной
                работы по формированию позиции позволяет оценить значение
                соответствующий условий активизации. Товарищи! консультация с
                широким активом играет важную роль в формировании дальнейших
                направлений развития. ..
              </p>
            </div>
            <Image src="/imageAbout.svg" alt="hero" width={590} height={450} />
          </div>
        </div>
      </section>
      <section className="relative pt-[115px]">
        <div className="max-w-[1200px] mx-auto pb-12">
          <h1 className="uppercase text-[36px] font-bold">
            ближайшие <br />
            <span className="text-[#FFBD4E]">туры</span>
          </h1>
        </div>
        <Image src="/countres.svg" alt="hero" width={1920} height={450} />
        <Image
          className="absolute bottom-0 left-0 w-full z-[-1] object-cover"
          src="/mountains.svg"
          alt="hero"
          width={1920}
          height={450}
        />
      </section>
    </main>
  );
}
