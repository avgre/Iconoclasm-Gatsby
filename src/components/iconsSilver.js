import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Icon = styled(Img)`
  border-radius: 10px;
  background: white;
  margin: 5% 5%;
`
const IconsSilver = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "silver" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 75, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map(({ node }) => {
        return <Icon fluid={node.childImageSharp.fluid} className={className} />
      })}
    </>
  )
}
export default IconsSilver
