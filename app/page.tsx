import About from "./components/about";
import Experience from "./components/experience/experience";
import Logo from "./components/logo";
import Whoami from "./components/whoami";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-6 gap-4 grid-cols-1">
        <div className="lg:col-span-1">
          <Logo />
        </div>
        <div className="lg:col-span-5">
          <Whoami />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <About />
        </div>
        <div className="lg:col-span-5">
          <Experience />
        </div>
      </div>
    </>
  );
}
