import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Moment from 'react-moment'

const Poem = ({data}) => {
  const imageUrl = data.datoCmsPoem.coverphoto !== null ? data.datoCmsPoem.coverphoto.url : false
  const imageAlt = data.datoCmsPoem.coverphoto !== null && data.datoCmsPoem.coverphoto.alt !== null ? data.datoCmsPoem.coverphoto.alt : "poem"

  return (
    <Layout>
    <section className="poem page">
      <div className="poem__inner">
        
        <header>
          {
            imageUrl ? <img src={imageUrl} alt={imageAlt}/> 
            : 
            <iframe title={data.datoCmsPoem.video.title} src={`https://www.youtube.com/embed/${data.datoCmsPoem.video.providerUid}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          }
          <h1>{data.datoCmsPoem.title}</h1>
          <Moment className="poem__date" format="MMM DD, YYYY">{data.datoCmsPoem.date}</Moment>
        </header>
  
        <article> 
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPoem.bodyNode.childMarkdownRemark.html,
          }}
        />
        </article>
  
      </div>
  
    </section>
  
    </Layout>
  )
}

export default Poem

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsPoem(slug: { eq: $slug }) {
      title
      date
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      coverphoto {
        url
      }
      video {
        thumbnailUrl
        providerUid
      }
    }
  }
`


