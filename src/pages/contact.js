import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Contact = ({ data }) => (
  <Layout>
    <section className="contact page vc-text">
      <div className="wrapper-sm contact__body">
        <h2>{data.datoCmsContact.header}</h2>
        <div dangerouslySetInnerHTML={{
          __html: data.datoCmsContact.bodyNode.childMarkdownRemark.html
        }}/>
      </div>
      <form action="">

        <div className="input-container">
          <input type="text" id="name"/>
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-container">
          <input type="text" id="email"/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-container">
          <textarea name="message" id="message" rows="4"></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <div className="button-container">
          <button>Send Email</button>
        </div>

      </form>
    </section>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    datoCmsContact {
      header
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`