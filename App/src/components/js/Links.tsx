import { useEffect, useState } from "react";

const navLinks = [
  { href: "#About", label: "About" },
  { href: "#Blog", label: "Blog" },
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
      <nav
        className="site-nav relative mx-auto z-10"
        aria-label="Primary navigation"
      >
        <div className="site-nav__bar h-20 bg-platinum-100">
          <div className="section-shell flex h-full items-center justify-between">
            <div>
              <a
                href="#About"
                aria-label="Go to About section"
                className="font-primary text-gunMetal text-2xl uppercase tracking-[0.08em] lg:text-4xl"
              >
                Darius Hansley
              </a>
            </div>

            <div className="hidden md:ml-auto md:flex">
              <div className="hidden items-center gap-6 text-gunMetal text-3xl md:flex md:min-w-max md:text-4xl">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`site-nav__link rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal ${
                      link.label === "Find Me"
                        ? "site-nav__link--cta px-4 py-2"
                        : "pr-6"
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
              className={`block hamburger md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal ${menuOpen ? "open" : ""}`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
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
                className={`site-nav__mobile-link rounded-sm px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gunMetal ${
                  link.label === "Find Me" ? "site-nav__mobile-link--cta" : ""
                }`}
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
