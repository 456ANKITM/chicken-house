import { Flame, Truck, ShieldCheck, ThumbsUp, Clock, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Flame size={28} />,
      title: "Fresh & Crispy",
      desc: "We serve freshly cooked chicken with perfect crispiness in every bite.",
    },
    {
  id: 2,
  icon: <Flame size={28} />,
  title: "Made Fresh on Order",
  desc: "Every meal is prepared only after you place your order to ensure maximum freshness and taste.",
},
    {
      id: 3,
      icon: <ShieldCheck size={28} />,
      title: "Hygienic Kitchen",
      desc: "We maintain top-level cleanliness and food safety standards.",
    },
    {
      id: 4,
      icon: <ThumbsUp size={28} />,
      title: "Top Rated Taste",
      desc: "Loved by thousands of happy customers with 4.9★ average rating.",
    },
    {
      id: 5,
      icon: <Clock size={28} />,
      title: "24/7 Service",
      desc: "We are always open to satisfy your chicken cravings anytime.",
    },
    {
      id: 6,
      icon: <Heart size={28} />,
      title: "Made with Love",
      desc: "Every meal is prepared with passion and premium ingredients.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Why <span className="text-yellow-400">Choose Us</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          We don’t just serve food — we deliver an experience you’ll keep coming back for
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mt-5">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Highlight Banner */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg">
          🔥 100% Fresh • 100% Tasty • 100% Satisfaction
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;