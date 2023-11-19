import React from "react";
import Search from "./pages/layouts/Search";
import Tags from "./pages/layouts/Tags";
import Course from "./pages/layouts/Course";
import AllCourses from "./pages/layouts/AllCourses";

const Home = () => {
  return (
    <div>
      <Tags />
      <Search />
      <Course />
      <AllCourses />
    </div>
  );
};

export default Home;
