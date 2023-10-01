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
      <main className="md:w-[50%] md:rounded-tl-3xl flex justify-center h-full bg-burger-blue">
        <div className="md:h-[40%] md:w-[18%] h-[40%] w-[38%] absolute bottom-0 right-0 bg-cover bg-left bg-no-repeat bg-[url('/src/assets/whiteburger.png')]"></div>
        <div className="flex flex-col w-[90%] h-full">
          <div className="md:w-full md:h-fit">
            <button className="md:mt-10 w-16 h-16 mt-5 rounded-full text-3xl mx-[5%] hover:bg-red-600 text-yellow-200 bg-black">
              ↺
            </button>
          </div>
          <article className="flex flex-col w-full h-full -mt-20 justify-center">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
