import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => }
            className="last:pr-24 cursor-pointer transition duration-100 hover:scale-125 active:text-red-500 hover:text-white"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
