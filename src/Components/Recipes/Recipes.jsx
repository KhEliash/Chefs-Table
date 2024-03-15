import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  // const Recipes = ()=>{
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

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
          {recipes.map((recip) => (
            <Recipe recip={recip}></Recipe>
          ))}
        </div>

        {/* right side */}
        <div className="bg-red-100 w-1/3"> 
        
        </div>
      </div>
    </div>
  );
};

export default Recipes;
