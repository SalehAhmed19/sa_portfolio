import axios from "axios";
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../../Styles/Heatmap.css";
import { Tooltip } from "react-tooltip";

function Graph() {
  const SecretKey = import.meta.env.VITE_GITHUB_SECRET_TOKEN;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.github.com/users/SalehAhmed19/repos",
        {
          headers: {
            Authorization: `token ${SecretKey}`,
          },
        }
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="my-20">
      <h3 className="font-bold text-2xl">GitHub Heatmap</h3>
      <div className="flex w-[225px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="my-10">
        <CalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date()}
          values={data.map((repo) => ({
            date: new Date(repo.updated_at),
            count: repo.stargazers_count,
            title: `Date: ${new Date(
              repo.updated_at
            ).toLocaleDateString()} Count: ${repo.stargazers_count}`,
          }))}
          data-tip=""
          data-for="heatmap-tooltip"
        />
        <Tooltip id="heatmap-tooltip" />
      </div>
    </div>
  );
}

export default Graph;
