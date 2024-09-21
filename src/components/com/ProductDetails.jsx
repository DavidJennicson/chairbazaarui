import * as React from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, ShoppingBagIcon, UserIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";

export default function ProductDetails({ productData }) {
  const { toast } = useToast();

  return (
    <>
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Carousel className="w-full max-w-xs mx-auto md:max-w-md">
            <CarouselContent>
              {productData.images.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Product image ${index + 1}`} className="w-full h-auto rounded-xl" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div>
            <h1 className="text-3xl font-bold mb-2">{productData.productName}</h1>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">({productData.ratingCount} reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4">{productData.price}</p>
            <p className="text-muted-foreground mb-4">
              {productData.description}
            </p>

            <Button
              className="flex-1"
              onClick={() => {
                toast({
                  title: "Item has been added to cart",
                  description: "You can checkout the cart to order item!",
                });
              }}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>

            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
            <Toaster />
          </div>
        </div>

        <Separator className="my-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productData.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productData.relatedProducts.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-primary font-bold">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {productData.reviews.map((review, index) => (
              <div key={index} className="border-b border-border pb-4">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold">{review.author}</span>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="mr-2">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button variant="outline">
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
