import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Phone8 = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "colorback2.png" }) {
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
export default Phone8

const Iphone = styled(Img)`
  width: 340px;
  display: block;
  z-index: 1;
`
