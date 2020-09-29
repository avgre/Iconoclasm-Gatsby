import React from "react"
import styled from "@emotion/styled"

const AboutDiv = styled.div`
  position: relative;
  padding: 0 calc((100vw - 1200px) / 2);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  height: 5%;
  @media (max-width: 1200px) {
    padding: 0 calc((100vw - 768px) / 2);
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`
const AboutText = styled.p`
  text-align: center;
  width: 70%;
  font-size: 22px;
  font-weight: 100;
  @media (max-width: 1200px) {
    width: 90%;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 100%;
    line-height: 24px;
  }
`

const About = () => {
  return (
    <AboutDiv>
      <AboutText>
        Reclaim your home screen! <br />
        "The destruction of app icon dissonance perpetuated by corporate
        branding is here." <br />
        -our thesaurus
      </AboutText>
    </AboutDiv>
  )
}

export default About
