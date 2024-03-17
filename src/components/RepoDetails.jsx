import React, { useEffect, useState } from "react";

const RepoDetails = ({ repo, onBack }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = async () => {
    try {
      const response = await fetch(`${repo.commits_url.replace("{/sha}", "")}`);
      if (response.ok) {
        const data = await response.json();
        setCommits(data);
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(repo.clone_url);
    setCopyMessageVisible(true);
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 2000);
  };

  return (
    <div className="relative pt-12 h-full pb-8">
      <button
        onClick={onBack}
        className="absolute top-4 right-4 hover:text-red-500"
      >
        Back
      </button>
      <h2 className="text-center text-blue-500 capitalize mb-6 text-2xl ">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          {repo.name}
        </a>
      </h2>
      <button className="my-2 hover:text-red-500" onClick={copyToClipboard}>
        {copyMessageVisible ? (
          <span className="text-green-500">Copied!</span>
        ) : (
          <span>
            <i className="bx bx-copy me-2"></i> Copy Clone Url
          </span>
        )}
      </button>
      {repo.homepage && (
        <p className="cursor-pointer text-blue-500 mb-2">
          <i className="bx bx-globe me-2"></i>
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            Homepage
          </a>
        </p>
      )}
      <p className="mb-2 text-gray-500">
        Last Updated on : {commits[0]?.commit?.committer.date.slice(0, 10)}
      </p>
      <p>{repo.description}</p>
      <h3 className="font-semibold my-3">Commit History : </h3>
      {loading ? (
        <p className="text-center pt-20">Loading commits...</p>
      ) : commits.length == 0 ? (
        <p className="text-center pt-20">This repository has no commits yet.</p>
      ) : (
        <>
          <ul>
            {commits.map((commit) => (
              <li key={commit.sha} className="mb-2 flex">
                <i className="bx bx-git-commit h-6 w-6 text-green-500 bg-zinc-200 me-2 p-1 rounded-full"></i>
                {commit.commit.message}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RepoDetails;
