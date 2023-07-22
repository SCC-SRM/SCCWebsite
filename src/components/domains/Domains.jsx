import { ReactComponent as TechnicalIcon } from "../../assets/domains_asset/technical.svg";
import { ReactComponent as CreativesIcon } from "../../assets/domains_asset/creatives.svg";
import { ReactComponent as CorporatesIcon } from "../../assets/domains_asset/corporate.svg";
import { useLayoutEffect } from "react";

const Domains = () => {
  return (
    <div className="min-h-screen flex flex-col px-2 sm:px-2 lg:px-20 pt-32 bg-primaryBackground text-white">
      <div className="text-white min-h-screen overflow-x-hidden bg-primaryBackground">
        <div className="sm:pb-14 ">
          <div className="sm:pt-[200px]  flex md:flex-row flex-col  items-center justify-center space-x-10 pr-8 sm:pr-8 lg:pr-[80px]">
            <h1 className="  uppercase relative md:rotate-90 rotate-0    tracking-widest text-6xl sm:text-6xl lg:text-[100px]  font-semibold">
              Domains
              <div className=" bg-red-600 rotate-90 w-2 h-[150px] absolute left-[260px] top-[4px] lg:left-[470px] lg:top-[35px]  " />
            </h1>
            <p className=" max-w-5xl  sm:text-lg text-lg lg:text-3xl  font-extralight pt-10 text-justify ">
              Domains refer to different departments or areas of focus within
              the club. These domains are responsible for organizing and
              executing specific projects, activities, and initiatives that
              align with the club's mission and goals.
            </p>
          </div>
        </div>

        <div className=" sm:mt-[200px] mt-[90px]  flex items-center justify-center flex-col-reverse sm:flex-row  space-x-10 ">
          <TechnicalIcon className="pr-10 sm:pr-10 lg:pr-[100px] w-[400px] sm:w-[600px]   " />
          <div className="max-w-3xl space-y-10   ">
            <h1 className="uppercase relative text-5xl text-orangeHeader  ml-10">
              <span className="">Technical</span>
              <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
            </h1>
            <p className=" sm:max-w-3xl  text-lg sm:text-lg lg:text-2xl  font-extralight text-justify px-10 sm:px-10 ">
              The technical domain focuses on technical skill development and
              hands-on projects thus making them the backbone of the club. They
              work on fulfilling the technical aspects involved in a given
              project. The goal of the technical domain is to provide members
              with opportunities to learn and apply technical skills, such as
              software development like web dev, app dev and ML, through
              workshops, hackathons, and other hands-on activities. It aims to
              technically strengthen the students by integrating their skills in
              the various fields of Engineering & Technology, so as to cope up
              with the highly competitive environment.
            </p>
          </div>
        </div>

        <div className="   flex items-center justify-center flex-col sm:flex-row  space-x-10 ">
          <div className="max-w-3xl space-y-10   ">
            <h1 className="uppercase relative text-5xl text-orangeHeader  ml-10">
              <span className="">Creatives</span>
              <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
            </h1>
            <p className=" sm:max-w-3xl  text-lg sm:text-lg lg:text-2xl  font-extralight text-justify px-10 sm:px-10  ">
              The creative domain focuses on fostering creativity and promoting
              artistic expression among members. The goal of the creative domain
              is to provide a platform for members to showcase their talents,
              such as writing, drawing, photography, or film-making, and to
              provide opportunities for members to develop their creative skills
              through workshops, contests, and other events. The creative domain
              is responsible for organizing and executing creative projects and
              initiatives within the club.
            </p>
          </div>

          <CreativesIcon className="pr-10 sm:pr-10 lg:pr-[100px] w-[400px] sm:w-[600px]   " />
        </div>

        <div className=" flex items-center justify-center flex-col md:flex-row    space-x-10 ">
          <div className="  flex items-center justify-center flex-col-reverse sm:flex-row  space-x-10 ">
            <CorporatesIcon className="pr-10 sm:pr-10 lg:pr-[100px] w-[400px] sm:w-[600px]   " />
            <div className="max-w-3xl space-y-10   ">
              <h1 className="uppercase relative text-5xl text-orangeHeader  ml-10">
                <span className="">Corporate</span>
                <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
              </h1>
              <p className=" sm:max-w-3xl  text-lg sm:text-lg lg:text-2xl  font-extralight text-justify px-10 sm:px-10  ">
                The corporate domain in our club focuses on building a
                professional liaison with the public and potential
                collaborators. They work on establishing partnerships with
                companies and organizations building relationships with these
                entities to secure funding, resources, and opportunities for the
                club and its members, thus enhancing the clubs reputation and
                contacts. This can include arranging networking events,
                internships, and other professional development activities. The
                domain also manages our social media and work on conducting
                events, hackathons and workshops to keep the club engaged with
                the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
