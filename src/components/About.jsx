/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I'm a Web Developer passionate about creating clean, efficient, and
          user-friendly applications. My journey in web development began with a
          fascination for how technology can simplify everyday tasks. Over time,
          I've honed my skills in JavaScript and React, building projects like
          management apps and seamless ordering systems that emphasize intuitive
          design and smooth performance.
        </p>

        <br />

        <p className="text-xl">
          I believe in the power of continuous learning and growth. Every
          project I work on challenges me to think differently and expand my
          abilities, pushing me closer to my goal of becoming a well-rounded
          full-stack developer. I’m not just interested in building functional
          applications; I aim to create solutions that make a real difference in
          the user experience while keeping the code maintainable and optimized.
          <br /> <br />
        </p>
      </div>
    </div>
  );
}

export default About;
