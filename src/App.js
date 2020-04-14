import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
        {filters.length > 0 &&
          filters.map((filter) => (
            <span
              onClick={() => handleFilterClick(filter)}
              className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0"
            >
              {filter}
            </span>
          ))}
      </div>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
    </div>
  );
}

export default App;

// TODOS
// 1. Study the desing & json ✅
// 2. Create the Job Board Component ✅
// 3. Get the data from the JSON ✅
// 4. Pass down the date to the JBC ✅
// 5.a. Style desktop ✅
// 5.b. Style mobile
// 6. Filter component
// 7. Filter the data
