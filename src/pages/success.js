import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Success = () => (
  <Layout>
    <section className="page page--vert-center about">
      <h1 className="heading hr-bt">Thank You!</h1>
      <div className="wrapper-sm">
        <p>Your email has been submitted! I will get back to you as soon as possible. Please <Link to="/poetry">visit my poetry page</Link> if you would like to see more of my work.</p>
      </div>
    </section>
  </Layout>
)

export default Success
