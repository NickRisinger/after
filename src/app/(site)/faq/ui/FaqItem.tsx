'use client';
import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import './style.css';
import { cn } from '~/libs/utils';

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
      <Collapsible.Trigger className="cursor-pointer" asChild>
        <div className="flex items-center justify-between px-8 py-7">
          <span className="text-xl font-medium">{question}</span>
          <div
            className={cn(
              'p-[9px] transition-all duration-500',
              !open && '-rotate-180',
            )}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5249_17265)">
                <path
                  d="M5.6194 2.63892L0.147039 8.6439C-0.049013 8.84095 -0.0490131 9.16053 0.147039 9.35758C0.343077 9.55463 0.661169 9.55463 0.857222 9.35758L6.00001 3.71468L11.1428 9.35708C11.3388 9.55414 11.6569 9.55414 11.853 9.35708C12.049 9.16003 12.049 8.84045 11.853 8.64342L6.3806 2.63842C6.27609 2.5334 6.13753 2.48837 6.00051 2.49538C5.86297 2.48885 5.72443 2.53387 5.6194 2.63892Z"
                  fill="#989898"
                />
              </g>
              <defs>
                <clipPath id="clip0_5249_17265">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 12) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
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
