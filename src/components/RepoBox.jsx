import React from "react";

export default function RepoBox({ repo, onSelectRepo }) {
  const handleRepoClick = () => {
    onSelectRepo(repo);
  };

  return (
    <article
      className="repo-card m-6 bg-gray-200 border border-gray-300 rounded-md cursor-pointer shadow-lg relative"
      onClick={handleRepoClick}
    >
      <div className="card-body p-3 md:px-4">
        <h3
          // href={repo?.html_url}
          className="block text-blue-500 "
        >
          {repo.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-gray-700">{repo?.description}</p>
      </div>
      <div className="absolute left-0 right-0 bottom-0 bg-gray-100 rounded-md flex gap-4 p-3">
        {repo.language && (
          <div className="">
            <i className="bx bx-code-alt text-red-500 me-2"></i>
            <small> {repo?.language}</small>
          </div>
        )}
        <div className="">
          <i className="bx bxs-star text-yellow-400 me-2"></i>
          {repo?.stargazers_count}
        </div>
        <div className="">
          <i className="bx bx-git-repo-forked text-green-600 me-2"></i>
          {repo?.forks}
        </div>
      </div>
    </article>
  );
}
