import { Link } from "react-router-dom";
import CitySearch from "./city-search";

const header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className=" container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src="/verid-removebg-preview.png"
            alt="Veridiant"
            className="h-20"
          />
        </Link>
        {/* Location*/}
        <div className="flex gap-4">
          
          {/* search bar*/}
          <CitySearch />
          {/* settings icon*/}
        </div>
      </div>
    </header>
  );
};

export default header;
