import React from "react";

const Course = () => {
  return (
    <section className="Course">
      <div className="learn">
        <div className="bullseye">
          <i className="fa-solid fa-bullseye"></i>
        </div>
        <div className="Text">
          <h4>29 Online courses</h4>
          <p>Explore a variety of fresh topics</p>
        </div>
        <div className="check">
          <div className="checkLearn">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="Text2">
            <h4>Expert instruction </h4>
            <p>Find the right course for you</p>
          </div>
        </div>
        <div className="clock">
          <div className="clockLearn">
            <i class="fa-solid fa-clock" color="#f0f2f4"></i>
          </div>
          <div className="Text3">
            <h4>Lifetime access </h4> 
            <p>Learn on your schedule</p>
          </div>
        </div>
      </div>
      <div className="images">
        <h2>Top courses</h2>
      </div>
    </section>
  );
};

export default Course;
