'use client';
import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import './style.css';

export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="flex flex-col rounded-[15px] bg-[#F9F9F9]"
    >
      <Collapsible.Trigger className="" asChild>
        <div className="px-8 py-7">
          <span className="text-xl font-medium">{question}</span>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className="CollapsibleContent">
        <div className="px-8 pb-7">
          <p className="text-base font-normal leading-[25px]">{answer}</p>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

/* <div className="flex flex-col gap-y-6 rounded-[15px] bg-[#F9F9F9] px-8 py-7 text-[#2F2F2F]">
      <div className="text-xl font-medium">{question}</div>
      <div className="text-base font-normal leading-[25px]">{answer}</div>
    </div> */
