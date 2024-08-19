import Cart from "@/components/Cart";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function Category() {
  const {
    query: { category },
  } = useRouter();

  const data = carsData.filter((car) => car.category === category);

  return (
    <section className="flex flex-wrap gap-4 my-12">
      {data.map((car) => (
        <Cart key={car.id} car={car} />
      ))}
    </section>
  );
}

export default Category;
