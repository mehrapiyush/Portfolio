import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" doata-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/IMG_0016.JPG)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Piyush Mehra</a></h1>
              <span className="email"><i className="icon-mail"></i> mehrapiyush1271@gmail.com</span>
              {/* <p><a className="btn btn-primary" style={{marginTop:"10px"}} href="https://drive.google.com/file/d/1xj2JWSF-A6kzvnZbRhybdb_MZPReqI-P/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume<i className="icon-download4" /></a></p> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  {/* <li><a href="#about" data-nav-section="about">About</a></li> */}
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                   <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#Education" data-nav-section="Education">Education</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://drive.google.com/file/d/1xj2JWSF-A6kzvnZbRhybdb_MZPReqI-P/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><i className="icon-download4"></i></a></li>
                <li><a href="https://www.facebook.com/piyush.mehra.52035" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.linkedin.com/in/piyush-mehra-813416bb/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/mehrapiyush" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
