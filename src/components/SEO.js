import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// ***COMPONENT***
const SEO = props => {
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site

  return (
    <Helmet
      title={props.title || siteMetadata.title}
      titleTemplate={siteMetadata.titleTemplate}
    >
      <html lang={siteMetadata.lang} />
      {/* google site ownership verification */}
      <meta
        name="google-site-verification"
        content="XEZHILEk_i7LvZufBFhG3Qskxmyq73hQ_-1TmLHjzkw"
      />

      {/* serp */}
      <meta
        name="description"
        content={props.description || siteMetadata.description}
      />
      {/* <meta name="image" content={props.image || siteMetadata.image} /> */}
      <meta name="theme-color" content={siteMetadata.themeColor} />
      <meta name="keywords" content={props.keywords || siteMetadata.keywords} />

      {/* facebook */}
      <meta property="og:url" content={props.url || siteMetadata.siteUrl} />
      <meta property="og:title" content={props.title || siteMetadata.title} />
      <meta
        property="og:description"
        content={props.description || siteMetadata.description}
      />
      {/* <meta property="og:image" content={props.image || siteMetadata.image} /> */}

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title || siteMetadata.title} />
      <meta
        name="twitter:description"
        content={props.description || siteMetadata.description}
      />
      {/* <meta name="twitter:image" content={props.image || siteMetadata.image} /> */}
    </Helmet>
  )
}
export default SEO

// ***QUERY***
const query = graphql`
  {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
        keywords
        themeColor
        lang
      }
    }
  }
`
