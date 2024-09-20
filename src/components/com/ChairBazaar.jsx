"use client";

import { useState, useEffect } from "react";
import { Menu, ShoppingCart, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function ChairBazaarHome() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_ai-generated-office-chair-on-transparent-background-ai_36396017.webp?alt=media&token=baaa4667-1bb5-4c73-adeb-d24c5ab2b9ae",
    "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_ai-generated-office-chair-with-adjustable-features-and_41406856.webp?alt=media&token=f0e1b32b-43b0-4e95-818a-4a22f0607cb0",
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
      await Promise.all(imagePromises);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setImagesLoaded(true);
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
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 1 }} 
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
                >
                  Welcome to Chair Bazaar
                </motion.h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our exclusive range of chairs to fit every style and comfort need.
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
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  key={0}
                  src={images[0]} // Display the first image for mobile
                  alt="Featured Chair"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  width="550"
                  height="550"
                  variants={itemVariants('left')}
                />
                {images.slice(1).map((src, index) => (
                  <motion.img
                    key={index + 1}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="hidden md:mx-auto md:block aspect-video overflow-hidden rounded-xl object-cover object-center"
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
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
              {categories.map((category) => (
                <Card key={category.name} className="flex flex-col items-center">
                  <CardContent>
                    <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-md" />
                    <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-center">Featured Products</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
              {products.map((product) => (
                <Card key={product.name} className="flex flex-col items-center">
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
                    <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                    <p className="mt-1 text-gray-500">${product.price.toFixed(2)}</p>
                    <div className="mt-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="container text-center">
          <p className="text-sm text-gray-500">© 2024 Chair Bazaar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
