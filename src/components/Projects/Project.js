import React, { useState } from "react"
import styled from "styled-components"

// styled components
const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  grid-row-gap: 20px;
  /* height: ${props => (props.isActive ? "inherit" : "40px")}; */
  padding: 24px 25px 4px;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      to left,
      rgba(${props => props.theme.appGreenPartial}, 0.5),
      rgba(${props => props.theme.appBluePartial}, 0.5)
    )
    1;
  mask-image: linear-gradient(to right, black 55%, transparent 100%);
  font-family: American Typewriter;
  font-size: 12px;
  transition: color 0.2s;
  cursor: pointer;
  /* hover effect */
  .project-title {
    transition: transform 0.2s !important;
    transform: ${props =>
      props.isActive ? "translateX(0px)" : "translateX(-20px)"};
  }
  .project-expand {
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s !important;
  }
  .project-info {
    display: ${props => (props.isActive ? "block" : "none")};
    grid-column: 1 / end;
  }
  &:hover {
    color: ${props => props.theme.appGreen} !important;
    .project-title {
      transform: translateX(0px) !important;
    }
    .project-expand {
      opacity: 1 !important;
      transition: opacity 0.4s !important;
    }
  }
`

const Project = props => {
  const [isActive, setActive] = useState(false)
  const activeClass = isActive ? " active" : ""

  return (
    <ProjectDiv
      onClick={() => setActive(!isActive)}
      className={activeClass}
      isActive={isActive}
    >
      <div className="project-expand">{isActive ? "-" : "+"}</div>
      <div className="project-title">{props.children}</div>
      <div className={"project-info"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        harum. Ad quis tempore nisi odit eaque. Earum asperiores voluptates
        porro reprehenderit dolores dignissimos ipsam. Molestiae, inventore
        mollitia perferendis veritatis officiis fugiat sint deleniti accusamus
        sapiente ut nulla suscipit sit repellat corrupti, totam aliquam
        perspiciatis ab a? Similique aperiam corporis excepturi, ullam qui id
        accusantium explicabo nemo, eveniet ad iusto saepe. Dignissimos itaque
        accusamus quae laboriosam dolorum libero eos vero obcaecati omnis
        asperiores fuga nesciunt, reprehenderit veritatis natus unde distinctio
        similique enim repellendus autem. Numquam dolorum porro necessitatibus
        doloremque repellat excepturi modi iure libero voluptate, exercitationem
        aut soluta architecto quo.
      </div>
    </ProjectDiv>
  )
}

export default Project
