import Link from 'next/link';
import type { ReactNode } from 'react';

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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="flex flex-col gap-y-6 rounded-[15px] bg-[#F9F9F9] px-8 py-7 text-[#2F2F2F]">
      <div className="text-xl font-medium">{question}</div>
      <div className="text-base font-normal leading-[25px]">{answer}</div>
    </div>
  );
}

function Pagination() {}
