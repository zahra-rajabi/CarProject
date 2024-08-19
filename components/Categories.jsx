import Suv from "./icons/Suv";
import Sedan from "./icons/Sedan";
import Sport from "./icons/Sport";
import Hatchback from "./icons/Hatchback";
import Link from "next/link";

function Categories() {
  return (
    <ul className="flex items-center gap-4">
      <li className="w-1/6 rounded-md bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200 ">
        <Link
          href={`categories/suv`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Suv />
          <p>Suv</p>
        </Link>
      </li>
      <li className="w-1/6 rounded-md bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200 ">
        <Link
          href={`categories/sedan`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Sedan />
          <p>Sedan</p>
        </Link>
      </li>
      <li className="w-1/6 rounded-md bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200 ">
        <Link
          href={`categories/sport`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Sport />
          <p>Sport</p>
        </Link>
      </li>
      <li className="w-1/6 rounded-md bg-lime-200 hover:bg-lime-950 text-lime-950 hover:text-lime-200 ">
        <Link
          href={`categories/hatchback`}
          className="flex items-center justify-between w-full h-full gap-4 px-4 py-2 fill-lime-950 hover:fill-lime-200"
        >
          <Hatchback />
          <p>Hatchback</p>
        </Link>
      </li>
    </ul>
  );
}

export default Categories;
