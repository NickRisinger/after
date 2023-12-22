'use client';

export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="flex flex-col gap-y-6 rounded-[15px] bg-[#F9F9F9] px-8 py-7 text-[#2F2F2F]">
      <div className="text-xl font-medium">{question}</div>
      <div className="text-base font-normal leading-[25px]">{answer}</div>
    </div>
  );
}
