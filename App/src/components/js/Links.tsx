import { useEffect, useState } from "react";

const navLinks = [
  { href: "#About", label: "About" },
  { href: "https://chaosandvideogames.com", label: "Blog" },
  { href: "#Portfolio", label: "Portfolio" },
  {
    href: "https://www.linkedin.com/in/darius-hansley-96b752147",
    label: "Find Me",
  },
] as const;

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleToggle = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="relative mx-auto z-10" aria-label="Primary navigation">
        <div className="flex items-center justify-between h-20 bg-platinum-100">
          <div className="pl-5">
            <a href="#About" aria-label="Go to About section">
              <img
                src="./img/logo.png"
                className="w-48 h-1/4 self-center lg:pl-16"
                alt="Darius Hansley logo"
              />
            </a>
          </div>

          <div className="hidden lg:text-2xl md:flex space-x-6">
            <div className="hidden items-center justify-between text-gunMetal text-3xl md:flex md:w-full md:min-w-max md:text-4xl pr-40 lg:pl-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal ${
                    link.label === "Find Me"
                      ? "text-platinum-100 bg-gunMetal px-4 py-2"
                      : "hover:text-darkGrayishBlue pr-6"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <button
            id="menu-btn"
            type="button"
            onClick={handleToggle}
            aria-expanded={menuOpen}
            aria-controls="menu"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className={`block mr-12 hamburger md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal ${menuOpen ? "open" : ""}`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="z[-20] md:hidden">
          <div
            id="menu"
            aria-hidden={!menuOpen}
            className={`-z-20 text-3xl w-full absolute flex-col items-center self-end py-8 space-y-6 font-bold bg-white sm:self-center ${
              menuOpen ? "mobileMenu" : "hideMobileMenu hidden"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-sm px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Links;
