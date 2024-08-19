import Location from "./icons/Location";

function Cart({ car }) {
  return (
    <div className="w-full px-4 py-2 flex flex-col self-stretch rounded-md justify-between bg-white xs:w-[47%] sm:w-[31.5%] ">
      <div className="h-4/5">
        <img
          src={car.image}
          className="w-full h-full rounded-md"
          alt={car.name}
        />
      </div>
      <h2 className="mt-4 font-medium md:text-lg">
        {car.name} {car.model}
      </h2>
      <div className="mt-1 text-sm text-gray-400">
        <span>{car.year} - </span>
        <span>{car.distance} km</span>
      </div>

      <div className="flex items-end justify-between flex-1 mt-6 font-medium font-pretty">
        <p>$ {car.price} </p>
        <div className="flex items-center gap-1 ">
          <Location /> <span>{car.location}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
