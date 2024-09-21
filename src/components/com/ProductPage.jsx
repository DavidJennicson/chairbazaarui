import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "../ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import productData from './productData.json'; // Adjust the path as necessary
import {useNavigate} from 'react-router-dom';
export default function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    rating: [],
    price: { min: 0, max: 1000 },
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleFilterChange = (type, value) => {
    if (type === "category") {
      if (value === "all") {
        // Reset category filter when "All Categories" is selected
        setSelectedFilters({ ...selectedFilters, category: [] });
      } else {
        // Toggle category selection
        setSelectedFilters((prev) => ({
          ...prev,
          category: prev.category.includes(value)
            ? prev.category.filter((item) => item !== value)
            : [...prev.category, value],
        }));
      }
    } else if (type === "rating") {
      setSelectedFilters({
        ...selectedFilters,
        rating: selectedFilters.rating.includes(value)
          ? selectedFilters.rating.filter((item) => item !== value)
          : [...selectedFilters.rating, value],
      });
    } else if (type === "price") {
      setSelectedFilters({
        ...selectedFilters,
        price: { min: value[0], max: value[1] },
      });
    }
  };

  const filteredProducts = useMemo(() => {
    return productData.filter((product) => {
      const priceNum = parseFloat(product.price.replace('$', ''));

      // Check category filter
      if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(product.category)) {
        return false;
      }

      // Check rating filter
      if (selectedFilters.rating.length > 0 && !selectedFilters.rating.includes(Math.floor(product.ratingCount / 25))) {
        return false;
      }

      // Check price range filter
      if (priceNum < selectedFilters.price.min || priceNum > selectedFilters.price.max) {
        return false;
      }

      return true;
    });
  }, [selectedFilters]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          {/* ... Navigation Code ... */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-8 p-6">
        {/* Filters Section */}
        <aside className="hidden md:block bg-background p-6 rounded-lg shadow-sm w-full md:w-1/4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            {/* Category Filter */}
            <h3 className="font-semibold mb-2">Category</h3>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Office Chairs">Office Chairs</option>
              <option value="living">Living Room</option>
              <option value="dining">Dining Chairs</option>
              <option value="outdoor">Outdoor Chairs</option>
              <option value="kids">Kids Chairs</option>
            </select>

            {/* Rating Filter */}
      
            {/* Price Range Slider */}
            <h3 className="font-semibold mb-2">Price Range</h3>
            <Slider
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={(value) => {
                setPriceRange(value);
                handleFilterChange("price", value);
              }}
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </aside>

        {/* Product Section */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Chair Bazaar Shop</h1>
            {/* Sort Dropdown Code */}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
<a href={"/products/"+product.id}>
<motion.div  key={index} whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-sm">
                <img src={product.images[0]} alt={product.productName} className="rounded-lg" />
                <h3 className="mt-4 font-bold">{product.productName}</h3>
                <p>{product.price}</p>
                <Button variant="outline" className="mt-2">Add to Cart</Button>
              </motion.div>
</a>
            ))}
          </motion.div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Chair Bazaar. All rights reserved.</p>
        <p>Developed for UI Design</p>
        <p>Developed by DH</p>
      </div>
    </footer>
    </div>
  );
}
