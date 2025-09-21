import React from "react";
import Image from "next/image";

const SurfLessons = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 overflow-hidden">
      <h2 className="text-5xl text-center text-blue-500 folkies-vantage mb-8">
        Surf with the Local Champs
      </h2>
      <div className="flex flex-row justify-center items-start gap-8">
        <Image
          src="/images/turtle-bike.svg"
          alt="Surf Lessons"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-4">
          <p className="text-left text-lg mb-4">
            Buenavista is one of Sorsogon’s best surf spots, with consistent
            waves for both beginners and pros. At Angel Surf, we make it easy to
            get started or level up:
          </p>
          <ul className="text-left text-xl font-bold list-disc ps-8">
            <li className="mb-4 text-blue-500">
              Surf lessons with local surfing champs
            </li>
            <li className="mb-4 text-red-500">
              Board rentals (shortboards, longboards, soft tops)
            </li>
            <li className="mb-4 text-green-500">
              Kayak rentals for calmer days
            </li>
          </ul>
        </div>
      </div>
      {/* Masonry Cards */}
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            <div className="group relative block rounded-xl overflow-hidden focus:outline-hidden">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1684517009001-0d3a715dfd91?q=80&w=1742&auto=format&fit=crop"
                  alt="Beginner surf lesson with instructor"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-semibold text-yellow-500 rounded-lg bg-blue-500 p-4 md:text-xl">
                  Beginner Surf Lessons
                </div>
              </div>
            </div>
          </div>

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            <div className="group relative block rounded-xl overflow-hidden focus:outline-hidden">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://images.unsplash.com/photo-1751029538988-2d5b73a7e5a2?q=80&w=774&auto=format&fit=crop"
                  alt="Advanced surfing techniques"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-semibold text-blue-500 rounded-lg bg-pink-500 p-4 md:text-xl">
                  Advanced Surf Coaching
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="group relative block rounded-xl overflow-hidden focus:outline-hidden">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://images.unsplash.com/photo-1717465760660-e2edf58fcc4f?q=80&w=1746&auto=format&fit=crop"
                  alt="Kayak rental and water activities"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-semibold text-primary rounded-lg bg-green-500 p-4 md:text-xl">
                  Kayak & Water Sports
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="group relative block rounded-xl overflow-hidden focus:outline-hidden">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://images.unsplash.com/photo-1735567063976-730a3b47c12d?q=80&w=774&auto=format&fit=crop"
                  alt="Surfboard rental and equipment"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-semibold text-yellow-500 rounded-lg bg-red-500 p-4 md:text-xl">
                  Board & Equipment Rental
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="group relative block rounded-xl overflow-hidden focus:outline-hidden">
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://images.unsplash.com/photo-1564737999788-02811faaf4bd?q=80&w=1740&auto=format&fit=crop"
                  alt="Group surf lessons and beach activities"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-semibold text-blue-500 rounded-lg bg-secondary p-4 md:text-xl">
                  Group Lessons & Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfLessons;
