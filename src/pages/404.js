import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFound = () => (
  <Layout>
    <section className="page page--vert-center home">
      <h1 className="heading hr-bt">Uh Oh!</h1>
      <div className="wrapper-sm">
        <p>It seems you've stumbled onto a page that doesn't exist. Please <Link to="/poetry">visit my poetry page</Link> if you would like to see more of my work, or <Link to="/">return home</Link>.</p>
      </div>
    </section>
  </Layout>
)

export default NotFound
