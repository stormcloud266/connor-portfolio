import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Moment from 'react-moment'

const Collection2 = ({ data }) => (
  <Layout>
    <section className="page poetry">
      {
        data.allDatoCmsPoem.edges.map(poem => {
          return (
            <Link to={`/${poem.node.slug}`} key={poem.node.id} className="poetry__poem">
              <div key={poem.node.id}>
                <div className="poetry__image" 
                style={{backgroundImage: `url(${poem.node.coverphoto.url})`}}
                ></div>
                <div className="poetry__text">
                  <h2>{poem.node.title}</h2>
                  <Moment format="MMM DD, YYYY">{poem.node.date}</Moment>
                </div>
              </div>
            </Link>
          )
        })
      }
    </section>
  </Layout>
)

export default Collection2

export const query = graphql`
  query {
    allDatoCmsPoem(
      filter: { collection: { eq: "collection 2" } }
      sort: { fields: [date], order: DESC }
      ) {
      edges {
        node {
          id
          title
          slug
          date
          coverphoto {
            url
          }
        }
      }
    }
  }
`