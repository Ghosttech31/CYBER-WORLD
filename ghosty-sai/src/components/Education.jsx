import { useEffect, useRef } from "react";
import { EDUCATION } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, educationRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Domain
        </h2>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="education-item rounded-full border
                border-purple-300/20 p-6"
            >
              <h4 className="text-lg font-medium lg:text-xl flex flex-col items-center justify-center gap-4 lg:gap-6">
                {edu.institution}{" "}
              </h4>
            </div>
          ))}
        </div>
        <br></br>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfeuAXruUHm91L9XAAmUGOfav7tpTKs2CTc1Ywoc-hUeZzq6A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hero-btn mb-6 flex gap rounded-full border border-pink-200/50 px-3 py-2"
          >
            <span>Registration</span>
            <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
