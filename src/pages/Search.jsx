import React, { useEffect, useState } from "react";
import RepoBox from "../components/RepoBox";
import UserStats from "../components/UserStats";
import RepoDetails from "../components/RepoDetails";

const Search = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("yogeshb-27");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const validate = () => {
    console.log(search);
    if (search.trim() == "") {
      return setError("Please Enter Username");
    }
    fetchUser();
    setSearch("");
  };

  const fetchUser = async () => {
    try {
      setError("");
      setLoading(true);
      setSelectedRepo(null);
      const response = await fetch(`https://api.github.com/users/${search}`);
      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
        fetchRepos();
        setSearch("");
      } else {
        const errorData = await response.json();
        if (
          response.status === 403 &&
          errorData.message.includes("rate limit exceeded")
        ) {
          setError("API rate limit exceeded. Please try again later.");
        } else {
          setError("User not found");
          setUser(null);
        }
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Error fetching user");
      setUser(null);
      setRepos([]);
    }
    setLoading(false);
  };

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${search}/repos`
      );
      if (response.ok) {
        const data = await response.json();
        setRepos(data);
      } else {
        setError("Error fetching repositories");
        setRepos([]);
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setError("Error fetching repositories");
      setRepos([]);
    }
  };

  const handleSelectRepo = (repo) => {
    setSelectedRepo(repo);
  };

  const handleClearSelectedRepo = () => {
    setSelectedRepo(null);
  };
  if (loading) {
    return (
      <p className="text-center text-gray-700 pt-16 mt-16">Loading ... </p>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center px-2 search">
        <input
          type="text"
          placeholder="Search Username ..."
          value={search}
          className="p-1 ps-4 rounded mt-8"
          autoCorrect="false"
          autoFocus
          onChange={(e) => setSearch(e.target.value.trim())}
          onKeyDown={(e) => e.key === "Enter" && validate()}
        />
      </div>

      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      {user && (
        <main className="flex items-start flex-col sm:flex-row">
          <UserStats user={user} />
          <div className="w-full sm:w-2/3 lg:w-3/4 py-5 lg:mt-8 mb-12">
            {selectedRepo ? (
              <RepoDetails
                repo={selectedRepo}
                onBack={handleClearSelectedRepo}
              />
            ) : !repos || (repos.length === 0 && !loading) ? (
              <p className="text-center mt-24">
                No repositories found for this user.
              </p>
            ) : (
              <div className="w-full grid  grid-cols-1 lg:grid-cols-2 ">
                {repos.map((repo, index) => (
                  <RepoBox
                    key={index}
                    repo={repo}
                    onSelectRepo={handleSelectRepo}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default Search;
