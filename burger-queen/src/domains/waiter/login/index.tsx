import logo from "../../../assets/logonegative.png";
import "@fontsource-variable/montserrat";

const Waiter = () => {
  return (
    <div className="flex w-full h-full">
      <div className="block h-36 w-36 bg-[url('/src/assets/whiteburger.png')]"></div>
      {/* <img src={whiteburger} alt="burger background illustration" className="absolute w-auto h-52 bg-left"/> */}
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex justify-center mb-10">
          <img src={logo} alt="circular logo" className="h-auto w-36" />
        </div>
        <form className="container content-center">
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="border-0 shadow-lg text-m font-extralight text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@systers.xyz"
              required
            ></input>
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="border-0 shadow-lg text-m font-extralight text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
              required
            ></input>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="text-white bg-burger-orange hover:bg-red-600 shadow-button uppercase font-bold rounded-lg w-3/5 px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waiter;
