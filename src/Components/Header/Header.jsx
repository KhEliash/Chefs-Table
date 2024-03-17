import Banner from "../../assets/Banner.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* nav bar */}
      <div className="mt-12">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <button className="font-bold text-3xl">Recipe Calories</button>
          </div>
          <div class="navbar-center space-x-3 font-normal text-gray-500">
            <a href="">Home</a>
            <a href="">Recipes</a>
            <a href="">About </a>
            <a href="">Search</a>
          </div>
          <div class="navbar-end space-x-4">
            <label class="input bg-gray-100 rounded-full flex items-center flex-row-reverse gap-2">
              <input type="text" class="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <button className="bg-green-400 p-3 rounded-full">
              <IoPersonOutline />
            </button>
          </div>
        </div>
      </div>

      {/* banner */}

      <div className="mt-6 relative">
        <img className="w-full" src={Banner} alt="" />
        <div className="absolute top-0 text-white  w-full h-full flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h1 className="font-bold text-5xl">
            Discover an exceptional cooking <br />
            class tailored for you!
          </h1>
          <p>
            Indulge in a culinary journey with our food website, where flavors
            come alive through tantalizing recipes, expert tips, and <br />
            mouthwatering inspiration for every palate.
          </p>
          <div className="space-x-6">
            <button className="bg-green-500 p-5 rounded-full font-bold text-black">
              Explore Now
            </button>
            <button className="bg-transparent p-5 rounded-full font-bold border border-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
import { IoPersonOutline } from "react-icons/io5";
import Recipes from './../Recipes/Recipes';

// "react/no-unknown-property": ['error', { ignore: ['css'] }];
