import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <> 
     <Navbar />
      <div className="bg-gradient-to-b from-black to-gray-900 text-white">

      {/* HERO */}
      <section className="text-center py-16 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We’d love to hear from you! Whether it’s feedback, order issues, or general inquiries — we’re here to help.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="px-6 md:px-12 pb-20 grid lg:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO + MAP */}
        <div className="space-y-6">

          {/* INFO CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" />
                +977 9823629155
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" />
                support@chickenhub.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" />
                Crunchy Fried Chicken, Balkot, Bhaktapur
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-yellow-400" />
                Sun–Sat: 9:00 AM – 10:00 PM
              </div>

            </div>
          </div>

         {/* MAP */}
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
  <iframe
    title="Chicken Hub Location"
    src="https://maps.google.com/maps?q=27.668864103296272,85.36546134199526&z=16&output=embed"
    className="w-full h-[300px]"
    loading="lazy"
  ></iframe>
</div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  
  );
};

export default Contact;