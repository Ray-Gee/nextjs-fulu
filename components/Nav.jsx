import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 hover:scale-125 active:text-red-500 hover:text-white"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
