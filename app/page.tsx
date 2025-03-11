import About from "./components/about";
import Experience from "./components/experience/experience";
import Logo from "./components/logo";
import Whoami from "./components/whoami";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.page} flex flex-col gap-4`}>
      <div className="flex gap-4">
        <div className="w-[300px]">
          <Logo />
        </div>
        <Whoami />
      </div>
      <div className="flex gap-4">
        <div className="w-[300px]">
          <About />
        </div>
        <Experience />
      </div>
    </div>
  );
}
