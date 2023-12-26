import Review from './Review';
import EmptyReviews from './EmptyReviews';

export default function Reviews({ reviews }: { reviews: any[] }) {
  return reviews.length > 0 ? (
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
        {reviews.map((review, index) => (
          <Review key={'review-' + index} />
        ))}
      </div>
      <div className="mt-12"></div>
    </div>
  ) : (
    <EmptyReviews />
  );
}
