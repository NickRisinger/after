import Link from 'next/link';
import LogoIcon from '~/assets/svgs/logo.svg';
import MapMarkerIcon from '~/assets/svgs/map-marker.svg';
import PhoneIcon from '~/assets/svgs/phone.svg';
import HeartIcon from '~/assets/svgs/heart.svg';

export function Header() {
  return (
    <header className="border-b border-[#DDDDDD] py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-[70px]">
          <Link href="/">
            <LogoIcon className="h-[33px] w-[123px]" />
          </Link>
          <div className="group flex cursor-pointer items-center gap-x-2">
            <MapMarkerIcon className="h-[18px] w-[13px]" />
            <span className="group-hover:text-[#E2061A]">Кострома</span>
          </div>
          <div className="group flex cursor-pointer items-center gap-x-2">
            <PhoneIcon className="h-[18px] w-[18px]" />
            <span className="group-hover:text-[#E2061A]">
              + 7 (4942) 36-00-61
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="flex h-[46px] items-center rounded-[10px] border border-[#C5C5C5] px-3">
            <HeartIcon className="h-[22px] w-[22px]" />
          </button>
          <button className="flex h-[46px] items-center rounded-[10px] border border-[#C5C5C5] px-4 font-semibold">
            Добавить объявление
          </button>
          <button className="flex h-[46px] items-center rounded-[10px] bg-[#E2061A] px-4 font-semibold text-white">
            Личный кабинет
          </button>
        </div>
        <div className="hidden"></div>
      </div>
    </header>
  );
}
