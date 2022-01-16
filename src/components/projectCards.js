import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import HeiferImage from "../images/heifer.png"
import PernImage from "../images/pern.png"
import BlogImage from "../images/great-blog.png"
//import CmhfImage from "../images/cmhf.png"

// data
const projects = [
    {
        key: 'heifer',
        subtitle: "Mobile Optimized Donation Form",
        title: "Heifer International",
        tags: "<development>",
        desc: "An intensive and cross-team collaborative project with a focus on the optimization of mobile user experiences. I was the primary front end developer for this work, which was javascript and functionality heavy. I also contributed to gift catalog improvements alongside other tasks for this client. Heifer International is on a mission to end hunger and poverty in a sustainable way by supporting and investing alongside local farmers and their communities.",
        url: "https://www.heifer.org/give/donate-monthly.html",
        cta: {
            title: "Read About the Impact",
            url: "https://lifeblue.com/impact-by-design-building-a-better-online-donation-experience/"
        },
        img: HeiferImage,
        imgAlt: "Three mobile interface images of Heifer's optimized donation form.",
    },
    /*{
        key: 'cmhf',
        subtitle: "Archival Storytelling with Maps",
        title: "Country Music Hall of Fame",
        tags: "<development>",
        desc: "A media heavy, one page application made for Country Music Hall of Fame. This experience is intended to interactively present the vast, digital archive of Country Music History that lives on Music Row in Nashville, TN. I used Mapbox GL JS for map software, and put in great efforts for performance optimization as is required for such a media and javascript heavy single page site. I was the lead front end developer for the entirety of this project. Music Row launched on New Years, 2022.",
        url: "https://musicrow.countrymusichalloffame.org/",
        cta: {
            title: "",
            url: ""
        },
        img: CmhfImage,
        imgAlt: "Image of Music Row's Home Page on a laptop, tablet, and mobile devices.",
    },*/
    {
        key: 'pern',
        subtitle: "Simplified and Intuitive Navigation",
        title: "Perennials Fabrics",
        tags: "<development>",
        desc: "A detail oriented, collaborative project to enhance the navigation experience for something simple, luxurious, and easy to use for all users regardless of their device preferences. I was one of two primary front end developers that worked on this launch. This is a client I regularly contribute work to. Perennials Fabrics is the leader in the luxury performance textile industry.",
        url: "https://www.perennialsfabrics.com/",
        cta: {
            title: "",
            url: ""
        },
        img: PernImage,
        imgAlt: "Image of The Great Blog on a laptop device.",
    },
    {
        key: 'blog',
        subtitle: "Rapid Prototyping Exercise",
        title: "A Great Blog",
        tags: "<development, design>",
        desc: "An exercise in front end development, ux design, and rapid prototyping. Developed and designed in a one week span as an incoming assignment in my early days for Lifeblue. If you look closely, it is Bernie-Sits theme, which was especially relevant at the project's time of release.",
        url: "https://taylormcpherson.github.io/the-great-blog",
        cta: {
            title: "Learn about my process",
            url: "https://github.com/taylormcpherson/the-great-blog#readme"
        },
        img: BlogImage,
        imgAlt: "Image of Perennials Fabrics Home Page on a laptop device with the navigation dropdown visible.",
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
                    data-color={project.color}
                    data-sal="fade"
                    data-sal-duration="300"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out"
                >  
                  <div className="projectCards__card-img-wrapper">
                    <img 
                        className="projectCards__card-img"
                        src={project.img} 
                        alt={project.imgAlt} 
                        width='100%'></img>
                  </div>
                  <div className="projectCards__card-copy">
                    <div className='projectCards__card-flex'>
                        <div>
                            <h2 className="projectCards__card-subtitle">
                                {project.subtitle}
                            </h2>
                            <h3 className="projectCards__card-title">{project.title}</h3>
                            <p className="projectCards__card-tags">{project.tags}</p>
                        </div>
                        <a className="projectCards__live-link"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            See it Live
                        </a>
                    </div>
                    <p className="projectCards__card-desc">{project.desc}</p>
                    <a className={project.cta.url ? 'projectCards__card-link link__primary' : 'presentational__is-hidden'} 
                        href={project.cta.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                    {project.cta.title}
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