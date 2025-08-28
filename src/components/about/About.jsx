function About() {
  return (
    <div
      className="min-h-screen font-body font-light bg-primaryBackground text-white pt-32 space-y-20"
      id="about"
    >
      <div>
        <div class="relative">
          <span class="font-bold text-6xl">ABOUT</span>
          <span class="font-bold outline-heading text-6xl absolute left-2 ">
            ABOUT
          </span>
          <div className="bg-[#ef4444] h-2 w-24 mr-auto ml-40 mt-2"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img
            className="h-full w-full overflow-hidden rounded-sm max-w-2xl ml-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src="/about3.jpeg"
            alt="about image"
          />
        </div>

        <div className="flex flex-col justify-center text-justify lg:w-1/2 lg:ml-4">
          <p className="text-lg mb-4 mt-12 mr-16 lg:ml-4">
            The Swift Coding Club aims to make coding more accessible and
            enjoyable for everyone. Our diverse membership includes both
            professionals and students who share a passion for learning and
            coding. Experienced mentors lead the development of tools and
            explore relevant technologies. We promote collaboration, idea
            sharing, and networking through seminars and events. Whether you're
            looking to enhance your resume, build connections, or simply have a
            good time, the Swift Coding Club offers something for everyone. With
            support for all skill levels, it serves as a central hub for
            students to develop their programming and app development skills.
            Since its launch at SRM on 19 May 2023, our club has flourished,
            growing from 15 to 105 members and creating numerous opportunities
            for advancement.
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-primaryBackground text-white pt-32 space-y-20">
        <div class="relative">
          <span class="font-bold text-6xl">HISTORY</span>
          <span class="font-bold outline-heading text-6xl absolute left-2">
            HISTORY
          </span>
          <div className="bg-[#ef4444] h-2 w-24 mr-auto ml-60 mt-2"></div>
        </div>

        <div className="flex flex-col justify-center text-justify lg:ml-4">
          <p className="text-lg">
            The club was created with the goal of providing students with a
            community where they can learn and develop their skills in
            programming and app development. The club is open to students of all
            skill levels, from those who are just starting out to those who have
            been coding for years. The club was inaugurated and was made open to
            the students of SRM to join on 19th May 2022. Ever since then, we
            have been striving to create new opportunities for our club members
            to grow in all aspects that would help them become better
            professionals in the various fields they would like to have a career
            in. The club has grown from a group of 14 to a splendid number of
            105 iOS enthusiasts.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-1/2">
            <img
              className="lg:mx-auto h-full w-full lg:overflow-hidden rounded-sm max-w-2xl ml-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src="/about2.jpeg"
              alt="history image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
