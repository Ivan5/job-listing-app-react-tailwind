import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
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
// 5. Style it ✅
// 6. Filter component
// 7. Filter the data
