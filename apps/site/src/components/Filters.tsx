'use client';
import { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import PropertyType from './filters/PropertyType';

function Pressed() {
  const { register } = useFormContext();

  return (
    <div className="flex items-center gap-x-3">
      <label>
        <input type="radio" value="1" {...register('operationId')} />
        <span>Купить</span>
      </label>
      <label>
        <input type="radio" value="2" {...register('operationId')} />
        <span>Снять</span>
      </label>
      <label>
        <input type="radio" value="3" {...register('operationId')} />
        <span>Заявка на покупку</span>
      </label>
      <label>
        <input type="radio" value="4" {...register('operationId')} />
        <span>Заявка на продажу</span>
      </label>
    </div>
  );
}

export default function Filters() {
  const methods = useForm<{
    operationId: string;
    categoryId: number;
    roomsAmount: string[];
    priceFrom: number;
    priceTo: number;
    totalAreaFrom: number;
    totalAreaTo: number;
    address: string;
  }>({
    defaultValues: {
      operationId: '1',
      categoryId: 2,
    },
  });

  const { register, watch } = methods;

  const operationId = watch('operationId');
  const categoryId = watch('categoryId');

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-y-10">
        <Pressed />

        {(operationId == '1' || operationId == '2') && (
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-3">
              <div className="min-w-[231px] grow">
                {/* <select {...register('categoryId', { valueAsNumber: true })}>
                  <option value="1">Комнаты</option>
                  <option value="2">Квартиры</option>
                  <option value="3">Дома, дачи, коттеджи</option>
                  <option value="4">Коммерческая</option>
                  <option value="5">Земельные участки</option>
                  <option value="6">Гаражи и машиноместа</option>
                  <option value="7">Новостройки</option>
                </select> */}
                <PropertyType />
              </div>
              {[1, 2, 3, 7].includes(categoryId) && (
                <div className="grow bg-white">
                  <select {...register('roomsAmount')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                    <option value="Студия">Студия</option>
                  </select>
                </div>
              )}
              <div className="grow bg-white">
                <input
                  type="number"
                  placeholder="Цена от"
                  {...register('priceFrom', { valueAsNumber: true })}
                />
                <input
                  type="number"
                  placeholder="Цена до"
                  {...register('priceTo', { valueAsNumber: true })}
                />
              </div>
              <div className="grow bg-white">
                <input
                  type="number"
                  placeholder="Площадь от"
                  {...register('totalAreaFrom', { valueAsNumber: true })}
                />
                <input
                  type="number"
                  placeholder="Площадь до"
                  {...register('totalAreaTo', { valueAsNumber: true })}
                />
              </div>
              <div className="grow bg-white">
                <input
                  type="number"
                  placeholder="Адрес"
                  {...register('address', { valueAsNumber: true })}
                />
              </div>
              <div className="bg-white px-10 py-4"></div>
            </div>
            <div className="">
              <button>Найти объекты</button>
            </div>
          </div>
        )}

        {operationId == '3' && (
          <div className="">
            <div className="flex items-center gap-x-3">
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
              <div className="bg-white py-4"></div>
            </div>
            <div className="">
              <button>Отправить заявку</button>
            </div>
          </div>
        )}

        {operationId == '4' && (
          <div className="">
            <div className="">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="">
              <button>Отправить заявку</button>
            </div>
          </div>
        )}
      </div>
    </FormProvider>
  );
}

{
  /* <div className="">operation id</div>
      <div className="">Тип недвидимости</div>
      <div className="">Количество комнат</div>
      <div className="">Площадь, м²</div>
      <div className="">Цена, руб.</div>
      <div className="">Расположение</div>
      <div className="">operation id</div> */
}
