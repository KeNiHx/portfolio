import React, {Component } from 'react'

export default class About extends Component {
    render(){
        return(
            <div>
            <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Us</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>I am a recent graduate from Mount Royal University, I have lots of professional work experience in both technical and business roles. </p>
                        <p> I am super interested in all things technology may it be new smartphones or new technological discoveries.  As an individual I love learning new things, and meeting new people!  </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="colorlib-projects" data-section="projects">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What have I done?</span>
                    <h2 className="colorlib-heading">Here are some of my projects</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-code" />
                    </span>
                    <div className="desc">
                    <h3>Portfolio Website</h3>
                        <div class="portfolioImg"><img src="#" alt="portfolioWebsite" /></div>  
                        <p>As coming from the Bachelors of Computer Information Systems background, I wanted to create a portfolio website.</p>
                        <form action="#">
                        <button type="submit" class="viewPortfolioBtn">View Demo</button>
                        </form>                        
                        <form action="https://github.com/KeNiHx/portfolio">
                        <button type="submit" class="viewPortfolioSCBtn">View Souce Code</button>
                        </form>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                    <h3>Spotify Clone </h3>
                        <div class="spotifyImg"> <img src="" alt="spotifyClone"/></div>
                       
                        <p>I use Spotify pretty much all the time, I wanted to learn how to build one from scratch using JavaScript,PHP,HTML,CSS, and MySQL</p>
                        <form action="#">
                        <button class="viewSpotifyCloneBtn">View Demo</button> 
                        </form>
                        <form action="https://github.com/KeNiHx/MU">
                        <button type="submit" class="viewSpotifyCloneSCBtn">View Souce Code</button>
                        </form>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Activity Tracker</h3>
                        <div class="activityTrackerImg"><img src="" alt="activityTracker"/></div>
                        
                        <p>Through my school projects I haven created as a project an activity tracker using Swift and some iOS libraries.</p>
                        <form action="#">
                        <button type="submit" class="viewActivityTrackerBtn">View Demo</button>
                        </form>
                        <form action="#">
                        <button class="viewActivityTrackerSCBtn">View Souce Code</button>
                        </form>
                         
                    </div>
                    </div>
                </div></div>
        </div>
        </section>
      </div>
    )
  }
}












