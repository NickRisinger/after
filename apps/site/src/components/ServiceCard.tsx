import type { FC } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      style={{
        background: `linear-gradient(90deg,rgba(249,249,249,1),rgba(249,249,249,0)),url(/${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
      className="grid h-[312px] grid-flow-col grid-rows-2 rounded-[15px] px-10 py-9"
    >
      <span className="text-2xl font-bold">{title}</span>
      <p className="max-w-[365px]">{description}</p>
    </div>
  );
};
