import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = [
  { href: "#", label: "Book Now" },
  { href: "#surf-lessons", label: "Surf Lessons" },
  { href: "#nearby-tours", label: "Nearby Tours" },
  { href: "#cafe", label: "Cafe" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    t1.set(".navbar", { translateY: -100 });

    t1.to(".navbar", {
      translateY: 0,
      duration: 1,
      delay: 3,
      ease: "power2.inOut",
    })
      .to(".navbar", {
        scrollTrigger: {
          trigger: ".navbar",
          start: "bottom top",
          end: "top bottom",
          toggleActions: "play none reverse none",
          scrub: 1,
        },
        borderRadius: "1rem",
        margin: "1rem auto 0 auto",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".navbar-wrapper", {
        scrollTrigger: {
          trigger: ".navbar-wrapper",
          start: "bottom top",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
        },
        borderRadius: "1rem",
        duration: 0.5,
        ease: "power2.inOut",
      });

    if (mobileNavRef.current) {
      gsap.set(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        display: "none",
      });
    }
  }, []);

  useEffect(() => {
    const menu = mobileNavRef.current;

    if (!menu) return;

    gsap.killTweensOf(menu);

    if (isMenuOpen) {
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(menu, { height: "auto" });
          },
        }
      );
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menu, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const linkBaseClass =
    "text-primary-500 font-bold text-xl hover:text-primary-600 transition-colors duration-300 folkies-vantage";

  return (
    <nav className="navbar flex flex-col items-center max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 px-4 xl:px-0 rounded-b-2xl">
      <div className="navbar-wrapper flex w-full flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 bg-primary rounded-b-2xl shadow-lg">
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="#hero" aria-label="Angel Surf home">
            <Image
              src="/images/logomark-primary.svg"
              alt="Angel Surf Logomark"
              width={64}
              height={64}
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-500 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            <span className="sr-only">Toggle navigation</span>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkBaseClass}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#hero"
            aria-label="Angel Surf home"
            className="hidden md:flex"
          >
            <Image
              src="/images/logomark-primary.svg"
              alt="Angel Surf Logomark"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkBaseClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          aria-hidden={!isMenuOpen}
          className="flex flex-col gap-3 overflow-hidden md:hidden"
          style={{ display: "none" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`${linkBaseClass} w-full text-center`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
