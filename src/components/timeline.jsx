import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                 <span className="heading-meta"></span> 
                <h2 className="colorlib-heading animate-box">Internships</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technology Intern at PolicyBazaar.com<span> May 2019 - July 2019</span></h2>
                        <p>Worked as a React Developer in AI and Data Science team where I was responsible for building modules for their upcoming revamped Web Portal.
                            Designed OCR module from scratch in React and Integrated with REST API which processes image to text.
                            Worked on the existing elastic search module where I used Kibana(AWS) queries for filtering the data according to the keywords.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Teaching Assistant at Coding Ninjas<span> Oct 2018 - Jan 2019</span></h2>
                        <p>Responsible for mentoring Engineering students throughout their Course of Data Structures and Algorithms. Conducted 2 hour online doubt session daily. Taught and prepared around 100 students for facing competitive coding interviews.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                       <div className="timeline-label">
                        <h2>Front End Developer Intern - Diverse Infotech Pvt Ltd. <span> Dec 2018 - Jan 2019</span></h2>
                        <p>Developed CRUD(create , read , update , delete) Apps in Angular 4.0
                        and used firebase to demonstrate working of app..</p> 
                      </div> 
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
