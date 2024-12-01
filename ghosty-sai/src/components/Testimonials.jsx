import { useEffect, useRef } from "react";
import { TESTIMONIAL } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-image", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".testimonial-quote", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".testimonial-info", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, testimonialRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
      <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
        TEAM
      </h2>
      <div className="px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name}
            className="testimonial-image mb-6 h-24 w-24 rounded-full border-4 object-cover"
          />
          <blockquote className="testimonial-quote max-w-xl text-lg leading-relaxed lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>
          <div className="testimonial-info mt-4 text-lg">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm"> {TESTIMONIAL.title} </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
        <a
          href="https://chat.whatsapp.com/GlQTwjiwEhOEVziuJcWGuR"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn mb-6 flex gap rounded-full border border-pink-200/50 px-3 py-2"
        >
          <span>Join Our Whatsapp group for any Queries</span>
          <RiArrowRightUpLine />
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
