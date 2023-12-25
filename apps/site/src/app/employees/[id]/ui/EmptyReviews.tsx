export default function EmptyReviews() {
  return (
    <div className="mt-12 flex flex-col items-center gap-y-[35px] rounded-[15px] border border-[#C5C5C5] py-11">
      <span className="text-xl font-semibold">
        У специалиста пока нет отзывов. Будьте первыми!
      </span>
      <button className="flex h-[46px] items-center rounded-[10px] bg-[#E2061A] px-14 font-semibold text-white">
        Оставить отзыв
      </button>
    </div>
  );
}
