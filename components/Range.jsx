
function Range() {
  return (
    <section className="shadow-md bg-gray-100 w-max px-4 py-4 rounded-md my-8 gap-4 flex">
      <div className="flex flex-col gap-2 ">
        <input
          type="text"
          name="min-number"
          id="min"
          placeholder="inter min-price"
          className="border-2 border-lime-600 rounded-md px-2 py-1 focus:outline-none focus:border-lime-950"
        />
        <input
          type="text"
          name="max-number"
          id="max"
          placeholder="inter max-price"
          className="border-2 border-lime-600 rounded-md px-2 py-1 focus:outline-none focus:border-lime-950"
        />
      </div>
      <button
        type="submit"
        className="bg-lime-950 text-lime-200 px-4 py-2 rounded-md"
      >
        search
      </button>
    </section>
  );
}

export default Range;
