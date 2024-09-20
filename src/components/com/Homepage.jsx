import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, UserIcon, MenuIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  { id: 'all', name: 'All Chairs' },
  { id: 'office', name: 'Office Chairs' },
  { id: 'dining', name: 'Dining Chairs' },
  { id: 'lounge', name: 'Lounge Chairs' },
  { id: 'outdoor', name: 'Outdoor Chairs' },
];

const featuredProducts = [
  { id: 1, name: 'Ergonomic Office Chair', price: '$299', image: '/placeholder.svg?height=400&width=400', category: 'office' },
  { id: 2, name: 'Modern Lounge Chair', price: '$499', image: '/placeholder.svg?height=400&width=400', category: 'lounge' },
  { id: 3, name: 'Dining Room Chair Set', price: '$799', image: '/placeholder.svg?height=400&width=400', category: 'dining' },
  { id: 4, name: 'Rocking Chair', price: '$249', image: '/placeholder.svg?height=400&width=400', category: 'lounge' },
];

const allProducts = [
  ...featuredProducts,
  { id: 5, name: 'Bar Stool Set', price: '$199', image: '/placeholder.svg?height=400&width=400', category: 'dining' },
  { id: 6, name: 'Accent Chair', price: '$349', image: '/placeholder.svg?height=400&width=400', category: 'lounge' },
  { id: 7, name: 'Outdoor Patio Chair', price: '$179', image: '/placeholder.svg?height=400&width=400', category: 'outdoor' },
  { id: 8, name: 'Gaming Chair', price: '$399', image: '/placeholder.svg?height=400&width=400', category: 'office' },
  { id: 9, name: 'Folding Chair Set', price: '$129', image: '/placeholder.svg?height=400&width=400', category: 'outdoor' },
  { id: 10, name: 'Leather Armchair', price: '$599', image: '/placeholder.svg?height=400&width=400', category: 'lounge' },
  { id: 11, name: 'Swivel Office Chair', price: '$279', image: '/placeholder.svg?height=400&width=400', category: 'office' },
  { id: 12, name: 'Kids Study Chair', price: '$149', image: '/placeholder.svg?height=400&width=400', category: 'office' },
];

export default function HomePage() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-primary">ChairBazaar</h1>
          <nav className="hidden md:flex space-x-6">
            {['Shop', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-foreground hover:text-primary transition-colors">{item}</a>
            ))}
          </nav>
          <div className="hidden md:flex space-x-4">
            <ShoppingBagIcon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
            <UserIcon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {['Shop', 'About', 'Contact'].map((item) => (
                  <a key={item} href="#" className="text-lg text-foreground hover:text-primary transition-colors">{item}</a>
                ))}
              </nav>
              <div className="flex space-x-4 mt-8">
                <ShoppingBagIcon className="w-6 h-6 text-foreground" />
                <UserIcon className="w-6 h-6 text-foreground" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="relative h-[70vh] bg-secondary overflow-hidden">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured Chair"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Comfort Redefined</h2>
              <p className="text-xl md:text-2xl text-foreground mb-8">Discover our new collection of ergonomic chairs</p>
              <Button className="bg-primary text-foreground px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary transition-colors">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center mb-4 rounded" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => console.log(`Added ${product.name} to cart`)}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Shop by Category</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`min-w-[120px] ${selectedCategory === category.id ? 'bg-primary text-foreground hover:bg-secondary' : 'text-primary border-primary hover:bg-secondary'}`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-background shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center mb-4 rounded" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => console.log(`Added ${product.name} to cart`)}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 ChairBazaar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
