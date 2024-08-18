import Suv from "./icons/Suv";
import Sedan from "./icons/Sedan";
import Sport from "./icons/Sport";
import Hatchback from "./icons/Hatchback";

function Categories() {
  return (
    <ul className="flex items-center gap-4">
      <li className="flex items-center justify-between">
        <Suv />
        <p>Suv</p>
      </li>
      <li className="flex items-center justify-between">
        <Sedan />
        <p>Sedan</p>
      </li>
      <li className="flex items-center justify-between">
        <Sport />
        <p>Sport</p>
      </li>
      <li className="flex items-center justify-between">
        <Hatchback />
        <p>Hatchback</p>
      </li>
    </ul>
  );
}

export default Categories;
