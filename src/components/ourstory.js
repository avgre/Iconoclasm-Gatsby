import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const OurLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ourstory.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
    />
  )
}
const Logo = styled(OurLogo)`
  display: block;
  width: 100px;
`

const StoryDiv = styled.div`
  position: relative;
  padding: 0 calc((100vw - 1000px) / 2);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2%;
  height: 300px;
  @media (max-width: 1200px) {
    padding: 0 calc((100vw - 768px) / 2);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 20px;
  }
`
const Story = styled.p`
  padding: 15px 5px;
  text-align: left;
  margin-left: 6%;
  flex: 0 0 62%;
  font-weight: 100;
  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0;
  }
`
const StoryTitle = styled.h2`
  padding: 10px 5px;
  margin-left: 6%;
  flex: 0 0 20%;
  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`

const About = () => {
  return (
    <StoryDiv>
      <StoryTitle>
        Our Story
        <Logo />
      </StoryTitle>

      <Story>
        After watching that MKBHD video (you know the one) on Youtube, we
        thought the new iOS 14 homescreens were dope. We worked on
        brainstorming/designing/coding all weekend long and came up with an icon
        set that we liked enough to share!
      </Story>
    </StoryDiv>
  )
}

export default About
