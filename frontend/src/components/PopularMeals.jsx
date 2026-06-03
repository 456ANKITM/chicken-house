import popularMeals from "../assets/popularMeals.js";

const PopularMeals = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Popular <span className="text-yellow-400">Meals</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Most loved combos & best selling meals
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularMeals.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Price Badge */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm shadow-md">
                Rs {item.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularMeals;