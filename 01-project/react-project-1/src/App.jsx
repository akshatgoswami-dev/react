/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./components/Card";
import jobs from "./components/Job";

const App = () => {
  return (
    <div className="parent">
      {jobs.map(function (elem) {
        return (
          <Card
            key={elem.key}
            brandLogo={elem.brandLogo}
            company={elem.company}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            level={elem.level}
          />
        );
      })}
    </div>
  );
};

export default App;
