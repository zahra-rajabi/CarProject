function Range() {
  return (
    <section className="w-full gap-2 px-4 py-4 my-8 bg-gray-100 rounded-md shadow-md xs:w-3/5 sm:w-1/3">
      <div className="flex flex-col w-full gap-2 mb-4">
        <input
          type="text"
          name="min-number"
          id="min"
          placeholder="inter min-price"
          className="px-2 py-1 border-2 rounded-md border-lime-600 focus:outline-none focus:border-lime-950"
        />
        <input
          type="text"
          name="max-number"
          id="max"
          placeholder="inter max-price"
          className="px-2 py-1 border-2 rounded-md border-lime-600 focus:outline-none focus:border-lime-950"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md bg-lime-950 text-lime-200 xs:w-max"
        >
          search
        </button>
      </div>
    </section>
  );
}

export default Range;
