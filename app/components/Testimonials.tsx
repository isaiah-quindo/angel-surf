import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-500 my-4 md:my-12 px-4 md:px-12 py-20">
      <div className="flex flex-col justify-between items-center gap-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-5xl text-center text-pink-500 font-bold folkies-vantage">
            Loved by Surfers, Families, Backpackers & Beach Lovers
          </h2>
          <p className="text-lg text-center text-white">
            Guests rave about Angel Surf's beachfront location, family and
            backpacker-friendly atmosphere, and the warmth of our community.
            Whether you're booking a private room or joining our new
            hostel-style bunk accommodations, you'll feel right at home.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="testimonial-card max-w-md mx-auto bg-white rounded-2xl text-foreground overflow-hidden">
            <div className="testimonial-card-body flex flex-col gap-4 p-4">
              <p className="text-lg text-center italic">
                "Angel Surf is the perfect place to stay for surfers and beach
                lovers. The staff is friendly and the location is perfect for
                surfing."
              </p>
            </div>
            <div className="testimonial-card-footer flex flex-row justify-between items-center bg-gray-100 p-4">
              <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faGoogle} className="h-8 w-8" />
                <div className="flex flex-row gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400"
                      style={{ fontSize: "16px" }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-center">- John Doe</p>
            </div>
          </div>

          <div className="testimonial-card max-w-md mx-auto bg-white rounded-2xl text-foreground overflow-hidden">
            <div className="testimonial-card-body flex flex-col gap-4 p-4">
              <p className="text-lg text-center italic">
                "Angel Surf is the perfect place to stay for surfers and beach
                lovers. The staff is friendly and the location is perfect for
                surfing."
              </p>
            </div>
            <div className="testimonial-card-footer flex flex-row justify-between items-center bg-gray-100 p-4">
              <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faAirbnb} className="h-8 w-8" />
                <div className="flex flex-row gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400"
                      style={{ fontSize: "16px" }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-center">- John Doe</p>
            </div>
          </div>

          <div className="testimonial-card max-w-md mx-auto bg-white rounded-2xl text-foreground overflow-hidden">
            <div className="testimonial-card-body flex flex-col gap-4 p-4">
              <p className="text-lg text-center italic">
                "Angel Surf is the perfect place to stay for surfers and beach
                lovers. The staff is friendly and the location is perfect for
                surfing."
              </p>
            </div>
            <div className="testimonial-card-footer flex flex-row justify-between items-center bg-gray-100 p-4">
              <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faAirbnb} className="h-8 w-8" />
                <div className="flex flex-row gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400"
                      style={{ fontSize: "16px" }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-center">- John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
