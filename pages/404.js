import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <div className="mt-8 mb-8 text-2xl text-lime-950">NotFound</div>
      <Link
        href="/"
        className="px-4 py-2 mb-8 transition-all duration-700 rounded-md bg-lime-950 text-lime-200 hover:bg-lime-200 hover:text-lime-950"
      >
        back to home
      </Link>
    </>
  );
}

export default NotFound;
