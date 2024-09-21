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
  const star = (
    <svg
      className="h-4 w-4"
      width={51}
      height={51}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
        fill="currentColor"
      />
    </svg>
  );
    const images = [
      "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/vecteezy_ai-generated-office-chair-with-adjustable-features-and_41406856.webp?alt=media&token=f0e1b32b-43b0-4e95-818a-4a22f0607cb0",
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
      { name: "Office Chairs", image: "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/image.png?alt=media&token=51683b07-51ee-46e2-81c1-b0e17966c6b8" },
      { name: "Executive Chairs", image: "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/Gemini_Generated_Image_3srwxk3srwxk3srw_processed.jpeg?alt=media&token=2c22c0b2-13a8-43fb-9b22-973898b4a73e" },
      { name: "Gaming Chairs", image: "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/Gemini_Generated_Image_96jrgf96jrgf96jr_processed.jpeg?alt=media&token=16893b54-4144-4406-8049-5527be901f71" },
      { name: "General Purpose Chairs", image: "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/Gemini_Generated_Image_xlvw9vxlvw9vxlvw_processed.jpeg?alt=media&token=8f747a9f-9d16-4561-8fa6-2843d13c9494" },
    ];

    const products = [
      { name: "Ergonomic Office Chair", category: "Office Chairs", price: 299.99, rating: 4.5, image: "/placeholder.svg?height=200&width=200" },
      { name: "Modern Dining Chair", category: "Executive Chairs", price: 149.99, rating: 4.2, image: "/placeholder.svg?height=200&width=200" },
      { name: "Leather Lounge Chair", category: "Lounge Chairs", price: 499.99, rating: 4.8, image: "/placeholder.svg?height=200&width=200" },
      { name: "Adjustable Bar Stool", category: "Bar Stools", price: 129.99, rating: 4.0, image: "/placeholder.svg?height=200&width=200" },
    ];
    const textAnimation = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0}};

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
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
    >
      <motion.h1
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.6 }}
        className="scroll-m-20 pl-5 pr-5 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Chair Bazaar: Discover Comfort & Style
      </motion.h1>

      <motion.p
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-3 pl-5 pr-5 text-xl text-muted-foreground"
      >
        Explore a wide range of premium chairs designed to enhance your living spaces and work environments. Chair Bazaar offers comfort, elegance, and durability for every occasion.
      </motion.p>

      {/* Buttons */}
      <div className="mt-7 pl-5 pr-5 grid gap-3 w-full sm:inline-flex">
        <Button size={"lg"}>Shop Now</Button>
        <Button variant={"outline"} size={"lg"}>
          Contact Us
        </Button>
      </div>
      {/* End Buttons */}
    </motion.div>

    {/* Col */}
    <motion.div
      className="relative ms-4"
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 30, duration: 0.7 }}
    >
      <img className="w-full rounded-md" src={images[1]} alt="Chair Image" />
    </motion.div>
    {/* End Col */}
  </div>

        {/* End Hero */}
      

          {/* Shop by Category */}
          <section className="py-12">
            <div className="container">
              <h2 className="text-2xl font-bold text-center">Shop by Category</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
                {categories.map((category) => (
                  <Card key={category.name} className="flex flex-col items-center p-5">
                    <CardContent>
                      <img src={category.image} alt={category.name} className="w-full h-50 object-cover rounded-md" />
                      <h3 className="mt-2 text-lg font-semibold text-center">{category.name}</h3>
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
