import React from "react";

function Course() {
  return (
    <div>
      <div class="header">
        <div class="header-left">
          <a href="/home" class="logo">
            <img src="assets/images/logo-icon.png" alt="Logo" />
          </a>
          <a href="index.html" class="logo logo-small">
            <img
              src="assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>

        <div class="top-nav-search">
          <form>
            <input type="text" class="form-control" placeholder="Search here" />
            <button class="btn" type="submit">
              <i class="flaticon-magnifying-glass"></i>
            </button>
          </form>
        </div>
        
      </div>
      <div class="sidebars" id="sidebars">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">
                <span>Dashboard</span>
              </li>

              <li class="submenu">
                <a href="/List">
                  <i class="fas fa-graduation-cap"></i> <span> Students</span>
                </a>
              </li>

              <li class="submenu">
                <a href="/Courses">
                  <i class="fas fa-book-reader"></i> <span>courses</span>
                </a>
              </li>

              <li>
                <a href="/profile">
                  <i class="fas fa-cog"></i> <span>Settings</span>
                </a>
              </li>
              <li class="menu-title">
                <span>Authentication</span>
              </li>

              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>logout</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-logout"></i>
                  <span>Registration</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <div class="page-sub-header">
                  <h3 class="page-title"></h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/AfterEnroll">
                      Data Science and Machine Learning with Python 
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      
                      <i class="icofont-read-book"></i> 29 Lectures
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-courses">
                <div class="courses-images">
                  <a href="/courses-details">
                    <img
                      src="assets/images/courses/courses-08.jpg"
                      alt="Courses"
                    />
                  </a>
                </div>
                <div class="courses-content">
                  <div class="courses-author">
                    <div class="author">
                      <div class="author-thumb">
                        <a href="#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div class="author-name">
                        <a class="name" href="#">
                          Jason Williams
                        </a>
                      </div>
                    </div>
                    <div class="tag">
                      <a href="#">Science</a>
                    </div>
                  </div>
                  <h4 class="title">
                    <a href="/courses-details">
                      Data Science and Machine Learning with Python - Hands On!
                    </a>
                  </h4>
                  <div class="courses-meta">
                    <span>
                      {" "}
                      <i class="icofont-clock-time"></i> 08 hr 15 mins
                    </span>
                    <span>
                      {" "}
                      <i class="icofont-read-book"></i> 29 Lectures{" "}
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  );
}

export default Course;
