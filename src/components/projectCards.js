import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
//import { Link } from 'gatsby'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

// data
const projects = [
    {
      subtitle: "Optimized Donation Form",
      title: "Heifer International",
      tags: "<development>",
      desc: "Front end development with a focus on the optimization of mobile user expereinces.",
      url: "https://www.heifer.org/give/donate-monthly.html",
      img: "../images/heifer.png",
      imgAlt: "Images of Heifer's optimized donation form.",
    },
    {
      subtitle: "Archival Storytelling through Maps",
      title: "Country Music Hall of Fame",
      tags: "<development>",
      desc: "Front end development with a focus on the optimization of mobile user expereinces.",
      url: "https://www.heifer.org/give/donate-monthly.html",
      img: "../images/heifer.png",
      imgAlt: "Images of Heifer's optimized donation form.",
    },
]

const ProjectCards = () => {
  return (
    <div className="projectCards">
        <ul className="projectCards__list">
            {projects.map( (project, index) => (
                <li className="projectCards__list-item"
                    id={"project-card--" + index}
                    key={index}
                    data-sal="fade"
                    data-sal-delay="325"
                    data-sal-easing="ease">
                  <a className="projectCards__card-btn"
                     href={project.url}
                     target="_blank"
                     aria-label="Expand project information." 
                     rel="noreferrer"
                  >
                  </a>
                  <div className="projectCards__card-img-wrapper">
                    <StaticImage className="projectCards__card-img" 
                        src="../images/heifer.png" 
                        alt={project.imgAlt} 
                    />
                  </div>
                  <div className="projectCards__card-copy">
                      <h2 className="projectCards__card-subtitle">{project.subtitle}</h2>
                      <h3 className="projectCards__card-title">{project.title}</h3>
                      <p className="projectCards__card-tags">{project.tags}</p>
                      <p className="projectCards__card-desc">{project.desc}</p>
                      <a className="projectCards__card-link link__primary" 
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                      >
                        View Live
                        <FontAwesomeIcon icon={faAngleRight} />
                      </a>
                  </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCards