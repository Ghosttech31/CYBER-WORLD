import { PROFILE } from "../constants";
import { useEffect, useRef } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import hacker from "../assets/Hacker.png";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".hero-img", {
        opacity: 0,
        y: 10,
        duration: 2,
        ease: "power3.in",
        stagger: 0.3,
        scrollTrigger: {
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".hero-subheading", {
        opacity: 0,
        y: 30,
        duration: 5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".hero-text", {
        opacity: 0,
        x: 50,
        duration: 7,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power3.in",
        stagger: 0.3,
        scrollTrigger: {
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      rel={heroRef}
    >
      <br></br>
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-center text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href="https://youtu.be/zE-28ggkaFo"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex gap rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
      >
        <span>Watch Us</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={hacker}
        alt={PROFILE.name}
        width={400}
        height="400"
        className="hero-img rounded-3xl border-purple-300/20 p-1"
      />
    </section>
  );
};

export default Hero;
