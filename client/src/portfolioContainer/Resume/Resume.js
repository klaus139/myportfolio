import React, {useState, useEffect } from "react";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 92 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Ecommerce Website https://www.klamark.adaptable.app",
      duration: { fromDate: "2022"},
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Next Js, stripe, sanity.io",
    },
    {
      title: "Goal App https://www.goalapp.adaptable.app",
      duration: { fromDate: "2022", },
      description:
        "A simple MERN application that performs CRUD operations",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS.",
    },
    {
      title: "Simple Chat App https://www.klaus-chat-app.adaptable.app",
      duration: { fromDate: "2022", },
      description:
        "A simple chat app that allows users to send and receive messages",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, socket.io, Node JS.",
    },
    
    {
      title: "Personal Portfolio Website hosted at https://www.nicholasportfolio.adaptable.app",
      duration: { fromDate: "2022", toDate: "2022"},
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, Javascript, HTML, CSS",
    },
    {
      title: "Content management system",
      duration: { fromDate: "2021" },
      description:
        "A Content management system to manage the content of the website.",
      subHeading:
        "Technologies Used:  Pyhton, Django, Javascript, HTML, CSS, Bootstrap",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Benin, Nigeria"}
        subHeading={"BACHELOR OF SCIENCE MICROBIOLOGY"}
        fromDate={"2011"}
        toDate={"2015"}
      />

      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"IIFE TOWN. Uyo Akwa Ibom State"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Notre Dame Secondary School"}
        fromDate={"2002"}
        toDate={"2008"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <div className="experience-container">
        <ResumeHeading
          heading={"Outreachy"}
          subHeading={"Open source contributor"}
          fromDate={"2022"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Contribiuted in Open source projects for companies like Oppia.io and publiclab.org
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            refactored obselete code base to standard 
          </span>
          <br />
          <span className="resume-description-text">
            - Translated 316 cards of mathematical expressions for oppia.io from English to Nigerian Pidgin
          </span>
          <br />
        </div>
      </div>
        <ResumeHeading
          heading={"Decagon"}
          subHeading={"Associate Software Developer"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a NODEjs developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Worked with a team to built the swift riders project
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Ingressive 4 good ZuriTeam"}
          subHeading={"Software devloper Intern"}
          fromDate={"2022"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Learnt the fundamentals of web development and python programming.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            worked with a team that built a content management system called the optimus project
          </span>
          <br />
          <span className="resume-description-text">
            --integrated backend functionality for a blog model using python django
          </span>
          <br />
          <span className="resume-description-text">
            - performed unit and integration test.
            
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container "
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;