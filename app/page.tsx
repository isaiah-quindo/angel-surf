"use client";
import React from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import SurfLessons from "./components/SurfLessons";
import NearbyTours from "./components/NearbyTours";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <SurfLessons />
      <NearbyTours />
    </>
  );
}
