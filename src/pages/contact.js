import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';

const Contact = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Connor Norton | Let's Get in Touch</title>
      <script src='https://www.google.com/recaptcha/api.js'></script>
    </Helmet>
    <section className="contact page vc-text">
      <div className="wrapper-sm contact__body">
        <h2>{data.datoCmsContact.header}</h2>
        <div dangerouslySetInnerHTML={{
          __html: data.datoCmsContact.bodyNode.childMarkdownRemark.html
        }}/>
      </div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success?no-cache=1"
        data-netlify-recaptcha="true"
        >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

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
        <div class="g-recaptcha" data-sitekey="6Lfua4kUAAAAAOMnJjgBm0oJ4cCDJ0L7nZMHbUZW"></div>
          <button type="submit">Send Email</button>
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