import Cart from "@/components/Cart";
import Categories from "@/components/Categories";
import Range from "@/components/Range";
import carsData from "@/data/carsData";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [prices, setPrices] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const [cars, setCars] = useState(carsData);

  const dataHandler = () => {
    return cars.filter(
      (car) => car.price >= prices.minPrice && car.price <= prices.maxPrice
    );
  };

  const allCarsHandler = () => {
    setCars(carsData);
    setPrices({
      minPrice: "",
      maxPrice: "",
    });
  };
  const submitHandler = () => {
    if (prices.maxPrice >= prices.minPrice) {
      setCars(() => dataHandler());
    } else {
      toast.error("enter prices correctly");
    }
  };
  return (
    <>
      <Toaster />
      <Range
        submitHandler={submitHandler}
        prices={prices}
        setPrices={setPrices}
      />
      <Categories />
      {cars.length < 12 && cars.length ? (
        <button
          onClick={allCarsHandler}
          className="px-4 py-2 mt-8 transition-all duration-700 rounded-md bg-lime-950 text-lime-200 hover:bg-lime-200 hover:text-lime-950"
        >
          see all cars
        </button>
      ) : null}
      <section className="flex flex-wrap w-full gap-4 my-12">
        {cars.length ? (
          cars.map((car) => <Cart key={car.id} car={car} />)
        ) : (
          <section>
            <div className="text-xl font-medium tracking-wide text-lime-950">
              There is no car with such price!
            </div>
            <button
              onClick={allCarsHandler}
              className="px-4 py-2 mt-8 transition-all duration-700 rounded-md bg-lime-950 text-lime-200 hover:bg-lime-200 hover:text-lime-950"
            >
              see all cars
            </button>
          </section>
        )}
      </section>
    </>
  );
}
