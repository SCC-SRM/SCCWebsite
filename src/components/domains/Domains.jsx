import { ReactComponent as TechnicalIcon } from '../../assets/domains_asset/technical.svg'
import { ReactComponent as CreativesIcon } from '../../assets/domains_asset/creatives.svg'
import { ReactComponent as CorporatesIcon } from '../../assets/domains_asset/corporate.svg'
// import description} from './constants/index'



const Domains = () => {
return (
<>
    <div className="   w-full  text-white h-full overflow-x-hidden   bg-[#1d1d1d] ">

           <div className=" xl:max-w-[1280px] w-full mx-auto" >
        <div  >
            <div className="  sm:pt-[260px]   w-full  flex lg:flex-row flex-col  items-center justify-center space-x-10 -ml-[180px]   ">
                <h1 className="  uppercase relative lg:rotate-90 rotate-0   tracking-widest text-[90px]  font-semibold sm:ml-0 ml-[80px]  ">Domains
                    <div className=" hidden lg:flex bg-red-600 rotate-90 w-2 h-[150px] absolute left-[450px] top-[70px]   " />
                </h1>
                <p className=" max-w-5xl  sm:text-2xl text-md text-justify  font-extralight  ">
                    Domains refer to different departments or areas of focus within the club. These domains are
                    responsible for organizing and executing specific projects,
                    activities, and initiatives that align with the club's mission and goals.
                </p>
            </div>

        </div>
        <div className="   sm:mt-[250px] mt-[90px] flex items-center justify-center flex-col lg:flex-row space-x-10 ">
            <TechnicalIcon className="mr-[100px] w-[400px] sm:w-[400px]     " />
            <div className=" max-w-3xl  space-y-12 mrl-[40px]  ">
                <h1 className="uppercase relative  text-5xl text-orangeHeader ">
                    <span>Technical</span>
                    <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
                </h1>

                <p className=" sm:text-lg text-md text-center lg:text-justify  max-w-3xl font-extralight  ">The technical domain focuses on technical skill development and
                    hands-on projects thus making them the backbone of the club. They work on fulfilling the technical
                    aspects involved in a given project. The goal of the technical domain is to provide members with
                    opportunities to learn and apply technical skills, such as software development like web dev, app
                    dev and ML, through workshops, hackathons, and other hands-on activities. It aims to technically
                    strengthen the students by integrating their skills in the various fields of Engineering &
                    Technology, so as to cope up with the highly competitive environment.</p>
            </div>
        </div>

        <div className="   flex items-center justify-center flex-col-reverse lg:flex-row  space-x-10 ">

            <div className="max-w-3xl space-y-10   ">
                <h1 className="uppercase relative text-5xl text-orangeHeader text-left "><span>Creatives</span>
                    <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
                </h1>
                <p className=" sm:text-lg sm:max-w-3xl   text-md text-center lg:text-justify  font-extralight  ">The creative domain focuses on fostering creativity and
                    promoting artistic expression among members. The goal of the creative domain is to provide a
                    platform for members to showcase their talents, such as writing, drawing, photography, or
                    film-making, and to provide opportunities for members to develop their creative skills through
                    workshops, contests, and other events. The creative domain is responsible for organizing and
                    executing creative projects and initiatives within the club.</p>
            </div>
            <CreativesIcon className="mr-[100px] w-[400px]  sm:w-[400px]  "  />
        </div>


        <div className=" -mt-[60px]    flex items-center justify-center flex-col lg:flex-row    space-x-10 ">
            <CorporatesIcon className="mr-[100px] w-[400px]  sm:w-[400px] " />
            <div className="max-w-3xl space-y-10   ">
                <h1 className="uppercase text-5xl relative text-orangeHeader   "><span>Corporate</span>
                    <div className="bg-white absolute -bottom-[100px]   left-[200px]  rotate-90  w-1 h-[180px]  " />
                </h1>
                <p className="sm:text-lg text-md text-center lg:text-justify font-extralight ">The corporate domain in our club focuses on building a
                    professional liaison with the public and potential collaborators. They work on establishing
                    partnerships with companies and organizations building relationships with these entities to secure
                    funding, resources, and opportunities for the club and its members, thus enhancing the clubs
                    reputation and contacts. This can include arranging networking events, internships, and other
                    professional development activities. The domain also manages our social media and work on conducting
                    events, hackathons and workshops to keep the club engaged with the students.</p>
            </div>
        </div>




    </div>

    </div>
</>


)
}

export default Domains