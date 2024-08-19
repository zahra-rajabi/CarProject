import Back from "@/components/icons/Back";
import Calender from "@/components/icons/Calender";
import Company from "@/components/icons/Company";
import Location from "@/components/icons/Location";
import Model from "@/components/icons/Model";
import Money from "@/components/icons/Money";
import Road from "@/components/icons/Road";
import carsData from "@/data/carsData";
import Link from "next/link";
import { useRouter } from "next/router";

function CarData() {
  const router = useRouter();

  if (!router.query.carName) return;

  const carInfo = {
    name: router.query.carName?.at(0),
    model: router.query.carName?.at(1).split("_").join(" "),
  };

  const getCar = () => {
    return carsData.find(
      (car) => car.name === carInfo.name && car.model === carInfo.model
    );
  };
  const car = getCar();
  console.log(car);

  return (
    <>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 px-4 py-2 mt-8 transition-all duration-700 rounded-md bg-lime-200 w-max text-lime-950 fill-lime-950 hover:bg-lime-950 hover:text-lime-200 hover:fill-lime-200"
      >
        <Back />
        back
      </Link>
      <h2 className="mt-8 text-2xl font-medium">
        {car.name} {car.model}
      </h2>
      <section className="flex flex-col justify-between w-full gap-8 my-8 lg:flex-row text-lime-950 fill-lime-950 ">
        <div className="lg:w-[55%] w-full h-1/2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full rounded-md shadow-sm"
          />
        </div>
        <section className="lg:w-[44%] w-full">
          <section className="px-6 py-4 rounded-md shadow-md bg-gray-50">
            <ul className="flex flex-col gap-6 ">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <Company />
                  company
                </div>
                <span className="text-gray-500">{car.name}</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <Model />
                  model
                </div>
                <span className="text-gray-500">{car.model}</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <Calender />
                  first registration
                </div>
                <span className="text-gray-500">{car.year}</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <Road />
                  kms driven
                </div>
                <span className="text-gray-500">{car.distance}</span>
              </li>
            </ul>
          </section>
          <section className="flex items-center justify-between px-6 py-4 mt-6 rounded-md shadow-md bg-gray-50">
            <div className="flex items-center gap-2 font-medium">
              <Location />
              <span>location</span>
            </div>
            <span className="text-gray-500">{car.location}</span>
          </section>
          <section className="px-6 py-4 mt-6 rounded-md shadow-md bg-gray-50">
            <h3 className="mb-6 text-xl font-medium">Extra Information</h3>
            <p className="mb-4 leading-relaxed text-justify text-gray-500 ">
              {car.description}
            </p>
          </section>
          <section className="flex items-center justify-between px-6 py-4 mt-6 rounded-md shadow-md bg-gray-50">
            <div className="flex items-center gap-2 font-medium">
              <Money />
              <span>Price</span>
            </div>
            <span className="text-gray-500">$ {car.price}</span>
          </section>
        </section>
      </section>
    </>
  );
}

export default CarData;
