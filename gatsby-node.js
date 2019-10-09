const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allDatoCmsProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allDatoCmsProject.edges.forEach(({ node }) => {
      createPage({
        path: `/project/${node.slug}`,
        component: path.resolve(`./src/templates/project-info.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
