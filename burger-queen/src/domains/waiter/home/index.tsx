import "@fontsource-variable/montserrat";
import { PageLayout } from "../../../components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <section className="flex flex-col justify-center items-center content-center">
        <button className="md:w-[60%] md:text-lg mx-auto text-white bg-burger-orange hover:bg-red-600 shadow-button uppercase font-bold rounded-lg w-3/5 px-5 py-2.5 text-center">
          Administration
        </button>
        <button className="md:w-[60%] md:text-lg mt-4 mx-auto text-white bg-burger-orange hover:bg-red-600 shadow-button uppercase font-bold rounded-lg w-3/5 px-5 py-2.5 text-center">
          Kitchen staff
        </button>
        <button className="md:w-[60%] md:text-lg mt-4 mx-auto text-white bg-burger-orange hover:bg-red-600 shadow-button uppercase font-bold rounded-lg w-3/5 px-5 py-2.5 text-center">
          Serving staff
        </button>
      </section>
    </PageLayout>
  );
};

export default Home;
