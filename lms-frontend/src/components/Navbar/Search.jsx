import { useState } from "react";
import "./Navbar.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="Search_phone">
      {" "}
      <input
        type="text"
        placeholder="search for causes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <i className="material-icons" style={{ color: "red", cursor: "pointer" }}>
        search
      </i>
    </div>
  );
};

export default Search;
