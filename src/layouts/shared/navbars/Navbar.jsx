import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import useStateData from "@/hooks/useStateData";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setOpen] = useState(false);
  const { setDialogOpen } = useStateData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Check active section
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Adjust for navbar height
        const sectionBottom = sectionTop + section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionBottom - 100
        ) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`font-inter fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="bg-accentPrimary">
        <Container>
          <nav className="py-4 flex justify-between items-center">
            <div className="logo" data-aos="fade-right" data-aos-duration="500">
              <a href="#" className="text-white text-2xl sm:text-4xl font-bold">
                Logo
              </a>
            </div>
            <div
              className="hamburger md:hidden"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                color="white"
              />
            </div>
            <div
              className="nav-btns items-center text-white gap-8 lg:gap-16 hidden md:flex"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <a
                href="#how-work"
                className="text-lg relative group hover:scale-105 transition-all duration-300"
              >
                How it works
                <span
                  className={`${
                    activeSection === "how-work"
                      ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>
              <a
                href="#watch-demo"
                className="text-lg relative group hover:scale-105 transition-all duration-300"
              >
                Demo
                <span
                  className={`${
                    activeSection === "watch-demo"
                      ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>
              <a
                href="#faq"
                className="text-lg relative group hover:scale-105 transition-all duration-300"
              >
                FAQ
                <span
                  className={`${
                    activeSection === "faq"
                      ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>
            </div>
            <div
              className="cta  hidden md:block"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <Button
                className="text-primary001 bg-white border-white hover:text-white hover:bg-transparent"
                onClick={() => setDialogOpen(true)}
                asChild
              >
                <a href="#date-pick">Get Started</a>
              </Button>
            </div>
          </nav>
        </Container>
      </div>

      <div
        className={`mobile-nav h-[90vh] flex flex-col justify-between items-center p-10 bg-[#2340b4] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className=""></div>
        <div className="flex flex-col nav-btns items-center text-white gap-8 lg:gap-16">
          <a
            href="#how-work"
            className="text-lg relative group hover:scale-105 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
          >
            How it works
            <span
              className={`${
                activeSection === "how-work"
                  ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                  : "w-0"
              }`}
            ></span>
          </a>
          <a
            href="#watch-demo"
            className="text-lg relative group hover:scale-105 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
          >
            Demo
            <span
              className={`${
                activeSection === "watch-demo"
                  ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                  : "w-0"
              }`}
            ></span>
          </a>
          <a
            href="#faq"
            className="text-lg relative group hover:scale-105 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
          >
            FAQ
            <span
              className={`${
                activeSection === "faq"
                  ? "absolute left-0 right-0 bottom-0 mx-auto h-[2px] w-full bg-white transition-all group-hover:w-full"
                  : "w-0"
              }`}
            ></span>
          </a>
        </div>
        <div className="cta">
          <Button
            className="text-primary001 bg-white border-white hover:text-white hover:bg-transparent"
            onClick={() => setDialogOpen(true)}
            asChild
          >
            <a href="#date-pick" onClick={() => setOpen((prev) => !prev)}>
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
