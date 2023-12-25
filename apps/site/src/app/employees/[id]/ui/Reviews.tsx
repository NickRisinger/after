import Review from './Review';

export default function Reviews() {
  return (
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
        <Review />
      </div>
      <div className="mt-12"></div>
    </div>
  );
}
