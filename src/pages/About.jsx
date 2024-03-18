import React from "react";

const About = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 mt-16 pb-24 container mx-auto">
      <h2 className="font-sans text-2xl md:text-3xl text-center my-12">
        <span className="font-sans text-red-500 ">GitScout </span>: GitHub User
        Search Website
      </h2>
      <h3 className="text-xl md:text-2xl mb-4">Description:</h3>
      <p>
        GitScout is a web application designed to simplify the process of
        finding GitHub users. With a user-friendly interface, GitScout enables
        users to search for GitHub users effortlessly, providing quick access to
        their profiles, repositories, and other relevant information.
      </p>
      <h3 className="text-xl md:text-2xl my-4">Technology Stack:</h3>

      <ul>
        <li>
          Frontend: Built with React.js to create a dynamic and responsive user
          interface.
        </li>
        <li>
          API Integration: Interacts with the GitHub API to retrieve user data
          and repositories.
        </li>
        <li>Styling: Styled using Tailwind for UI components.</li>
      </ul>
    </div>
  );
};

export default About;
