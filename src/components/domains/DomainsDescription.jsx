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
          The Technical Domain is a dynamic hub of innovation and hands-on
          learning. Here, we empower students to master cutting-edge technical
          skills in areas such as software development, web dev, app dev, and
          ML. Our goal is to provide members with hands-on experiences that give
          them the tools to succeed in a rapidly evolving tech landscape. We
          believe that there's no better way to learn than by doing, which is
          why we offer a variety of workshops, hackathons, and other hands-on
          activities. Our approach to learning is hands-on, experiential, and
          highly interactive, so you can put your skills to the test and see the
          immediate results of your efforts. Whether you're a seasoned tech
          expert or just starting to explore the exciting world of technology,
          the Technical Domain is the place to be. Join us and be a part of a
          community of innovative thinkers who are dedicated to mastering
          cutting-edge technical skills and staying ahead of the curve. Get
          ready to level up your tech game!
        </div>
        <div className="creativesDesc section text-lg domainDescSection w-fit m-10 p-[5%] shadow-2xl bg-[#1f1e1e] rounded-3xl">
          <div className="font-semibold text-2xl mb-10 domainSubHeading underline decoration-[#d97706]">
            Creatives
          </div>
          The Creative Domain is a vibrant hub for artistic expression where
          imagination knows no bounds. Here, we nurture creativity and provide a
          stage for members to showcase their incredible talents, such as
          drawing, photography, or film-making. We believe that everyone has the
          potential to be a creative genius, and we're here to help you unleash
          your inner artist. That's why we offer a variety of workshops,
          contests, and events that challenge you to push the limits of your
          imagination and perfect your craft. Whether you're a seasoned artist
          or just starting to explore your creative side, the Creative Domain is
          the place to be. Join us and be a part of a community of passionate
          individuals who are dedicated to elevating their artistic skills to
          the next level. Get ready to unleash your inner creativity and let
          your talents shine!
        </div>
        <div className="corporateDesc section text-lg domainDescSection w-fit m-10 p-[5%] shadow-2xl bg-[#1f1e1e] rounded-3xl">
          <div className="font-semibold text-2xl mb-10 domainSubHeading underline decoration-[#d97706]">
            Corporate
          </div>
          The Corporate Domain is a hub of opportunity, where professional
          connections are forged and business relationships are built. Our goal
          is to establish partnerships with companies and organizations that can
          provide valuable resources, funding, and opportunities for the club
          and its members. We believe that having a strong network of
          professional contacts is an essential aspect of personal and
          professional growth, which is why we host networking events,
          internships, and other professional development activities. These
          opportunities give members the chance to connect with industry
          leaders, build meaningful relationships, and gain valuable insight
          into their fields of interest. In addition to building professional
          relationships, the Corporate Domain also manages the club's social
          media presence, ensuring that the club stays engaged with members and
          the wider student community. Through events, hackathons, and
          workshops, we keep the club buzzing with activity, making it a dynamic
          and exciting place to be.
        </div>
      </div>
    </div>
  );
}

export default DomainsDescription;
