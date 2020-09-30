import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Phone3 = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "monodark.png" }) {
        childImageSharp {
          fixed(width: 340, height: 687, quality: 60) {
            ...GatsbyImageSharpFixed_noBase64
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
export default Phone3

const Iphone = styled(Img)`
  width: 340px;
  display: block;
  z-index: 1;
`
