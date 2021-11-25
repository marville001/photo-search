import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchImagesAction } from "../redux/actions/imagesSearch";
import _ from "lodash";
const Header = () => {
  const [count, setCount] = useState(10);
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("");
  const [orientation, setOrientation] = useState("");

  const dispatch = useDispatch();
  
  let search = () => {
    let params = {};
    if (query !== "") {params.query = query;}
    if (color !== "") {params.color = color;}
    if (count !== "") {params.count = count;}
    if (orientation !== "") {params.orientation = orientation;}
    dispatch(searchImagesAction(params));
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
    
    let params = {};
    params.count = e.target.value;    
    if (query !== "") {params.query = query;}
    if (color !== "") {params.color = color;}
    if (orientation !== "") {params.orientation = orientation;}
    
    dispatch(searchImagesAction(params));
  };

  const debouncedSearch = useCallback(
    _.debounce((value, countValue) => dispatch(searchImagesAction({count: countValue, query:value})), 500),
    []
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value, count);
  };

  const handleFilter = (e) => {
    search();
  };

  return (
    <div className="header">
      <h1 className="title">Photo Search</h1>
      <div className="filters">
        <div className="left">
          <div className="search-form">
            <select onChange={handleCountChange} value={count} name="count">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <input
              value={query}
              onChange={handleSearch}
              type="search"
              placeholder="Search here.."
            />
          </div>
        </div>
        <div className="right">
          <div className="filter-form">
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              name="color"
            >
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
            <select
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
              name="orientation"
            >
              <option value="">Select Orientation</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="squarish">squarish</option>
            </select>
            <button className="apply-btn" onClick={handleFilter}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
