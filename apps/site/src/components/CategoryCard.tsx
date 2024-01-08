import Link from 'next/link';
import type { ReactNode } from 'react';
import RightArrowIcon from '~/assets/svgs/right-arrow.svg';

export default function CategoryCard({
  title,
  link,
  children,
}: {
  title: string;
  link: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={link}
      className="flex flex-col gap-y-11 rounded-[15px] border border-[#DDDDDD] bg-white px-6 py-5"
    >
      <div className="flex items-center justify-between">
        <span className="max-w-[185px] text-xl font-medium">{title}</span>

        <RightArrowIcon className="h-[24px] w-[24px]" />
      </div>
      <div className="flex flex-col gap-y-[6px]">{children}</div>
    </Link>
  );
}
