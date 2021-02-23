import React, { forwardRef } from "react";
// import PropTypes from "prop-types";
import "./Content.scss";

const Content = ({ scrollToabout }, ref) => {
  const teams_data = [
    "tottenham",
    "arsenal",
    "man utd",
    "liverpool",
    "chelsea",
    "west ham"
  ];

  const [teams, setTeams] = React.useState(teams_data);
  const [search, setSearch] = React.useState("");

  return (
    <div className="Content">
      <input
        onChange={(e) => {
          const test = teams_data.filter((team) => {
            return team.toLowerCase().includes(e.target.value.toLowerCase());
          });
          console.log("test: ", test);

          // uncomment line below and teams is logged as I want
          setTeams(test);
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
      />

      {teams.map((team) => (
        <p>{team}</p>
      ))}
      <p ref={ref}>20</p>
    </div>
  );
};

Content.propTypes = {};

export default forwardRef(Content);
