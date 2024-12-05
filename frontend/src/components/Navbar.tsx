import React, { useState } from "react";

const Navbar = () => {
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-first-bg sticky top-0 z-50 w-full border-b bg-opacity-95 backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-60 px-4 lg:px-0">
      <div className="mx-auto px-4 max-w-7xl flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          {/*--------------- Logo/Branding ---------------*/}
          <a
            href="a"
            className="font-montserrat text-font-clr font-bold text-lg ar-6 flex items-center space-x-2">
            <p>Kelompok 4</p>
          </a>
          {/*--------------- Desktop navigation ---------------*/}
          <nav className="flex items-center space-x-6 text-base sm:text-lg md:text-xl font-medium">
            <a
              href="#Hero"
              className="font-montserrat text-font-clr font-semibold transition-color hover:text-foreground/60">
              Home
            </a>
            <a
              href="#About"
              className="font-montserrat text-font-clr font-semibold transition-color hover:text-foreground/60">
              About
            </a>
            <a
              href="#a4"
              className="font-montserrat text-font-clr font-semibold transition-color hover:text-foreground/60">
              Monitoring
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
