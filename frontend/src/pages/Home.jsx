import FeaturedChickenItems from "../components/FeaturedChickenItems"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Navbar from "../components/Navbar"
import PopularMeals from "../components/PopularMeals"
import SpecialOffers from "../components/SpecialOffers"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>

      {/* Home page - Completed  */}
      
      <HeroBanner />
      <FeaturedChickenItems />
      <PopularMeals />
      <WhyChooseUs />
      <Testimonials />
      <SpecialOffers />
      <Footer />
      
      </div>
  )
}
export default Home