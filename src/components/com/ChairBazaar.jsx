"use client";

import { useState, useEffect } from "react";
import { Menu, ShoppingCart, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import a from "../../assets/a.webp";
import b from "../../assets/b.webp";
import c from "../../assets/c.webp";
import d from "../../assets/d.webp";
export default function ChairBazaarHome() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_ai-generated-office-chair-on-transparent-background-ai_36396017.webp?alt=media&token=baaa4667-1bb5-4c73-adeb-d24c5ab2b9ae",
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_ai-generated-office-chair-with-adjustable-features-and_41406856.webp?alt=media&token=f0e1b32b-43b0-4e95-818a-4a22f0607cb0",
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_black-leather-office-chair-with-chrome-base_49575836.webp?alt=media&token=29f373bb-b3f4-4278-b936-4f1049d1cfc7",
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_black-plastic-chair-isolated-on-transparent-background_44813147.webp?alt=media&token=488fb754-4102-4bb6-a36a-92fe34399b2c"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  });

  const categories = [
    { name: "Office Chairs", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dining Chairs", image: "/placeholder.svg?height=200&width=200" },
    { name: "Lounge Chairs", image: "/placeholder.svg?height=200&width=200" },
    { name: "Bar Stools", image: "/placeholder.svg?height=200&width=200" },
  ];

  const products = [
    { name: "Ergonomic Office Chair", category: "Office Chairs", price: 299.99, rating: 4.5, image: "/placeholder.svg?height=200&width=200" },
    { name: "Modern Dining Chair", category: "Dining Chairs", price: 149.99, rating: 4.2, image: "/placeholder.svg?height=200&width=200" },
    { name: "Leather Lounge Chair", category: "Lounge Chairs", price: 499.99, rating: 4.8, image: "/placeholder.svg?height=200&width=200" },
    { name: "Adjustable Bar Stool", category: "Bar Stools", price: 129.99, rating: 4.0, image: "/placeholder.svg?height=200&width=200" },
  ];

  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    const loadImages = async () => {
      await Promise.all(imagePromises); // Wait for all images to load
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      setImagesLoaded(true); // Then set imagesLoaded to true
    };

    loadImages();
  }, [images]);

  if (!imagesLoaded) {
    return (
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Skeleton className="h-8 w-[250px] rounded-md" />
              <Skeleton className="h-6 w-[600px] rounded-md" />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Skeleton className="h-10 w-[150px] rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Skeleton className="h-56 w-full rounded-xl" />
              <Skeleton className="h-56 w-full rounded-xl" />
              <Skeleton className="h-56 w-full rounded-xl" />
              <Skeleton className="h-56 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Chair Bazaar</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/shop">Shop</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/contact">Contact</a>
            </nav>
          </div>
          <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <a className="block px-2 py-1 text-lg" href="/">Home</a>
                <a className="block px-2 py-1 text-lg" href="/shop">Shop</a>
                <a className="block px-2 py-1 text-lg" href="/about">About</a>
                <a className="block px-2 py-1 text-lg" href="/contact">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Carousel */}
        <section className="py-12 ">
         
        <div className="container">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 1 }} 
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
                >
                  The Ultimate Ecommerce Platform
                </motion.h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore the best products and make your online shopping experience seamless.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <motion.div
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    width="550"
                    height="550"
                    variants={itemVariants(index > 1 ? 'left' : 'right')}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img src={category.image} alt={category.name} className="w-full h-40 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-2">{product.category}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      See Variants
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Chair Bazaar</h3>
              <p className="text-muted-foreground">We offer a wide selection of high-quality chairs for every need and style.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-foreground">Home</a></li>
                <li><a href="/shop" className="text-muted-foreground hover:text-foreground">Shop</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">123 Chair Street, Furniture City, FC 12345</p>
              <p className="text-muted-foreground">Email: info@chairbazaar.com</p>
              <p className="text-muted-foreground">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
            <p>&copy; 2023 Chair Bazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
