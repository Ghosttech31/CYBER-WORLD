import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h4 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">
          Contact{" "}
        </h4>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to reach out to Us
        </p>
        <a href="mailto:cybercraftc2@gmail.com" className="contact-text">
          cybercraftc2@gmail.com
        </a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="px-4 text-center text-sm">
        <h5>© 2024 Vishal & CyberCraft ® All Rigths Reserved </h5>
      </div>
    </section>
  );
};

export default Contact;
