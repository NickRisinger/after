import Image from 'next/image';
import BreadCrumbs from '~/components/BreadCrumbs';
import { ServiceCard } from '~/components/ServiceCard';

export default function Page() {
  return (
    <main className="container flex flex-col gap-y-3 pt-12">
      <BreadCrumbs />

      <section className="mt-12 flex items-center justify-between rounded-[15px] bg-[#F9F9F9]">
        <div className="ml-[70px] flex flex-col gap-y-[180px]">
          <div className="flex flex-col gap-y-[52px]">
            <h1 className="text-[44px] font-bold">Срочный выкуп</h1>
            <p className="max-w-[392px]">
              Купим вашу квартиру за собственные средства компании. Бесплатная
              оценка квартиры при выкупе и подготовка всех документов.
            </p>
          </div>
          <button className="flex h-[46px] w-fit items-center rounded-[10px] bg-[#E2061A] px-4 font-semibold text-white">
            Заказать обратный звонок
          </button>
        </div>
        <div className="">
          <Image
            className="h-full w-full"
            src="/urgentbuyout/hero.png"
            alt="urgentbuyout"
            quality="100"
            width="694"
            height="825"
          />
        </div>
      </section>

      <section className="my-36">
        <h2 className="text-3xl font-bold">Как это работает?</h2>
        <div className="mt-14 grid grid-flow-row grid-cols-2 gap-10">
          <ServiceCard
            title="Подача заявки"
            description="Оставьте заявку на звонок или позвоните нам для уточнения деталей сделки."
            imageUrl="urgentbuyout/filing-application.png"
          />

          <ServiceCard
            title="Оценка имущества"
            description="Наш специалист договаривается с Вами о встрече, выезжает на дом и оценивает недвижимость."
            imageUrl="urgentbuyout/grade-property.png"
          />

          <ServiceCard
            title="Условия сделки"
            description="Мы бесплатно проверим Ваши документы, договоримся об условиях и цене."
            imageUrl="urgentbuyout/terms-transaction.png"
          />

          <ServiceCard
            title="Завершение сделки"
            description="Вы получаете деньги и договор купли-продажи."
            imageUrl="urgentbuyout/completing-deal.png"
          />
        </div>
      </section>
    </main>
  );
}
