import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "react-calendar-heatmap/dist/styles.css";
import "../../Styles/Heatmap.css";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-reveal";

function Graph() {
  const tooltipRef = useRef();
  return (
    <div className="my-20">
      <h3 className="font-bold text-2xl">GitHub Heatmap</h3>
      <div className="flex w-[225px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <Fade up>
        <div className="my-10">
          <GitHubCalendar
            style={{ margin: "0 auto" }}
            username="SalehAhmed19"
            startDate="2021-12-31"
            endDate={new Date()}
            tooltip={(data) => `${data.date} - ${data.count} contributions`}
            onMouseOver={(data, e) => {
              tooltipRef.current.show(e.target, e);
            }}
            onMouseOut={() => {
              tooltipRef.current.hide();
            }}
          />
          <Tooltip ref={tooltipRef} className="tooltip" />
        </div>
      </Fade>
    </div>
  );
}

export default Graph;
