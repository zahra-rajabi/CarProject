import Location from "@/components/icons/Location";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function Category() {
  const {
    query: { category },
  } = useRouter();

  const data = carsData.filter((car) => car.category === category);
  console.log(data);

  return (
    <section className="flex">
      {data.map((car) => (
        <div key={car.id}>
          <img src={car.image} alt={car.name} />
          <h2>
            {car.name} {car.model}
          </h2>
          <div>
            <span>{car.year} - </span>
            <span>{car.distance} km</span>
          </div>

          <div>
            <p>{car.price} $</p>
            <div>
             <Location /> <span>{car.location}</span>
              
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Category;
