import { Gift, Tag, Flame, Percent } from "lucide-react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "30% OFF on First Order",
      desc: "Get exclusive discount on your first chicken order from our app.",
      icon: <Percent size={26} />,
      highlight: "NEW USER DEAL",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Family Bucket Deal",
      desc: "Buy 1 Family Bucket and get free fries + cold drink.",
      icon: <Gift size={26} />,
      highlight: "BEST VALUE",
      color: "from-pink-500 to-red-500",
    },
    {
      id: 3,
      title: "Spicy Wings Combo",
      desc: "Extra spicy wings combo at special discounted price for limited time.",
      icon: <Flame size={26} />,
      highlight: "HOT DEAL",
      color: "from-red-500 to-orange-600",
    },
    {
      id: 4,
      title: "Weekend Special Offer",
      desc: "Flat 20% OFF on all chicken meals every Saturday & Sunday.",
      icon: <Tag size={26} />,
      highlight: "WEEKEND ONLY",
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Special <span className="text-yellow-400">Offers</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Grab the hottest deals and enjoy your favorite chicken meals at unbeatable prices
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background glow */}
            <div
              className={`absolute inset-0 opacity-10 bg-gradient-to-r ${offer.color}`}
            ></div>

            {/* Highlight badge */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {offer.highlight}
            </div>

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
              {offer.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mt-5">
              {offer.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {offer.desc}
            </p>

            {/* CTA */}
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-xl transition-all duration-300">
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg">
          🔥 Limited Time Offers — Don’t Miss Out!
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;