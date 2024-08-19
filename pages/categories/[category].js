import Cart from "@/components/Cart";
import Back from "@/components/icons/Back";
import carsData from "@/data/carsData";
import Link from "next/link";

import { useRouter } from "next/router";

function Category() {
  const {
    query: { category },
  } = useRouter();
  const data = carsData.filter((car) => car.category === category);

  return (
    <>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 px-4 py-2 mt-8 transition-all duration-700 rounded-md bg-lime-200 w-max text-lime-950 fill-lime-950 hover:bg-lime-950 hover:text-lime-200 hover:fill-lime-200"
      >
        <Back />
        back
      </Link>
      <h2 className="my-8 text-2xl font-medium text-lime-950">
        Category : {category}
      </h2>
      <section className="flex flex-wrap gap-4 my-8">
        {data.map((car) => (
          <Cart key={car.id} car={car} />
        ))}
      </section>
    </>
  );
}

export default Category;
