import React, { useState } from "react"
import styled from "@emotion/styled"

const StoryDiv = styled.div`
  position: relative;
  padding: 0 calc((100vw - 1200px) / 2);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2%;
  height: 300px;
  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`
const Story = styled.p`
  text-align: left;
  margin-left: 6%;
  flex: 0 0 62%;
  font-weight: 100;
`
const StoryTitle = styled.h2`
  margin-left: 6%;
  flex: 0 0 20%;
`

const About = () => {
  return (
    <StoryDiv>
      <StoryTitle>Our Story</StoryTitle>
      <Story>
        After watching that MKBHD video (you know the one) on Youtube and
        thought the new iOS 14 homescreens were dope. We worked on
        brainstorming/designing/coding all weekend long and came up with an icon
        set that we liked enough to share!
      </Story>
    </StoryDiv>
  )
}

export default About
