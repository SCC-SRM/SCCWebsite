function About() {
  return (
    <div className="min-h-screen bg-primaryBackground text-white pt-32 space-y-20">
      <div>
        <span className="font-bold text-6xl underline decoration-[#ef4444]">
          About
        </span>
      </div>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img
            className="border-4 border-yellow-500 h-full w-full overflow-hidden rounded-lg max-w-2xl ml-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src="/about3.jpeg"
            alt="about image"
          />
        </div>

        <div className="flex flex-col justify-center lg:w-1/2 lg:ml-4">
          <p className="text-lg mb-4 mt-12 lg:ml-4">
            The Swift Coding Club was founded in 2022 to make coding accessible
            and fun for all. We believe in providing equal opportunities for
            everyone to learn, regardless of background or experience. Our
            diverse membership includes students and professionals who share a
            love of coding and a desire to learn. Experienced mentors and
            instructors support our members in experimenting and creating tools
            using relevant technologies. We organize events and workshops for
            networking, collaboration, and sharing work. Whether you're building
            your portfolio, making friends, or having fun, the Swift Coding Club
            is perfect for you. It provides a community for students to learn
            and develop programming and app development skills. The club
            welcomes all skill levels and was inaugurated at SRM on **XYZ
            date**. We continuously strive to create new growth opportunities
            for our members, helping them excel in their chosen fields. The club
            has experienced significant growth, expanding from X to y members
            (present strength).
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-primaryBackground text-white pt-32 space-y-20">
        <div>
          <span className="font-bold text-6xl underline decoration-[#d97706]">
            HISTORY
          </span>
        </div>

        <div className="flex flex-col justify-center lg:ml-4">
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
              className="lg:mx-auto border-4 border-yellow-500 h-full w-full lg:overflow-hidden rounded-lg max-w-2xl ml-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
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
