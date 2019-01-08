import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="home page page--vert-center">
      <h1 className="heading hr-bt">{data.datoCmsHome.header}</h1>
      <div className="wrapper-sm" dangerouslySetInnerHTML={{
        __html: data.datoCmsHome.bodyNode.childMarkdownRemark.html
      }}/>
    </section>
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    datoCmsHome {
      header
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`