import { FaqItem } from './ui/FaqItem';
import { faqItems } from './data';
import BreadCrumbs from '~/components/BreadCrumbs';

export default function Home() {
  return (
    <main className="container flex flex-col gap-y-3">
      <BreadCrumbs />
      {faqItems.map(({ question, answer }, index) => (
        <FaqItem key={index} question={question} answer={answer} />
      ))}
    </main>
  );
}
