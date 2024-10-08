import Suv from "./icons/Suv";
import Sedan from "./icons/Sedan";
import Sport from "./icons/Sport";
import Hatchback from "./icons/Hatchback";
import Link from "next/link";

function Categories() {
  return (
    <ul className="flex flex-wrap items-center gap-4">
      <li className="w-full transition-all duration-700 rounded-md xs:w-[47%] sm:w-[23%] md:w-1/5 bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200">
        <Link
          href={`categories/suv`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Suv />
          <p className="font-medium">Suv</p>
        </Link>
      </li>
      <li className="w-full transition-all duration-700 rounded-md xs:w-[47%] sm:w-[23%] md:w-1/5 bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200">
        <Link
          href={`categories/sedan`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Sedan />
          <p className="font-medium">Sedan</p>
        </Link>
      </li>
      <li className="w-full transition-all duration-700 rounded-md xs:w-[47%] sm:w-[23%] md:w-1/5 bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200">
        <Link
          href={`categories/sport`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Sport />
          <p className="font-medium">Sport</p>
        </Link>
      </li>
      <li className="w-full duration-700 rounded-md transit4ion-all xs:w-[47%] sm:w-[23%] md:w-1/5 bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200">
        <Link
          href={`categories/hatchback`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Hatchback />
          <p className="font-medium">Hatchback</p>
        </Link>
      </li>
    </ul>
  );
}

export default Categories;
