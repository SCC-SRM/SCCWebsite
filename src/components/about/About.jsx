function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-primaryBackground text-white pt-32 space-y-20">
      <div>
        <span className="font-bold text-6xl text-underline-offset: 8px underline decoration-[#ef4444] ">
          About
        </span>
      </div>
      <div className="flex">
        <p className="text-lg mr-2">
          The Swift Coding Club was founded in 2022 with the goal of making
          coding accessible and fun for everyone. We believe that everyone
          should have the opportunity to learn how to code, regardless of their
          background or experience level. Our members come from all walks of
          life and range from students to professionals, but what they all share
          is a love of coding and a desire to learn more. Our team of
          experienced mentors and instructors provide support, guidance, and
          feedback to help our members reach their goals with an environment to
          experiment and create great tools using technologies relevant in
          today’s world. We also organize regular events and workshops, where
          members can network, collaborate, and share their work. Whether you're
          looking to build your portfolio, make new friends, or just have fun,
          the Swift Coding Club is the perfect place for you. The club was
          created with the goal of providing students with a community where
          they can learn and develop their skills in programming and app
          development. The club is open to students of all skill levels, from
          those who are just starting out to those who have been coding for
          years. The club was inaugurated and was made open to the students of
          SRM to join on **XYZ date**. Ever since then we have been striving to
          create new opportunities for our club members to grow in all aspects
          that would help them become better professionals in the various fields
          they would like to have a career in The club has grown from a group of
          X no. of people to y no.(the present strength) of people
        </p>
        {/* <img src="public/about3.jpeg"></img> */}
        <figure className="relative max-w-7xl ">
          <img
            className="rounded-lg max-w-2xl ml-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src="/about3.jpeg"
            alt="about image"></img>
        </figure>
      </div>
      <div className="min-h-full bg-primaryBackground text-white px-20 py-16 space-y-20">
        <div>
          <span className="font-bold text-6xl text-underline-offset: 8px underline decoration-[#d97706] ">
            HISTORY
          </span>
        </div>
        <div>
          <p className="text-lg">
            The club was created with the goal of providing students with a
            community where they can learn and develop their skills in
            programming and app development. The club is open to students of all
            skill levels, from those who are just starting out to those who have
            been coding for years.
          </p>
          <p className="mt-2 text-lg">
            The club was inaugurated and was made open to the students of SRM to
            join on **XYZ date**. Ever since then we have been striving to
            create new opportunities for our club members to grow in all aspects
            that would help them become better professionals in the various
            fields they would like to have a career in The club has grown from a
            group of X no. of people to y no.(the present strength) of people
          </p>
          <figure className="relative max-w-7xl cursor-pointer filter ">
            <img
              className="rounded-lg max-w-2xl ml-64 mt-5  transition-all duration-300 grayscale hover:grayscale-0"
              src="/about2.jpeg"
              alt="history image"></img>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
