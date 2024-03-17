import React from "react";

const UserStats = ({ user }) => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 p-8 md:p-8 sticky-lg ">
      <img
        src={user?.avatar_url}
        alt={user?.login}
        className={` ${
          user?.type === "User" ? "rounded-full" : "rounded-2xl"
        } bg-cover shadow-lg bg-slate-200 `}
        width={160}
        height={160}
      />
      <p className="mt-8 mb-4">{user?.name}</p>
      <h2 className="text-xl text-red-500 ">{user?.login}</h2>
      <p className="my-4 bio">{user?.bio}</p>
      <a
        href={user?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white py-1 px-4 rounded"
      >
        <i className="bx bx-link-external me-3"></i>See on GitHub
      </a>
      <ul className="mt-3">
        {user?.location && (
          <li className="meta-item ">
            <i className="bx bxs-map text-red-600 me-3 "></i>
            <span>{user.location}</span>
          </li>
        )}
        {user?.company && (
          <li className="meta-item">
            <i className="bx bxs-business text-gray-500 me-3"></i>
            <span>{user.company}</span>
          </li>
        )}
        {user?.blog && (
          <li className="meta-item overflow-x-clip">
            <i className="bx bx-link text-blue-500 me-3"></i>
            <span>
              <a href={user.blog} target="_blank" rel="noopener noreferrer">
                {user.blog}
              </a>
            </span>
          </li>
        )}
        {user?.twitter_username && (
          <li className="meta-item">
            <span>
              <i className="bx bxl-twitter text-sky-400 me-2"></i>
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.twitter_username}
              </a>
            </span>
          </li>
        )}
        {user?.email && (
          <li className="meta-item overflow-x-clip">
            <span>
              <i className="bx bxs-envelope text-red-500 me-2"></i>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </span>
          </li>
        )}
      </ul>
      <ul className="list-unstyled">
        <li>
          <span>
            <strong className="me-3">{user?.public_repos} </strong>
          </span>
          Repos
        </li>
        <li>
          <span>
            <strong className="me-3">{user?.following} </strong>
          </span>
          Following
        </li>
        <li>
          <span>
            <strong className="me-3">{user?.followers} </strong>
          </span>
          Followers
        </li>
      </ul>
    </div>
  );
};

export default UserStats;
