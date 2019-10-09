import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// ***COMPONENT***
const SEO = props => {
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site

  return (
    <Helmet>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="image" content={siteMetadata.image} />
      <meta name="theme-color" content={siteMetadata.themeColor} />
      <html lang={siteMetadata.lang} />
      <meta name="keywords" content={siteMetadata.keywords} />

      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.image} />
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
        description
        url
        image
        themeColor
        keywords
        lang
      }
    }
  }
`
