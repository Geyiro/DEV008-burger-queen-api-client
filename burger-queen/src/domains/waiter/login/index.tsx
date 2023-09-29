import logo from "../../../assets/logonegative.png";
import Form from "../../../components/Form.tsx";
import "@fontsource-variable/montserrat";

const WaiterLogin = () => {
  return (
    <div className="h-screen flex bg-no-repeat bg-left bg-cover bg-[url('/src/assets/burgerphoto.jpeg')]">
      <section className=" md:w-[50%] md:flex md:items-center md:h-auto hidden">
        <img
          src={logo}
          alt="circular logo"
          className="md:block md:mx-auto hidden h-[40%] w-auto"
        />
      </section>
      <main className="w-[50%] rounded-tl-3xl flex justify-center h-full bg-burger-blue">
        <div className="md:h-[40%] md:w-[18%] h-[40%] w-[38%] absolute bottom-0 right-0 bg-cover bg-left bg-no-repeat bg-[url('/src/assets/whiteburger.png')]"></div>
        <div className="flex flex-col w-[90%] h-full">
          <div className="md:w-full md:h-fit">
            <button className="md:mt-10 w-16 h-16 mt-5 rounded-full text-3xl mx-[5%] hover:bg-red-600 text-yellow-200 bg-black">
              ↺
            </button>
          </div>
          <img
            src={logo}
            alt="circular logo"
            className="mx-auto md:hidden block h-auto w-[50%] mb-10"
          />
          <article className="w-full h-full flex items-center">
            <div className="w-full">
              <p className="lg:w-[60%] lg:text-[200%] md:w-full md:text-center md:text-[160%] md:font-bold md:uppercase md:block mx-auto text-white hidden">
                access the
              </p>

              <p className="lg:w-[100%] lg:text-[200%] md:w-[100%] md:text-center md:text-[160%] md:font-bold md:uppercase md:block mb-10 mx-auto text-white hidden">
                waiters profile
              </p>
              <Form />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default WaiterLogin;
