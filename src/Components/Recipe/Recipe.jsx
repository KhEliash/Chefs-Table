const Recipe = ({ recip, handleCart }) => {
  // console.log(recip);
  // console.log(handleCart);
  return (
    <div className="card border border-gray-100 shadow-lg w-full text-left p-4 space-y-3">
      <img className="rounded-md" src={recip.recipe_image} alt="image" />
      <h2 className="font-bold text-2xl">{recip.recipe_name}</h2>
      <p className="text-gray-500">{recip.short_description}</p>
      <h2 className="font-bold">Ingredients: {recip.ingredients.length}</h2>
      <p className="text-gray-500">- {recip.ingredients[0]}</p>
      <p className="text-gray-500">- {recip.ingredients[1]}</p>
      <p className="text-gray-500">- {recip.ingredients[2]}</p>
      <p className="text-gray-500">- {recip.ingredients[3]}</p>

      <div className="flex gap-10 text-lg">
        <p className="flex items-center gap-2">
          <span>
            <CiClock2 />
          </span>
          {recip.preparing_time}
        </p>
        <p className="flex items-center gap-2">
          <span>
            <AiOutlineFire />
          </span>
          {recip.calories}
        </p>
      </div>
      <button
        onClick={() => handleCart(recip)}
        className="bg-green-400 rounded-full font-bold py-3 w-40"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
