import EmptyReviews from './ui/EmptyReviews';
import Reviews from './ui/Reviews';

export default function Page() {
  return (
    <main className="">
      <section className="container"></section>

      <section className="container">
        <h2 className="text-3xl font-bold">Отзывы</h2>
        <EmptyReviews />
        <Reviews />
      </section>

      <section className="">
        <div className="container"></div>
      </section>
    </main>
  );
}
