import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Phone2 = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "poplight.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Iphone
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
    />
  )
}
export default Phone2

const Iphone = styled(Img)`
  width: 350px;
  display: block;
  z-index: 1;
`
