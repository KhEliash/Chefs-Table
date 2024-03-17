import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Preparing from "../Preparing/Preparing";

const Recipes = () => {
  // const Recipes = ()=>{
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [pre, setPre] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCart = (p) => {
    const isExist = cart.find((item) => item.recipe_id == p.recipe_id);

    if (!isExist) {
      setCart([...cart, p]);
    } else {
      // toast('Already Added');
      toast.error("Already Added", {
        className: "toast",
      });
    }
  };

  const handlePreparing = (id) => {
    const delet = cart.filter((item) => item.recipe_id !== id);

    setCart(delet);

    const prepa = cart.filter((item) => item.recipe_id == id);
    // const newPrepa = {...pre,prepa}

    setPre([...pre, prepa]);

    // const car = pre.map((u)=>(u))
    // setPre(car)
  };
  console.log(pre);
  return (
    <div className="container mx-auto my-12 text-center">
      <div className="mx-12">
        <h1 className="font-bold text-5xl">Our Recipes</h1>
        <p className="text-gray-500 mt-4">
          Dive into a world of culinary creativity with our recipe section,
          offering a diverse array of dishes to suit every taste and occasion.
          From quick weekday meals to decadent desserts, discover inspiration
          that transforms your kitchen into a gourmet haven.
        </p>
      </div>
      {/* cards */}
      <div className=" flex mt-12 gap-2">
        <div className="w-2/3 grid grid-cols-2 justify-items-center gap-4">
          {recipes.map((recip, idx) => (
            <Recipe key={idx} recip={recip} handleCart={handleCart}></Recipe>
          ))}
        </div>

        {/* right side */}
        <div className="border border-gray-100 rounded-lg w-1/3 py-3">
          <h1 className="text-3xl font-bold my-5">
            Want to cook: {cart.length}{" "}
          </h1>
          <div className="grid grid-cols-4 text-xl font-bold">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 bg-gray-100 my-3 py-5 px-2 rounded-xl items-center font-bold"
            >
              {/* <p>{index+1}</p> */}
              <p className="flex items-center justify-center gap-2">
                <small>{index + 1}</small> <small>{item.recipe_name}</small>
              </p>
              <small>{item.preparing_time}</small>
              <small>{item.calories}</small>
              <button
                onClick={() => handlePreparing(item.recipe_id)}
                className="bg-green-400 rounded-full p-3"
              >
                <small>Preparing</small>
              </button>
            </div>
          ))}

          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              Currently Cooking: {pre.length}
            </h1>

            <div className="grid grid-cols-3 bg-green-100 p-5 mt-3 font-bold text-xl">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>

            {pre.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 bg-gray-100 p-5 font-bold my-2 rounded-xl items-center"
              >
                <p className="flex gap-2 ml-2 items-center">
                  <span>{idx + 1}</span>
                  {item[0].recipe_name}
                </p>
                <p>{item[0].preparing_time}</p>
                <p>{item[0].calories}</p>
              </div>
            ))}
            {/* <Preparing pre={pre}></Preparing> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
