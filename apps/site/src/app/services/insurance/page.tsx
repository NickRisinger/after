import Image from 'next/image';
import BreadCrumbs from '~/components/BreadCrumbs';
import { ServiceCard } from '~/components/ServiceCard';

export default function Page() {
  return (
    <main className="flex flex-col gap-y-3 pt-12">
      <BreadCrumbs />

      <section className="container mt-12 flex items-center justify-between rounded-[15px] bg-[#F9F9F9]">
        <div className="ml-[70px] flex flex-col gap-y-[180px]">
          <div className="flex flex-col gap-y-[52px]">
            <h1 className="text-[44px] font-bold">Защитите своё будущее</h1>
            <p className="max-w-[297px]">
              Страхование имущества от пожара, затопления и других
              непредвиденных ситуаций.
            </p>
          </div>
          <button className="flex h-[46px] w-fit items-center rounded-[10px] bg-[#E2061A] px-4 font-semibold text-white">
            Заказать обратный звонок
          </button>
        </div>
        <div className="">
          <Image
            className="h-full w-full"
            src="/insurance/hero.png"
            alt="urgentbuyout"
            quality="100"
            width="694"
            height="825"
          />
        </div>
      </section>

      <section className="container mt-36">
        <h2 className="text-3xl font-bold">Страхование в Арбат</h2>
        <div className="mt-14 grid grid-flow-row grid-cols-2 gap-10">
          <ServiceCard
            title="Индивидуальный подход"
            description="Наши специалисты подберут лучшую программу страхования."
            imageUrl="insurance/individual-approach.png"
          />

          <ServiceCard
            title="Скорость"
            description="Оформляем страховку в короткие сроки."
            imageUrl="insurance/speed.png"
          />

          <ServiceCard
            title="Бесплатная консультация"
            description="Бесплатно оформим полис страхования и ответим на все вопросы."
            imageUrl="insurance/free-consultation.png"
          />

          <ServiceCard
            title="Экономия времени"
            description="Вы посещаете офис только один раз, чтобы забрать документы."
            imageUrl="insurance/save-time.png"
          />
        </div>
      </section>

      <section className="container mt-36 flex flex-col gap-y-9">
        <h2 className="text-3xl font-bold">Купить полис страхования ипотеки</h2>
        <div className="flex flex-col gap-y-6">
          <div className="h-[106px] rounded-[15px] bg-[#F4F4F4]"></div>
          <div className="h-[185px] rounded-[15px] bg-[#F4F4F4]"></div>
          <div className="h-[144px] rounded-[15px] bg-[#F4F4F4]"></div>
        </div>
        <div className="flex gap-x-6">
          <button className="flex h-[46px] w-fit items-center rounded-[10px] bg-[#E2061A] px-4 font-semibold text-white">
            Показать цены
          </button>
          <button className="flex h-[46px] w-fit items-center rounded-[10px] bg-[#E2061A] px-4 font-semibold text-white">
            Продолжить прошлый расчет
          </button>
        </div>
      </section>

      <section className="my-36 bg-[#F9F9F9] py-16">
        <div className="container">
          <h2 className="max-w-[549px] text-3xl font-bold">
            Электронный полис страхования - это быстро и удобно
          </h2>
          <p className="mt-8 max-w-[715px] text-xl font-medium">
            Страховая компания возместит Вам ущерб, причиненный от пожара,
            кражи, затопления или компенсирует расходы соседям при повреждении
            их имущества.
          </p>
        </div>
      </section>
    </main>
  );
}
