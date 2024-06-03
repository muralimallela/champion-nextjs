"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import { Rating } from "primereact/rating";
import { testimonials } from "./testimonials";

export default function EmblaCarousel() {
  const options = {
    speed: 1,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll(options)]);

  return (
    <div className="py-6">
      <h1 className="text-3xl text-center font-bold">
        What says <br />
        <span className="text-primary">our Customers</span>
      </h1>
      <div className="lg:container lg:px-12">
        <div className="embla inner-shadow py-3" ref={emblaRef} >
          <div className="embla__container py-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide">
                <div className="card-testimonials p-3 shadow-custom">
                  <h6 className="text-xl text-center font-bold text-primary">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-center text-gray-500">
                    {testimonial.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <div className="card py-2 flex justify-center">
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      cancel={false}
                      className="space-x-3"
                      style={{ color: "green" }}
                    />
                  </div>
                  <p  className="dark:text-white/40">{testimonial.reviewContent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
