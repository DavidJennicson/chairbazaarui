import * as React from "react";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/toaster"
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Heart,
  ShoppingBagIcon,
  UserIcon,
  MenuIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/checkout';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Dialog,DialogTrigger,DialogContent,DialogDescription,DialogTitle } from "../ui/dialog";
export default function ProductDetails() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const productImages = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ];
var nav=useNavigate()
function handleClick() {
  nav("/Checkout");
}
  const features = [
    "Ergonomic design for optimal comfort",
    "High-quality materials ensure durability",
    "Adjustable height and tilt for personalized seating",
    "Breathable mesh back for enhanced airflow",
    "360-degree swivel for easy movement",
  ];

  const relatedProducts = [
    { name: "Executive Office Chair", price: "$249.99", image: "/placeholder.svg?height=200&width=200" },
    { name: "Mesh Task Chair", price: "$179.99", image: "/placeholder.svg?height=200&width=200" },
    { name: "Leather Recliner", price: "$399.99", image: "/placeholder.svg?height=200&width=200" },
  ];
  const { toast } = useToast()
  const reviews = [
    { author: "John D.", rating: 5, comment: "Excellent chair, very comfortable for long work hours." },
    { author: "Sarah M.", rating: 4, comment: "Good quality, but assembly was a bit tricky." },
    { author: "Mike R.", rating: 5, comment: "Best office chair I've ever owned. Highly recommended!" },
  ];

  return (
    <>
   
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Carousel className="w-full max-w-xs mx-auto md:max-w-md">
            <CarouselContent>
              {productImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Product image ${index + 1}`} className="w-full h-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div>
            <h1 className="text-3xl font-bold mb-2">Ergonomic Office Chair</h1>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4">$299.99</p>
            <p className="text-muted-foreground mb-4">
              Experience ultimate comfort with our ergonomic office chair, designed to support your body during long work hours.
            </p>

            <Button className="flex-1 "
            
             onClick={() => {
               toast({
                 title: "Item has been added to cart",
                 description: "You can checkout the cart to order item!",
              
               })
               nav("/Checkout");
             }}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
          

            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
            <Toaster/>
          </div>
        </div>

        <Separator className="my-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
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
            {relatedProducts.map((product, index) => (
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
            {reviews.map((review, index) => (
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
        <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Chair Bazaar. All rights reserved.</p>
        <p>Developed for UI Design</p>
        <p>Developed by DH</p>
      </div>
    </footer>
      </div>
    </>
  );
}
