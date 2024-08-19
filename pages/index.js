import Cart from "@/components/Cart";
import Categories from "@/components/Categories";
import Range from "@/components/Range";
import carsData from "@/data/carsData";

export default function Home() {
  const allCars = carsData;
  return (
    <>
      <Range />
      <Categories />
      <section className="flex flex-wrap w-full gap-4 my-12">
        {carsData.map((car) => (
          <Cart key={car.id} car={car} />
        ))}
      </section>
    </>
  );
}
