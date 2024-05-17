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
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Member of Technical Staff, Salesforce.com, Hyderabad<span> Feb 2021 - Present</span></h2>
                        <p>
                            Worked on Slack Integration with salesforce for financial services cloud.
                                One of the first slack app in Salesforce after Slack was acquired. Our integration handles safe and secure authentication of salesforce with slack user. After authentication, user can access data from salesforce org from slack.                
                        <br/>
                        Developed a no-code/Low-Code framework for customers which lets users to integrate an external service with salesforce. 
                          It reduced time for configuring an external service drastically.
                        <br/>
                        Integration of Salesforce with CRMA Apis for Revenue Intelligence in financial services.
                        </p>
                      </div>
                    </div>
                  </article> 
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Trainee at Haldor Topsoe, India (Faridabad) <span> April 2020 - Nov 2020</span></h2>
                        <p>
                        Built an in-house IT tool for one of their mechanical teams which helps to find out the hazardous materials in the chemical factory. Reduced the effort for Mechanical Engineers as they need to run the rules manually on the data to find whether the material to be installed in the factory is hazardous or not.
                        </p>
                      </div>
                    </div>
                  </article>
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
