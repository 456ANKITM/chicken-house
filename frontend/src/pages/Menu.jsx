import { useMemo, useState } from "react";
import menuItems from "../assets/menu.js";
import { Search } from "lucide-react";
import Footer from "../components/Footer.jsx";
import { Menu } from "lucide-react";
import Navbar from "../components/Navbar.jsx";


const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // flatten all items
  const allItems = useMemo(() => {
    return menuItems.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.category,
      }))
    );
  }, []);

  // get categories
  const categories = ["All", ...menuItems.map((c) => c.category)];

  // filtering logic
  const filteredItems = useMemo(() => {
    let data = [...allItems];

    // category filter
    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    // search filter (live)
    if (search.trim()) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // sorting
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [search, sort, selectedCategory, allItems]);

  return (
    <> 

    
     <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-12 py-10">

      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">

        {/* SEARCH BAR */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-2 w-full lg:w-1/2">
          <Search className="text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for chicken, burger, wings..."
            className="bg-transparent outline-none w-full ml-3 text-white"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* CATEGORY FILTER */}
          <select
            className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>

          {/* PRICE SORT */}
          <select
            className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg outline-none"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="" className="text-black">Sort By Price</option>
            <option value="low" className="text-black">Low to High</option>
            <option value="high" className="text-black">High to Low</option>
          </select>
        </div>
      </div>

      {/* MENU GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>

              <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-400 font-bold">
                  Rs {item.price}
                </span>

                <span className="text-xs text-gray-400">
                  {item.category}
                </span>
              </div>

              {/* <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded-lg transition">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredItems.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No items found 😔
        </div>
      )}
    </section>

    <Footer />
    
    </>
   
  );
};

export default MenuPage;