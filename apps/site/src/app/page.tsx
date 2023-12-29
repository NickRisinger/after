import CategoryCard from '~/components/CategoryCard';
import Filters from '~/components/Filters';
import SberIcon from '~/components/icons/SberIcon';

export default function Home() {
  return (
    <main className="">
      <div className="container">
        <Filters />
      </div>

      <div className="container mt-10 grid grid-cols-4 gap-x-5">
        <CategoryCard title="Вторичная недвижимость" link="/">
          <span className="text-sm text-[#989898]">Количество объявлений</span>
          <span className="text-xl font-medium">11 500</span>
        </CategoryCard>
        <CategoryCard title="Дома, дачи и коттеджи" link="/">
          <span className="text-sm text-[#989898]">Количество объявлений</span>
          <span className="text-xl font-medium">2 500</span>
        </CategoryCard>
        <CategoryCard title="Коммерческая недвижимость" link="/">
          <span className="text-sm text-[#989898]">Количество объявлений</span>
          <span className="text-xl font-medium">1 400</span>
        </CategoryCard>
        <CategoryCard title="Онлайн-ипотека от 5,7%" link="/">
          <span className="text-sm text-[#989898]">Один клик до переезда</span>
          <SberIcon />
        </CategoryCard>
      </div>

      <div className="mt-[140px] flex flex-col gap-y-10 py-12">
        <h2 className="">
          Мы создаем качественный сервис в сфере недвижимости
        </h2>
        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
