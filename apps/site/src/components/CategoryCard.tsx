import Link from 'next/link';
import type { ReactNode } from 'react';

function ArrowIcon() {
  return (
    <svg
      className="h-[24px] w-[24px]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289Z"
        fill="#E2061A"
      />
    </svg>
  );
}

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

        <ArrowIcon />
      </div>
      <div className="flex flex-col gap-y-[6px]">{children}</div>
    </Link>
  );
}
