export function Form() {
  return (
    <form className="w-full content-center relative">
      <div className="mb-6">
        <input
          type="email"
          id="email"
          className="md:w-[70%] md:text-lg mx-auto border-0 shadow-lg text-m font-extralight text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5"
          placeholder="name@systers.xyz"
          required
        ></input>
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          className="md:w-[70%] md:text-lg mx-auto border-0 shadow-lg text-m font-extralight text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5"
          placeholder="password"
          required
        ></input>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="md:w-[40%] md:text-lg text-white bg-burger-orange hover:bg-red-600 shadow-button uppercase font-bold rounded-lg w-3/5 px-5 py-2.5 text-center"
        >
          enter
        </button>
      </div>
    </form>
  );
}

export default Form;
