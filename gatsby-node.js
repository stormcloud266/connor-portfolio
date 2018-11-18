const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// for two different createPage requests
// https://graphql.org/learn/queries/#aliases
// https://github.com/shansmith01/mad/blob/master/gatsby-node.js

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPoem {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPoem.edges.map(({node}) => {
        console.log(node.slug)
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/poem.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}

