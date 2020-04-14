import React from "react";

export default function JobBoardComponent({ job }) {
  const langAdnTools = [];

  if (job.tools) {
    langAdnTools.push(...job.tools);
  }

  if (job.languages) {
    langAdnTools.push(...job.languages);
  }

  return (
    <div className="flex bg-white shadow-md m-4 p-6">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-xl text-teal-500">{job.company}</h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} &middot; {job.contract} &middot; {job.location}
        </p>
      </div>
      <div className=" flex items-center ml-auto">
        {langAdnTools
          ? langAdnTools.map((langAndTool) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {langAndTool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}
