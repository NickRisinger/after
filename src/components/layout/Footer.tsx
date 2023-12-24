import Link from 'next/link';
import LogoIcon from '~/assets/svgs/logo.svg';
import PhoneIcon from '~/assets/svgs/phone.svg';
import MapMarkerIcon from '~/assets/svgs/map-marker.svg';

export function Footer() {
  return (
    <footer className="border-t border-[#DDDDDD]">
      <section className="container flex items-center justify-between py-12">
        <LogoIcon className="h-[55px] w-[205px]" />
        <p className="max-w-[580px] text-[#989898]">
          2022 Компания “Арбат”. Все права защищены. При использовании
          материалов активная ссылка на источник обязательна.
        </p>
      </section>
      <section className="bg-[#F2FAFF] py-6">
        <div className="container flex justify-between">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-[10px]">
              <PhoneIcon className="h-[18px] w-[18px]" />
              <span>+ 7 (4942) 36-00-61</span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <MapMarkerIcon className="h-[18px] w-[13px]" />
              <span>Кострома, ул. Никитская, д.35</span>
            </div>
            <span>E-mail: arbat-an44@yandex.ru</span>
            <span>Мы в соцсетях:</span>
          </div>

          <div className="grid grid-flow-row grid-cols-[auto_auto_auto] gap-x-[150px]">
            <div className="flex flex-col gap-y-[14px]">
              <span className="font-medium">Информация</span>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:text-[#E2061A]">
                  Карьера
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Обучение
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Наши сотрудники
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Вопросы и ответы
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Отзывы
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Франшиза
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Контакты
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-[14px]">
              <span className="font-medium">Каталог</span>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:text-[#E2061A]">
                  Квартиры и комнаты
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Новостройки без комиссии
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Дома и коттеджи
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Коммерческая недвижимость
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Земельные участки
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Аренда
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-[14px]">
              <span className="font-medium">Услуги</span>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:text-[#E2061A]">
                  Срочный выкуп
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Арбат-строй
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Онлайн-страхование
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Онлайн-ипотека
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Trade-In
                </Link>
                <Link href="/" className="hover:text-[#E2061A]">
                  Арбат-бонус
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col gap-y-3 py-6">
        <Link href="/" className="underline hover:text-[#E2061A]">
          Политика конфиденциальности
        </Link>
        <p className="max-w-[715px] text-sm leading-[18px] text-[#989898]">
          Вся информация на сайте носит исключительно справочный характер и ни
          при каких условиях не является публичной офертой, определяемой
          положениями Статьи 437 ГКРФ
        </p>
      </section>
    </footer>
  );
}
