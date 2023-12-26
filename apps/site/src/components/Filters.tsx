'use client';
import { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

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
    categoryId: string;
  }>({
    defaultValues: {
      operationId: '1',
      categoryId: '2',
    },
  });

  const { watch } = methods;

  const operationId = watch('operationId');
  const categoryId = watch('categoryId');

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-y-10">
        <Pressed />

        {(operationId == '1' || operationId == '2') && (
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-3">
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
              {categoryId !== '2' && <div className="grow bg-white py-4"></div>}
              <div className="grow bg-white py-4"></div>
              <div className="grow bg-white py-4"></div>
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
