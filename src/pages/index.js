import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () => {

  const { allRandomCat } = useStaticQuery(
    graphql`
      query {
        allRandomCat {
          nodes {
            id
            url
            width
            height
          }
        }
      }
    `
  )

  return (
    <Layout>
      {
        allRandomCat.nodes.map(img => {
          return (
            <img style={{float: 'left'}}key={img.id} src={img.url} width={img.width ? `${img.width}px` : null} height={img.height ? `${img.height}px` : null} alt="" />
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
