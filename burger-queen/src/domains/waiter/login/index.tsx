import Form from "../../../components/Form.tsx";
import "@fontsource-variable/montserrat";
import { PageLayout } from "../../../components/PageLayout.tsx";
import logo from "../../../assets/logonegative.png";

const WaiterLogin = () => {
  return (
    <PageLayout>
      <img
        src={logo}
        alt="circular logo"
        className="mx-auto md:hidden block h-auto w-[50%] mb-10"
      />
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
