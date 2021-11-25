import React from "react";

const Heading = () => {
  return (
    <div className="header">
      <h1 className="title">Photo Search</h1>
      <div className="filters">
        <div className="left">
          <div className="search-form">
            <select name="count">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <input type="search" placeholder="Search here.." />
          </div>
        </div>
        <div className="right">
          <div className="filter-form">
            <select name="color">
              <option value="">Select Color</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value="green">Green</option>
              <option value="teal">teal</option>
              <option value="blue">Blue</option>
            </select>
            <select name="orientation">
              <option value="">Select Orientation</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="squarish">squarish</option>
            </select>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
