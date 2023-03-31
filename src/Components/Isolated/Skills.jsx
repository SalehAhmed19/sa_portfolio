import { LinearProgress, Tooltip } from "@mui/joy";
import React from "react";

const Skills = () => {
  const skills = [
    { _id: 1, name: "React.Js", strength: 85 },
    { _id: 2, name: "Node.Js", strength: 75 },
    { _id: 1, name: "Express.Js", strength: 70 },
    { _id: 1, name: "MongoDB", strength: 70 },
    { _id: 1, name: "MUI", strength: 80 },
    { _id: 1, name: "TailwindCSS", strength: 88 },
    { _id: 1, name: "Bootstrap", strength: 80 },
    { _id: 1, name: "GitHub", strength: 75 },
  ];
  return (
    <div>
      <h3 className="font-bold text-2xl">Skills</h3>
      <div className="flex w-[90px] mb-5">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Tooltip title={skill.strength + "%"} placement="top">
            <div key={skill._id} className="cursor-pointer">
              <h4>{skill.name}</h4>
              <LinearProgress
                variant="soft"
                determinate
                value={skill.strength}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
