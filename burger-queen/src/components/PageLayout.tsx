import { ReactNode } from "react";
import logo from "../assets/logonegative.png";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="h-screen flex bg-no-repeat bg-left bg-cover bg-[url('/src/assets/burgerphoto.jpeg')]">
      <section className=" md:w-[50%] md:flex md:items-center md:h-auto hidden">
        <img
          src={logo}
          alt="circular logo"
          className="md:block md:mx-auto hidden h-[40%] w-auto"
        />
      </section>
      <main className="md:w-[50%] md:rounded-tl-3xl flex flex-col justify-center w-full h-full bg-burger-blue">
        <div className="md:h-[40%] md:w-[18%] z-0 h-[40%] w-[38%] absolute bottom-0 right-0 bg-cover bg-left bg-no-repeat bg-[url('/src/assets/whiteburger.png')]"></div>
        <div className="flex flex-col w-[90%] h-full mx-auto">
          <article className="flex flex-col z-10 w-full h-full justify-center">
            <img
              src={logo}
              alt="circular logo"
              className="mx-auto md:hidden block h-auto w-[40%] mb-10"
            />
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
