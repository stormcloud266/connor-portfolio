import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const About = ({ data }) => (
  <Layout>
    <section className="page page--vert-center about">
    <h1 className="heading hr-bt">{data.datoCmsAbout.header}</h1>
    <div className="wrapper-sm" dangerouslySetInnerHTML={{
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