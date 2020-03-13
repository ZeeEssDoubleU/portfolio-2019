// @ts-nocheck
import React, { useState, useEffect } from "react"
import { graphql, navigate, PageRenderer } from "gatsby"
import Modal from "react-modal"
//import component
import ProjectInfo from "../components/Projects/ProjectInfo"
import SEO from "../components/SEO"

// ***COMPONENT***
export default ({ data }) => {
  const project = data.datoCmsProject

  Modal.setAppElement(`#___gatsby`)

  const modalStyles = {
    overlay: {
      zIndex: 999,
      background: "",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    content: {
      background: "",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: 0,
      margin: 0,
      border: "none",
      borderRadius: "none",
    },
  }

  // PageRenderer stuff.
  const building = typeof window === "undefined"
  const [indexPageData, setIndexPageData] = useState(
    !building && window.indexPageData
  )
  useEffect(() => {
    window.setIndexPageData = () => {
      setIndexPageData(window.indexPageData)
    }
  }, [])

  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true)
  const modalCloseTimeout = 300
  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => navigate(`/`), modalCloseTimeout)
  }

  return (
    <>
      <PageRenderer
        key={"/"}
        location={{ pathname: "/" }}
        pageResources={indexPageData}
        path="/"
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
      >
        <SEO
          title={project.title}
          description={project.description}
          keywords={project.tech}
        />
        <ProjectInfo
          title={project.title}
          description={project.description}
          moreInfo={project.moreInfo}
          features={project.features}
          projectLink={project.projectLink}
          codeLink={project.codeLink}
          image={project.image}
          tech={project.tech}
        />
      </Modal>
    </>
  )
}

// ***QUERY***
export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      title
      description
      moreInfo
      features
      tech
      projectLink
      codeLink
      image {
        fluid(maxWidth: 1400) {
          ...GatsbyDatoCmsFluid
        }
      }
      slug
    }
  }
`
