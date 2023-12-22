import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaqItem } from './ui/FaqItem';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-3">
      <FaqItem question="test" answer="test" />
      <FaqItem question="test" answer="test" />
      <FaqItem question="test" answer="test" />
    </main>
  );
}

function BreadCrumbs(crumbs: Array<string>) {
  // color: var(--dark-grey, #989898);
  // font-family: Open Sans;
  // font-size: 14px;
  // font-style: normal;
  // font-weight: 500;
  // line-height: normal;
  return (
    <div className="">
      <Link href="/"></Link>
    </div>
  );
}

function Header(children: ReactNode) {
  return <h1 className="text-3xl font-bold text-[#2F2F2F]">{children}</h1>;
}

function FaqList() {}

function Pagination() {}
