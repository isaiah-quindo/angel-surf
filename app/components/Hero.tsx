"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.set(".hero", { scaleY: 0 });
    tl.set(".hero-image", { opacity: 0, scale: 1.1 });
    tl.set(".logo", { opacity: 0 });
    tl.set(".tagline", { opacity: 0 });

    tl.to(".hero", {
      duration: 1,
      scaleY: 1,
      ease: "power2.inOut",
    })
      .to(".logo", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(".hero-image", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
      })
      .to(".tagline", {
        opacity: 1,
        ease: "power2.inOut",
      });

    tl.to(".logo", {
      scrollTrigger: {
        trigger: ".logo",
        toggleActions: "restart none none none",
        start: "top 20%",
        end: "top 100px",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      duration: 3,
      ease: "power2.inOut",
    });

    tl.to(".tagline", {
      scrollTrigger: {
        trigger: ".tagline",
        toggleActions: "restart none none none",
        start: "top 20%",
        end: "top 100px",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      duration: 3,
      ease: "power2.inOut",
    });

    gsap.set(".turtle-bike", { x: -100, opacity: 0 });
    gsap.set(".waves", { y: 100, opacity: 0 });
    gsap.set(".crab", { y: -100, opacity: 0, rotate: 100 });
    gsap.set(".hero-text", { opacity: 0 });
    gsap.set(".hero-btn", { opacity: 0 });

    gsap.to(".turtle-bike", {
      scrollTrigger: {
        trigger: ".turtle-bike",
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".crab", {
      scrollTrigger: {
        trigger: ".turtle-bike",
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
      y: 0,
      rotate: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(".waves", {
      scrollTrigger: {
        trigger: ".turtle-bike",
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: "power2.inOut",
    });
    gsap.to(".hero-text", {
      scrollTrigger: {
        trigger: ".hero-text",
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(".hero-btn", {
      scrollTrigger: {
        trigger: ".hero-btn",
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <>
      <div className="mx-auto max-h-screen flex flex-col p-4 md:p-12">
        <div className="hero relative flex flex-col justify-center items-center rounded-2xl overflow-hidden h-200 bg-blue-500">
          <Image
            className="hero-image w-full h-auto object-cover filter blur-sm"
            src="/images/surfing-bg.jpg"
            alt="Surfing Background"
            width={1000}
            height={1000}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
            <Image
              className="logo"
              src="/images/logo.svg"
              alt="Palm Tree Sunset"
              width={250}
              height={500}
            />
            <p className="tagline text-white text-center text-3xl italic">
              Beachfront Surf Stay{" "}
              <span className="block text-xl">
                {" "}
                Buenavista, Gubat, Sorsogon
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto p-4 md:p-12">
        <div className="flex flex-row justify-between items-center gap-4 mb-8">
          <Image
            className="turtle-bike hidden lg:block"
            src="/images/turtle.svg"
            alt="Turtle Bike"
            width={250}
            height={250}
          />
          <Image
            className="waves mx-auto"
            src="/images/waves.svg"
            alt="Waves"
            width={250}
            height={250}
          />
          <Image
            className="crab hidden lg:block"
            src="/images/crab.svg"
            alt="Crab"
            width={250}
            height={250}
          />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-8">
          <p className="hero-text text-2xl md:text-4xl leading-8md:leading-11 text-center text-blue-500">
            Wake up to the waves, surf with local surfing champs, and hang out
            in our beachfront café. Whether you&apos;re here to ride, relax, or
            connect with fellow travelers, Angel Surf is your{" "}
            <span className="font-bold">
              laid-back surf haven with hostel-style vibes.
            </span>
          </p>
          <Link href="/about" className="hero-btn btn btn-primary">
            Book Your Stay on Airbnb
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
