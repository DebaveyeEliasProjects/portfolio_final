import { AboutMe } from "../components/generic/AboutMe";
import Frameworks from "../components/generic/Frameworks";
import Header from "../components/generic/Header";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
  return (
    <div className="w-full ">
      <Navigation />
      <Header />
      <Frameworks />
      <AboutMe />
    </div>
  );
}
