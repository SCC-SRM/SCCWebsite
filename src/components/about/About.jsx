function About() {
  return (
    <div className="min-h-screen font-body font-light bg-primaryBackground text-white pt-32 space-y-20">
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
            The Swift Coding Club, which was established in 2022, intends to
            democratise coding by promoting inclusion and fun for all. Our broad
            group of members, which includes professionals and students, are all
            passionate about learning and coding. Experienced mentors direct
            tool development and experimentation with pertinent technology. We
            encourage cooperation, idea exchange, and networking through
            seminars and events. The Swift Coding Club offers something for
            everyone, whether it's building resumes, creating relationships, or
            just having fun. With support for all skill levels, it acts as a hub
            for students to build their programming and app development
            abilities. Our club, which was launched at SRM on XYZ date, has
            thrived, going from X to Y members, and it has opened up countless
            prospects for progress.
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
            the students of SRM to join on **XYZ date**. Ever since then, we
            have been striving to create new opportunities for our club members
            to grow in all aspects that would help them become better
            professionals in the various fields they would like to have a career
            in. The club has grown from a group of X no. of people to y no. (the
            present strength) of people.
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
