import React from "react";

const UserStats = ({ user }) => {
  return (
    <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start  lg:w-1/4 pt-8 md:p-8 sticky-lg ">
      <div className="px-4 md:px-0">
        <img
          src={user?.avatar_url}
          alt={user?.login}
          className={` ${
            user?.type === "User" ? "rounded-full" : "rounded-2xl"
          } bg-cover shadow-lg bg-slate-200 `}
          width={160}
          height={160}
        />
        <p className="mt-6 mb-2">{user?.name}</p>
        <h2 className="text-xl text-blue-500 hover:text-red-500 ">
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-red-500 outline-offset-4"
          >
            {user?.login}
          </a>
        </h2>
        <p className="my-4 bio w-56">{user?.bio}</p>

        <ul className="mt-3 w-56">
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
            <li className="meta-item ">
              <i className="bx bx-link text-blue-500 me-3"></i>
              <span>
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-red-500 outline-offset-4"
                >
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
                  className="focus:outline-red-500 outline-offset-4"
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
                <a
                  href={`mailto:${user.email}`}
                  className="focus:outline-red-500 outline-offset-4"
                >
                  {user.email}
                </a>
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
    </div>
  );
};

export default UserStats;
