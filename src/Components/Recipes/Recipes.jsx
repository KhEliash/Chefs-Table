import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


const Recipes = () => {
  // const Recipes = ()=>{
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCart = (p) => {
    
    const isExist = cart.find(item => item.recipe_id == p.recipe_id);
     
    
 if(!isExist){
  setCart([...cart,p]);
 }
 else{
   
  // toast('Already Added');
  toast('Already Added', {
     className: 'toast'
  });
 }

    
  };
  // console.log(cart);

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
          <h1  className="text-3xl font-bold my-5">Want to cook: {cart.length} </h1>
          <div className="grid grid-cols-4 text-xl font-bold">
            
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          {cart.map((item, id) => (
            <div key={id} className="grid grid-cols-4 bg-gray-100 my-3 py-5 px-2 rounded-xl">
              
              <p> {item.recipe_name}</p>
              <p>{item.preparing_time}</p>
              <p>{item.calories}</p>
              <button className="bg-green-400 rounded-full p-3">Preparing</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
