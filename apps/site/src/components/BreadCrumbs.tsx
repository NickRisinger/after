'use client';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { routeNames } from '~/constants/router';

interface BreadCrumbProps {
  name: string;
  link: string;
  isActive?: boolean;
}

function BreadCrumb({ name, link, isActive = false }: BreadCrumbProps) {
  return (
    <li>
      {!isActive ? (
        <Link href={link} className="hover:text-[#E2061A]">
          {name}
        </Link>
      ) : (
        <span>{name}</span>
      )}
    </li>
  );
}

export default function BreadCrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className="text-sm font-medium text-[#989898]">
      <ul className="flex items-center gap-x-3">
        <BreadCrumb name="Главная" link="/" />
        {pathNames.length > 0 && '/'}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          return (
            <Fragment key={index}>
              <BreadCrumb
                name={routeNames[link]}
                link={href}
                isActive={paths === href}
              />
              {pathNames.length !== index + 1 && '/'}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
