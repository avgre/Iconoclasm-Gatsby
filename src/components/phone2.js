import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Phone2 = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "poplight.png" }) {
        childImageSharp {
          fixed(width: 340, height: 687, quality: 60) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Iphone
      fixed={data.placeholderImage.childImageSharp.fixed}
      className={className}
    />
  )
}
export default Phone2

const Iphone = styled(Img)`
  width: 340px;
  display: block;
  z-index: 1;
`
