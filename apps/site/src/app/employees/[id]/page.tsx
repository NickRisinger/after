export default function Page() {
  return (
    <main className="">
      <section className="container"></section>

      <section className="container">
        <h2 className="text-3xl font-bold">Отзывы</h2>
        <div className="mt-12 flex flex-col items-center gap-y-[35px] rounded-[15px] border border-[#C5C5C5] py-11">
          <span className="text-xl font-semibold">
            У специалиста пока нет отзывов. Будьте первыми!
          </span>
          <button className="flex h-[46px] items-center rounded-[10px] bg-[#E2061A] px-14 font-semibold text-white">
            Оставить отзыв
          </button>
        </div>
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div className="">
              <span className="font-medium">Сортировка:</span>
            </div>
            <button className="flex h-[46px] items-center rounded-[10px] bg-[#E2061A] px-14 font-semibold text-white">
              Оставить отзыв
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-y-5">
            <div className="flex flex-col rounded-[15px] bg-[#F4F4F4] px-12 pb-8 pt-5">
              <span className="text-xl font-semibold">Юлия</span>
              <div className="mb-6 mt-3 flex gap-x-8">
                <div className=""></div>
                <span className="text-[#989898]">12.02.2022</span>
              </div>
              <p>
                Благодарю Екатерину за профессионализм и оказание услуг на
                высшем уровне. Сразу видно, что человек на своём месте. Теперь
                буду всем своим знакомым рекомендовать только данного
                специалиста.
              </p>
            </div>
          </div>
          <div className="mt-12"></div>
        </div>
      </section>

      <section className="">
        <div className="container"></div>
      </section>
    </main>
  );
}
