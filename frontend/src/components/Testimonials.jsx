import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Shrestha",
      location: "Kathmandu",
      review:
        "Best fried chicken I’ve ever had in Nepal! Super crispy and fresh every time.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sujata Thapa",
      location: "Lalitpur",
      review:
        "Amazing taste and very hygienic. Their chicken burger is my favorite!",
      rating: 5,
    },
    {
      id: 3,
      name: "Bikram Gurung",
      location: "Bhaktapur",
      review:
        "Fast service and delicious food. The spicy wings are absolutely perfect.",
      rating: 4,
    },
    {
      id: 4,
      name: "Nisha Karki",
      location: "Kathmandu",
      review:
        "Great quality food with reasonable price. Family chicken bucket is worth it!",
      rating: 5,
    },
    {
      id: 5,
      name: "Rohan Pandey",
      location: "Pokhara",
      review:
        "Loved the grilled chicken combo. Fresh, healthy and tasty at the same time.",
      rating: 5,
    },
    {
      id: 6,
      name: "Anita Lama",
      location: "Lalitpur",
      review:
        "Their service is excellent and food always arrives hot and fresh.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          What Our <span className="text-yellow-400">Customers Say</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Real reviews from happy customers across Nepal who love our chicken meals
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < t.rating ? "currentColor" : "none"}
                  className="text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-300 text-sm leading-relaxed">
              "{t.review}"
            </p>

            {/* User */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>

              {/* Avatar Circle */}
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                {t.name.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom badge */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg">
          ⭐ Rated 4.8/5 by 10,000+ Happy Customers in Nepal
        </div>
      </div>
    </section>
  );
};

export default Testimonials;