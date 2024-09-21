import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu, MenuIcon, ShoppingBagIcon, ShoppingCart, UserIcon } from 'lucide-react';
import {useNavigate} from 'react-router-dom'
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  var nav=useNavigate();
  return (
    <>
         <header className="sticky top-0 z-10 bg-background bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-primary">ChairBazaar</h1>
          <nav className="hidden md:flex space-x-6">
            {['Shop', 'ProductDetail', 'Checkout'].map((item) => (
              <a key={item} href={item} onClick={nav('/'+item)} className="text-foreground hover:text-primary transition-colors">{item}</a>
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

    </>
  );
}

export default Navbar;
