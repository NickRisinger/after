'use client';
import { useState } from 'react';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import { useFormContext } from 'react-hook-form';
import { cn } from '~/libs/utils';

export default function PropertyType() {
  const [category, setCategory] = useState<{
    label: string;
    value: number;
  }>({
    label: 'Комнаты',
    value: 1,
  });

  const { setValue, watch } = useFormContext();
  const [show, handelShow] = useDisclosure(false);
  const ref = useClickOutside(() => handelShow.close());

  const categoryId = watch('categoryId');

  const categories = [
    {
      label: 'Комнаты',
      value: 1,
    },
    {
      label: 'Квартиры',
      value: 2,
    },
    {
      label: 'Дома, дачи, коттеджи',
      value: 3,
    },
    {
      label: 'Коммерческая',
      value: 4,
    },
    {
      label: 'Земельные участки',
      value: 5,
    },
    {
      label: 'Гаражи и машиноместа',
      value: 6,
    },
    {
      label: 'Новостройки',
      value: 7,
    },
  ];

  const onSelect = (category: any) => {
    setCategory(category);
    setValue('categoryId', category.value);
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => handelShow.toggle()}
        className="flex cursor-pointer items-center justify-between rounded-[10px] bg-white px-3 py-[6px]"
      >
        <div className="flex flex-col gap-y-2">
          <span className="text-sm leading-[18px] text-[#989898]">
            Тип недвижимости
          </span>
          <span>{category.label}</span>
        </div>

        <svg
          className={cn(
            'h-[7px] w-[12px] transition-transform duration-300',
            show && 'rotate-180',
          )}
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3806 6.85597L11.853 0.860158C12.049 0.663406 12.049 0.344316 11.853 0.147564C11.6569 -0.049188 11.3388 -0.049188 11.1428 0.147564L5.99999 5.78186L0.857223 0.148062C0.66117 -0.0486894 0.343077 -0.0486894 0.147039 0.148062C-0.0489979 0.344814 -0.0489979 0.663904 0.147039 0.860641L5.6194 6.85647C5.72391 6.96134 5.86247 7.0063 5.99949 6.99929C6.13703 7.00581 6.27557 6.96087 6.3806 6.85597Z"
            fill="#989898"
          />
        </svg>
      </div>
      <ul
        className={cn(
          'absolute top-full mt-2 w-full rounded-[14px] bg-white py-3 opacity-0 shadow-[-4px_0px_33px_0px_rgba(52,112,138,0.10)] transition-all duration-300',
          show && 'opacity-100',
        )}
      >
        {categories.map((category) => (
          <li
            key={category.label}
            onClick={() => onSelect(category)}
            className={cn(
              'cursor-pointer px-6 py-3 hover:text-[#E2061A]',
              category.value == categoryId && 'text-[#E2061A]',
            )}
          >
            <span>{category.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
