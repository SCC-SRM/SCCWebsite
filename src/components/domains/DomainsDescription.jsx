import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DomainsDescription() {
  useLayoutEffect(() => {
    gsap.set(".domainHeading", {
      opacity: 0,
      x: "-50",
    });
    gsap.to(".domainHeading", {
      opacity: 1,
      x: "10",
      scrollTrigger: {
        trigger: "#domainDescRoot",
        start: "top 90%",
        toggleActions: "play resume resume reset",
      },
    });
    gsap.set(".section", {
      transformOrigin: "bottom",
      scale: 0.8,
      x: 50,
    });
    gsap.utils.toArray(".section").forEach((section) => {
      // section.children also try
      const animation = gsap.to(section, {
        scale: 1,
        x: -10,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "top 50%",
        scrub: 0.2,
        onEnter: () => {
          animation.play();
        },
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        onLeaveBack: () => {
          animation.pause(0);
        },
      });
    });
  });
  return (
    <div id="domainDescRoot">
      <div className="domainHeading relative p-0 w-fit text-[4rem] underline decoration-red-500 font-bold underline-offset-8 top-[1%]">
        DOMAINS
      </div>

      <div className="domainsDescriptionContent w-full relative flex flex-col">
        <div className="technicalDesc section text-lg domainDescSection w-fit m-10 p-[5%] shadow-2xl bg-[#1f1e1e] rounded-3xl">
          <div className="font-semibold text-2xl mb-10 domainSubHeading underline decoration-[#d97706]">
            Technical
          </div>
          The Technical Domain is a dynamic hub of hands-on learning. We empower
          students to master technical skills in software development, web dev,
          app dev, and ML. Our goal is to provide tools for success in a rapidly
          evolving tech landscape. We offer workshops, hackathons, and
          interactive activities. Learning is experiential and interactive,
          putting skills to the test. Whether you're a tech expert or new to
          technology, join our community dedicated to mastering cutting-edge
          skills. Level up your tech game with us!
        </div>
        <div className="creativesDesc section text-lg domainDescSection w-fit m-10 p-[5%] shadow-2xl bg-[#1f1e1e] rounded-3xl">
          <div className="font-semibold text-2xl mb-10 domainSubHeading underline decoration-[#d97706]">
            Creatives
          </div>
          The Creative Domain is a vibrant hub for artistic expression. We
          nurture creativity and provide a stage for members to showcase talents
          like drawing, photography, or film-making. Everyone has creative
          potential, and we're here to help you unleash your inner artist. We
          offer workshops, contests, and events to push your imagination and
          perfect your craft. Whether you're an artist or exploring your
          creative side, join our passionate community dedicated to elevating
          artistic skills. Unleash your creativity and let your talents shine!
        </div>
        <div className="corporateDesc section text-lg domainDescSection w-fit m-10 p-[5%] shadow-2xl bg-[#1f1e1e] rounded-3xl">
          <div className="font-semibold text-2xl mb-10 domainSubHeading underline decoration-[#d97706]">
            Corporate
          </div>
          The Corporate Domain is a hub of opportunity for professional
          connections and business relationships. Our goal is to establish
          partnerships with valuable resources, funding, and opportunities. We
          believe in the importance of a strong network for personal and
          professional growth. We host networking events, internships, and
          professional development activities to connect members with industry
          leaders, gain insights, and build relationships. The Corporate Domain
          manages social media and keeps the club engaged through events,
          hackathons, and workshops, making it dynamic and exciting.
        </div>
      </div>
    </div>
  );
}

export default DomainsDescription;
