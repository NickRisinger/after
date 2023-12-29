'use client';
import { useState } from 'react';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import { useFormContext } from 'react-hook-form';
import { cn } from '~/libs/utils';

export default function RoomsAmount() {
  const [rooms, setRooms] = useState<
    {
      label: string;
      value: number;
    }[]
  >([]);

  const { setValue, watch } = useFormContext();
  const [show, handelShow] = useDisclosure(false);
  const ref = useClickOutside(() => handelShow.close());

  const roomsAmount = watch('roomsAmount');

  const roomsOptions = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '5+',
      value: '5+',
    },
    {
      label: 'Студия',
      value: 'Студия',
    },
  ];

  const onSelect = (room: any) => {
    setRooms(room);
    setValue('roomsAmount', room.value);
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => handelShow.toggle()}
        className="flex cursor-pointer items-center justify-between rounded-[10px] bg-white px-3 py-[6px]"
      >
        <div className="flex flex-col gap-y-2">
          <span className="text-sm leading-[18px] text-[#989898]">
            Количество комнат
          </span>
          <span>{rooms.map((room) => room.label).join(', ')}</span>
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
        {roomsOptions.map((room) => (
          <li
            key={room.label}
            onClick={() => onSelect(room)}
            className={cn(
              'cursor-pointer px-6 py-3 hover:text-[#E2061A]',
              room.value == roomsAmount && 'text-[#E2061A]',
            )}
          >
            <span>{room.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
