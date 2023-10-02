import Form from "../../../components/Form.tsx";
import "@fontsource-variable/montserrat";
import { PageLayout } from "../../../components/PageLayout.tsx";

const WaiterLogin = () => {
  return (
    <PageLayout>
      <div className="md:w-full md:h-fit">
        <button className="absolute md:mt-10 md:left-3px top-0 w-16 h-16 mt-5 rounded-full text-3xl mx-[5%] hover:bg-red-600 text-yellow-200 bg-black">
          ↺
        </button>
      </div>
      <div className="w-full">
        <p className="lg:w-[60%] lg:text-[200%] md:w-full md:text-center md:text-[160%] md:font-bold md:uppercase md:block mx-auto text-white hidden">
          access the
        </p>

        <p className="lg:w-[100%] lg:text-[200%] md:w-[100%] md:text-center md:text-[160%] md:font-bold md:uppercase md:block mb-10 mx-auto text-white hidden">
          waiters profile
        </p>
        <Form />
      </div>
    </PageLayout>
  );
};
export default WaiterLogin;
