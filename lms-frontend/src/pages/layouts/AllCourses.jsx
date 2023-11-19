import React from "react";

const firstBook = {
  img2: "default-2.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const thirdBook = {
  img3: "default-3.jpg",
  title: "FTC Introductory Course(All Levels)",
  describe: "This free French online course introduces...",
};
const forthBook = {
  img4: "default-4.jpg",
  title: "FTC Introductory Course(All Levels)",
  describe: "This free French online course introduces...",
};
const fifthBook = {
  img5: "default-5.jpg",
  title: "FTC One-on-one Coaching(All Levels)",
  describe: "the course is my signature...",
};
const sixthBook = {
  img6: "default-6.jpg",
  title: "FTC One-on-one Coaching(All Levels)",
  describe: "the course is my signature...",
};
const seventhBook = {
  img7: "default-7.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const eighthBook = {
  img8: "default-8.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const ninthBook = {
  img9: "default-9.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const tenthBook = {
  img10: "default-10.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const eleventhBook = {
  img11: "default-11.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const twelfthBook = {
  img12: "default-12.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};
const thirteenthBook = {
  img13: "default-13.jpg",
  title: "FTC Beginner-Expert Courses(A1 C2-Levels)",
  describe: "the course is my signature...",
};

const AllCourses = () => {
  const inlineHeadingStyle = {
    width: "15vw",
    marginLeft: "7px",
    boxSizing: "border-box",
  };
  return (
    <section className="AllCourses">
      <div className="header-image">
        <div className="FlexImg">
          <div className="default2">
            <div className="dropdown">
              <img
                src={firstBook.img2}
                alt={firstBook.title}
                style={inlineHeadingStyle}
              />
              <div className="dropdown-show">
                <p>Last updater Sun, 10-Sep-2023</p>
                <div className="course-title">
                  <a href="/">FTC Beginner-Expert Courses(A1 C2-Levels)"</a>
                </div>
                <div className="course-meta">
                  <span>
                    <i className="fa-solid fa-circle-play"></i>
                    105 Lessons
                  </span>
                  <span>
                    <i className="fa-solid fa-clock"></i>
                    01:10:13 Hours
                  </span>
                  <span>
                    <i className="fa-solid fa-closed-captioning"></i>
                    English
                  </span>
                </div>
                <div className="course-subtitle">
                  This course is my signature step-by-step framework that helps
                  English (and few Francophone) speakers learn French from...
                </div>
                <div className="Learn">
                  <ul>
                    <li>How to start up learning French from scratch</li>
                    <li>How to set up your life to French culture</li>
                    <li>
                      How to learn French sounds and speak like a French person
                    </li>
                    <li>How to form French words and conjugate verbs</li>
                    <li>
                      How to tell the gender of French nouns and adjectives
                    </li>
                    <li>How to construct sentences and rules guiding it</li>
                    <li>How to use sentences to form paragraph and speeches</li>
                    <li>
                      How to give details from French designs, sketches, graphs,
                      drawings, charts and pictures
                    </li>
                    <li>
                      Top 10 Latest courses About Privacy policy Terms &
                      condition Login
                    </li>
                  </ul>
                </div>
                <div className="cart-btn">
                  <button type="button">Add to Cart</button>
                  <button title="add to wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            <h5>{firstBook.title}</h5>
            <p>{firstBook.describe}</p>
          </div>
          <div className="default3">
            <img
              src={thirdBook.img3}
              alt={thirdBook.title}
              style={inlineHeadingStyle}
            />
            <div className="dropdown-show3">
              <p>Last updater Sun, 10-Sep-2023</p>
              <div className="course-title">
                <a href="/">FTC Introductory Course(All Levels)</a>
              </div>
              <div className="course-meta3">
                <span>
                  <i className="fa-solid fa-circle-play"></i>
                  10 Lessons
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i>
                  01:42:20 Hours
                </span>
                <span>
                  <i className="fa-solid fa-closed-captioning"></i>
                  English
                </span>
              </div>
              <div className="course-subtitle">
                This free French online course introduces French learning to
                candidates who want to take TEF Canada exam in less than 2
                hours...
              </div>
              <div className="Learn">
                <ul>
                  <li>Know what to expect in the paid FTC courses</li>
                  <li>Get a glimpse of the TEF exam and its requirements</li>
                  <li>Start learning basic French expressions and greetings</li>
                  <li>
                    Understand the TEF language skill levels in relation to the
                    CLB and NCNC grades
                  </li>
                  <li>
                    Develop your own French learning agenda and begin to see the
                    possibility
                  </li>
                  <li>
                    Make commitments to learn French and take TEF exam in few
                    months’ time
                  </li>
                </ul>
              </div>
              <div className="cart-btn">
                <button type="button">Get Enrolled</button>
                <button title="add to wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
            <h5>{thirdBook.title}</h5>
            <p>{thirdBook.describe}</p>
          </div>
          <div className="default4">
            <img
              src={forthBook.img4}
              style={inlineHeadingStyle}
              alt={forthBook.title}
            />
            <div className="dropdown-show4">
              <p>Last updater Tue, 15-Aug-2023</p>
              <div className="course-title">
                <a href="/">FTC One-on-one Coaching(All Levels)</a>
              </div>
              <div className="course-meta">
                <span>
                  <i className="fa-solid fa-circle-play"></i>0 Lessons
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i>
                  00:00:00 Hours
                </span>
                <span>
                  <i className="fa-solid fa-closed-captioning"></i>
                  French
                </span>
              </div>
              <div className="course-subtitle">
                This is not merely an online course but a private coaching
                session in which I personally teach any candidate the French...
              </div>
              <div className="Learn">
                <ul>
                  <li>How to learn French alone and still speak it</li>
                  <li>The tricks to good TEF exam taking</li>
                  <li>What you need to get your desired scores</li>
                  <li>
                    How to be spontaneous in your speech to show eloquence
                  </li>
                  <li>How to successfully prepare for TEF exam questions</li>
                  <li>Ability to converse in French on daily topics</li>
                  <li>The principles to adhere to for higher TEF grades</li>
                </ul>
              </div>
              <div className="cart-btn">
                <button type="button">Add to Cart</button>
                <button title="add to wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
            <h5>{forthBook.title}</h5>
            <p>{forthBook.describe}</p>
          </div>
          <div className="default5">
            <img
              src={fifthBook.img5}
              style={inlineHeadingStyle}
              alt={fifthBook.title}
            />
            <div className="dropdown-show5">
              <p>Last updater Thu, 03-Aug-2023</p>
              <div className="course-title">
                <a href="/">FTC Materials(A1 Level) </a>
              </div>
              <div className="course-meta">
                <span>
                  <i className="fa-solid fa-circle-play"></i>7 Lessons
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i>
                  00:00:00 Hours
                </span>
                <span>
                  <i className="fa-solid fa-closed-captioning"></i>
                  French
                </span>
              </div>
              <div className="course-subtitle">
                This aspect of the FTC course is mainly for downloads of
                relevant books, materials and various resources required for the
                beginner...
              </div>
              <div className="Learn">
                <ul>
                  <li>Get your 7+ band scores (B2+ points) test results</li>
                </ul>
              </div>
              <div className="cart-btn">
                <button type="button">Add to Cart</button>
                <button title="add to wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
            <div className="course-content">
              <div className="Last_update">Last updater Thu, 03-Aug-2023</div>
              <div className="course-title"></div>
            </div>
            <h5>{fifthBook.title}</h5>
            <p>{fifthBook.describe}</p>
          </div>
          <div className="default6">
            <img
              src={sixthBook.img6}
              style={inlineHeadingStyle}
              alt={sixthBook.title}
            />
            <div className="dropdown-show6">
              <p>Last updater Thu, 03-Aug-2023</p>
              <div className="course-title">
                <a href="/">FTC E-books & Paperbacks</a>
              </div>
              <div className="course-meta">
                <span>
                  <i className="fa-solid fa-circle-play"></i>0 Lessons
                </span>
                <span>
                  <i className="fa-solid fa-clock"></i>
                  00:00:00 Hours
                </span>
                <span>
                  <i className="fa-solid fa-closed-captioning"></i>
                  French
                </span>
              </div>
              <div className="course-subtitle">
                This are a set of four signatory self-published Amazon e-books
                that coaches you in details all the rudiments required to...
              </div>
              <div className="cart-btn">
                <button type="button">Add to Cart</button>
                <button title="add to wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
              <div className="course-content">
                <div className="Last_update">Last updater Thu, 03-Aug-2023</div>
                <div className="course-title"></div>
              </div>
              <h5>{sixthBook.title}</h5>
              <p>{sixthBook.describe}</p>
            </div>
            <div className="icon-slide">
              <i className="material-icons">slide</i>
            </div>
          </div>
          <div className="default7">
            <img
              src={seventhBook.img7}
              style={inlineHeadingStyle}
              alt={seventhBook.title}
            />
            <h5>{seventhBook.title}</h5>
            <p>{seventhBook.describe}</p>
            <h5>{eighthBook.describe7}</h5>
          </div>
          <div className="default8">
            <img
              src={eighthBook.img8}
              style={inlineHeadingStyle}
              alt={eighthBook.title}
            />
            <h5>{eighthBook.title}</h5>
            <p>{eighthBook.describe}</p>
            <h5>{eighthBook.describe8}</h5>
          </div>
          <div className="default9">
            <img
              src={ninthBook.img9}
              style={inlineHeadingStyle}
              alt={ninthBook.title}
            />
            <h5>{ninthBook.title}</h5>
            <p>{ninthBook.describe}</p>
            <h5>{eighthBook.describe9}</h5>
          </div>
          <div className="default10">
            <img
              src={tenthBook.img10}
              style={inlineHeadingStyle}
              alt={tenthBook.title}
            />
            <h5>{tenthBook.title}</h5>
          </div>
          <div className="default11">
            <img
              src={eleventhBook.img11}
              style={inlineHeadingStyle}
              alt={eleventhBook.title}
            />
            <h5>{eleventhBook.title}</h5>
            <p>{eleventhBook.describe}</p>
          </div>
          <div className="default12">
            <img
              src={twelfthBook.img12}
              style={inlineHeadingStyle}
              alt={twelfthBook.title}
            />
            <h5>{twelfthBook.title}</h5>
            <p>{twelfthBook.describe}</p>
          </div>
          <div className="default13">
            <img
              src={thirteenthBook.img13}
              style={inlineHeadingStyle}
              alt={thirteenthBook.title}
            />
            <h5>{thirteenthBook.title}</h5>
            <p>{thirteenthBook.describe}</p>
          </div>
          <div className="icon-slide">
            <i className="material-icons">slide</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
