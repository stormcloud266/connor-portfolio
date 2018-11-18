import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const About = ({ data }) => (
  <Layout>
    <section className="page page--vert-center about">
    <h2>{data.datoCmsAbout.header}</h2>
    <div dangerouslySetInnerHTML={{
      __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html
    }}/>
    </section>
  </Layout>
)

export default About

export const query = graphql`
  query {
    datoCmsAbout {
      header
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`