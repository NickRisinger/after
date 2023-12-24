import { type ReactNode } from 'react';
import { FaqItem } from './ui/FaqItem';
import { faqItems } from './data';
import BreadCrumbs from '~/components/BreadCrumbs';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-3">
      <BreadCrumbs />
      {faqItems.map(({ question, answer }, index) => (
        <FaqItem key={index} question={question} answer={answer} />
      ))}
    </main>
  );
}

function Header(children: ReactNode) {
  return <h1 className="text-3xl font-bold text-[#2F2F2F]">{children}</h1>;
}

function FaqList() {}

function Pagination() {}
