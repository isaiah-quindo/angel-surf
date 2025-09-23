"use client";
import React from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import SurfLessons from "./components/SurfLessons";
import NearbyTours from "./components/NearbyTours";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <SurfLessons />
      <NearbyTours />
    </>
  );
}
