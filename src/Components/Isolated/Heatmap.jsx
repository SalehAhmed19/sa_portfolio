import axios from "axios";
import React, { useEffect, useState } from "react";
// import "../css/submission_calendar.css";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "../../Styles/Heatmap.css";

function Heatmap() {
  const SecretKey = import.meta.env.GITHUB_SECRET_TOKEN;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.github.com/users/SalehAhmed19/repos",
        {
          headers: {
            Authorization: `token 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`,
          },
        }
      );
      console.log(data);
      setData(result.data);
    };

    fetchData();
  }, []);
  // const data = Array.from(Array(count).keys()).map((index) => {
  //   return {
  //     date: dateValues[index],
  //     count: countValues[index],
  //   };
  // });
  // const Data = data.map((index) => {
  //   return {
  //     date: new Date(repo.updated_at),
  //     count: repo.stargazers_count,
  //   };
  // });
  return (
    <div>
      <ReactTooltip />
      <CalendarHeatmap
        startDate={new Date("2021-12-31")}
        endDate={new Date("2023-01-01")}
        values={data.map((repo) => ({
          date: new Date(repo.updated_at),
          count: repo.stargazers_count,
        }))}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date} - ${value.count} contributions`,
          };
        }}
        // classForValue={(value) => {
        //   if (!value) {
        //     return "color-empty";
        //   }
        //   return `${value.count}` < 5
        //     ? `color-github-${value.count}`
        //     : `color-github-5`;
        // }}
        // tooltipDataAttrs={(value) => {
        //   return {
        //     "data-tip": `${value.count} submissions on ${value.date}`,
        //   };
        // }}
        // showWeekdayLabels={false}
      />
    </div>
  );
}

// function shiftDate(date, numDays) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + numDays);
//   return newDate;
// }

export default Heatmap;
