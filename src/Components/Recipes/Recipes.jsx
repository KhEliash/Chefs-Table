 

const Recipes = () => {
    return (
        <div className="container mx-auto mt-12 text-center">
           <div className="mx-12"> 
           <h1 className="font-bold text-5xl">Our Recipes</h1>
            <p className="text-gray-500 mt-4">Dive into a world of culinary creativity with our recipe section, offering a diverse array of dishes to suit every taste and occasion. From quick weekday meals to decadent desserts, discover inspiration that transforms your kitchen into a gourmet haven.</p>
           </div>
           {/* cards */}
           <div className="flex ">
            <div className="bg-yellow-200 w-2/3"> 
            <div className="card border border-gray-300  w-80 text-left p-5 space-y-3">
                <img src="" alt="image" />
                <h2 className="font-bold text-lg">Food Cart</h2>
                <p>description of food</p>
                <h2>Ingradients:</h2>
                <p>500 ml milk</p>
                <p>500 ml milk</p>
                <p>500 ml milk</p>
                <div>
                <p><span></span></p>
                <p><span></span></p>
            
                </div>
                <button className="bg-green-400 rounded-full py-3 w-40">Want to Cook</button>

            </div>
            </div>

            {/* right side */}
            <div className="bg-red-100 w-1/3">dkjj</div>
           </div>
        </div>
    );
};

export default Recipes;