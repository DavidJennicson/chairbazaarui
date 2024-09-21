import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "../ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const productData = [
  {
    "productName": "Ergonomic Office Chair",
    "price": "$299.99",
    "description": "Experience ultimate comfort with our ergonomic office chair, designed to support your body during long work hours.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/011.jpeg?alt=media&token=b3be88f2-5b51-4bab-9eb4-3bf6e0734e73",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/012.jpeg?alt=media&token=05e4e32c-8b2e-4870-916f-a3cbdffa840c"
    ],
    "features": [
      "Ergonomic design for optimal comfort",
      "High-quality materials ensure durability"
    ],
    "relatedProducts": [
      { "name": "Executive Office Chair", "price": "$249.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "John D.", "rating": 5, "comment": "Excellent chair, very comfortable for long work hours." }
    ],
    "ratingCount": 128,
    "category": "Office Chairs"
  },
  {
    "productName": "Mesh Office Chair",
    "price": "$199.99",
    "description": "Stay cool and comfortable with our breathable mesh office chair, perfect for long hours at your desk.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/021.jpeg?alt=media&token=example1",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/022.jpeg?alt=media&token=example2"
    ],
    "features": [
      "Breathable mesh back for ventilation",
      "Adjustable height and tilt"
    ],
    "relatedProducts": [
      { "name": "Leather Executive Chair", "price": "$299.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Alice B.", "rating": 4, "comment": "Great chair for the price!" }
    ],
    "ratingCount": 75,
    "category": "Office Chairs"
  },
  {
    "productName": "Gaming Chair",
    "price": "$349.99",
    "description": "Designed for gamers, this chair offers maximum comfort and style for long gaming sessions.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/031.jpeg?alt=media&token=example3",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/032.jpeg?alt=media&token=example4"
    ],
    "features": [
      "Adjustable armrests and lumbar support",
      "Sleek racing-style design"
    ],
    "relatedProducts": [
      { "name": "Footrest Stool", "price": "$49.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Mark S.", "rating": 5, "comment": "Perfect for long gaming sessions!" }
    ],
    "ratingCount": 150,
    "category": "Office Chairs"
  },
  {
    "productName": "Reclining Lounge Chair",
    "price": "$399.99",
    "description": "Relax in style with our reclining lounge chair, perfect for your living room or study.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/041.jpeg?alt=media&token=example5",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/042.jpeg?alt=media&token=example6"
    ],
    "features": [
      "Reclining function for ultimate relaxation",
      "Soft upholstery for added comfort"
    ],
    "relatedProducts": [
      { "name": "Ottoman", "price": "$79.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Emma T.", "rating": 4, "comment": "Very comfortable, but takes up a bit of space." }
    ],
    "ratingCount": 60,
    "category": "Living Room"
  },
  {
    "productName": "Height Adjustable Desk Chair",
    "price": "$249.99",
    "description": "This chair adjusts to fit any desk height, ensuring a comfortable working position.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/051.jpeg?alt=media&token=example7",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/052.jpeg?alt=media&token=example8"
    ],
    "features": [
      "Height adjustable for versatility",
      "Stylish design fits any workspace"
    ],
    "relatedProducts": [
      { "name": "Standing Desk", "price": "$399.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Tom R.", "rating": 5, "comment": "Great chair for my adjustable desk!" }
    ],
    "ratingCount": 80,
    "category": "Office Chairs"
  },
  {
    "productName": "Kids Study Chair",
    "price": "$89.99",
    "description": "A fun and colorful chair designed for kids, perfect for homework or playtime.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/061.jpeg?alt=media&token=example9",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/062.jpeg?alt=media&token=example10"
    ],
    "features": [
      "Colorful design to brighten any room",
      "Durable construction for kids"
    ],
    "relatedProducts": [
      { "name": "Kids Desk", "price": "$129.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Lucy K.", "rating": 4, "comment": "My daughter loves this chair!" }
    ],
    "ratingCount": 45,
    "category": "Kids"
  },
  {
    "productName": "Rocking Chair",
    "price": "$179.99",
    "description": "Enjoy a classic rocking chair experience, perfect for relaxation or reading.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/071.jpeg?alt=media&token=example11",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/072.jpeg?alt=media&token=example12"
    ],
    "features": [
      "Classic design for timeless appeal",
      "Sturdy construction for durability"
    ],
    "relatedProducts": [
      { "name": "Throw Blanket", "price": "$29.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Nancy P.", "rating": 5, "comment": "So relaxing, perfect for my reading nook!" }
    ],
    "ratingCount": 90,
    "category": "Living Room"
  },
  {
    "productName": "Bar Stool",
    "price": "$99.99",
    "description": "Stylish bar stool with a modern design, perfect for kitchen islands or home bars.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/081.jpeg?alt=media&token=example13",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/082.jpeg?alt=media&token=example14"
    ],
    "features": [
      "Modern design fits any decor",
      "Comfortable footrest for relaxation"
    ],
    "relatedProducts": [
      { "name": "Counter Height Table", "price": "$249.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Kevin L.", "rating": 4, "comment": "Very sturdy and stylish!" }
    ],
    "ratingCount": 50,
    "category": "Dining Chairs"
  },
  {
    "productName": "Adjustable Drafting Chair",
    "price": "$159.99",
    "description": "Perfect for artists and architects, this chair offers height adjustability and comfort.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/091.jpeg?alt=media&token=example15",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/092.jpeg?alt=media&token=example16"
    ],
    "features": [
      "Height adjustable for various tasks",
      "360-degree swivel base for flexibility"
    ],
    "relatedProducts": [
      { "name": "Drawing Table", "price": "$199.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Sarah W.", "rating": 5, "comment": "Great for my home studio!" }
    ],
    "ratingCount": 30,
    "category": "Office Chairs"
  },
  {
    "productName": "Outdoor Patio Chair",
    "price": "$129.99",
    "description": "Stylish and durable chair designed for outdoor use, perfect for patios or gardens.",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/101.jpeg?alt=media&token=example17",
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/102.jpeg?alt=media&token=example18"
    ],
    "features": [
      "Weather-resistant materials",
      "Stylish design for outdoor decor"
    ],
    "relatedProducts": [
      { "name": "Patio Table", "price": "$199.99", "image": "/placeholder.svg?height=200&width=200" }
    ],
    "reviews": [
      { "author": "Jake H.", "rating": 4, "comment": "Perfect for my backyard!" }
    ],
    "ratingCount": 40,
    "category": "Outdoor"
  }
];

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
            <h3 className="font-semibold mb-2">Rating</h3>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => handleFilterChange("rating", e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>

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
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow-sm">
                <img src={product.images[0]} alt={product.productName} className="rounded-lg" />
                <h3 className="mt-4 font-bold">{product.productName}</h3>
                <p>{product.price}</p>
                <Button variant="outline" className="mt-2">Add to Cart</Button>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
