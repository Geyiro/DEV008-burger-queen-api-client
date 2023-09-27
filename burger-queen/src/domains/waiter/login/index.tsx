import logo from "../../../assets/logonegative.png";
import "@fontsource-variable/montserrat";

const Waiter = () => {
  return (
    <div className="h-screen flex bg-no-repeat bg-left bg-contain bg-[url('/src/assets/burgerphoto.jpeg')]">
      <section className=" md:w-[50%] md:flex md:items-center md:h-auto hidden">
        <img
          src={logo}
          alt="circular logo"
          className="md:block md:mx-auto hidden h-[40%] w-auto"
        />
      </section>
      <main className="md:w-[50%] md:rounded-tl-3xl flex justify-center h-screen bg-burger-blue">
        <div className="md:h-[40%] md:w-[18%] h-[40%] w-[38%] absolute bottom-0 right-0 bg-cover bg-left bg-no-repeat bg-[url('/src/assets/whiteburger.png')]"></div>
        <div className="flex flex-wrap w-[90%]">
          <button className="md:mt-10 w-16 h-16 mt-5 rounded-full text-3xl mx-[5%] hover:bg-red-600 text-yellow-200 bg-black">
            ↺
          </button>
          <form className="w-full content-center relative">
            <img
              src={logo}
              alt="circular logo"
              className="mx-auto md:hidden block h-auto w-[50%] mb-10"
            />
            <p className="lg:w-[60%] lg:text-[200%] md:w-[70%] md:text-center md:text-[160%] md:font-bold md:uppercase md:block mx-auto text-white hidden">
              access the
            </p>

            <p className="lg:w-[100%] lg:text-[200%] md:w-[100%] md:text-center md:text-[160%] md:font-bold md:uppercase md:block mb-10 mx-auto text-white hidden">
              waiters profile
            </p>
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
        </div>
      </main>
    </div>
  );
};

export default Waiter;
