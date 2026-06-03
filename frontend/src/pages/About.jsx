import {
  UtensilsCrossed,
  Users,
  Target,
  Image as ImageIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606755962773-d324e9a13086?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          About <span className="text-yellow-400">Chicken Hub</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          A place where passion meets flavor — serving crispy, juicy and unforgettable chicken experiences in Nepal.
        </p>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
          alt="restaurant"
          className="rounded-2xl shadow-lg w-full object-cover h-[350px]"
        />

        <div>
          <div className="flex items-center gap-2 text-yellow-400 mb-3">
            <UtensilsCrossed />
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Chicken Hub started with a simple dream — to bring world-class crispy chicken
            to the streets of Nepal. What began as a small kitchen has now become a
            beloved food destination for thousands of chicken lovers.
            <br /><br />
            We focus on freshness, quality ingredients, and authentic taste that makes
            every bite memorable.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-12 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
          <Target className="text-yellow-400 mb-3" size={30} />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-400 text-sm">
            To deliver high-quality, delicious chicken meals that bring joy to every customer.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
          <UtensilsCrossed className="text-yellow-400 mb-3" size={30} />
          <h3 className="text-xl font-bold mb-2">Quality First</h3>
          <p className="text-gray-400 text-sm">
            We never compromise on hygiene, freshness, and taste in every dish we serve.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
          <Users className="text-yellow-400 mb-3" size={30} />
          <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
          <p className="text-gray-400 text-sm">
            Our customers are family — we value their happiness above everything.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-gray-400 mt-2">
            The passionate people behind your favorite meals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Aarav Shrestha", role: "Head Chef", img: "https://i.pravatar.cc/150?img=12" },
            { name: "Sujata Thapa", role: "Manager", img: "https://i.pravatar.cc/150?img=32" },
            { name: "Bikram Gurung", role: "Kitchen Expert", img: "https://i.pravatar.cc/150?img=45" },
            { name: "Nisha Karki", role: "Customer Support", img: "https://i.pravatar.cc/150?img=25" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition"
            >
              <img
                src={member.img}
                className="w-20 h-20 mx-auto rounded-full mb-4"
                alt=""
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <ImageIcon />
            <h2 className="text-3xl font-bold">Restaurant Gallery</h2>
          </div>
          <p className="text-gray-400 mt-2">
            A glimpse of our delicious world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-40 md:h-52 w-full object-cover rounded-xl hover:scale-105 transition duration-300"
              alt="restaurant"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;