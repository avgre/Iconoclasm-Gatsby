import React from "react"
import styled from "@emotion/styled"

const InstructDiv = styled.ol`
  position: relative;
  padding: 20px calc((100vw - 1200px) / 2);
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  height: 400px;
  background: #ffb703;
  list-style-type: decimal;
  z-index: 3;
  margin-top: -10%;
  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`
const Instruction = styled.li``

const Instructions = () => {
  return (
    <InstructDiv>
      <Instruction>
        Open up the Siri Shortcuts app on your iPhone or iPad.
      </Instruction>
      <Instruction>
        Find the + icon on the top right of your screen and give it a tap.
      </Instruction>
      <Instruction>Press the Add Action button.</Instruction>
      <Instruction>In the searchbar, type in "Open App".</Instruction>
      <Instruction>
        Select Open App and choose the app you want to customize.
      </Instruction>
      <Instruction>
        Now go back to the top right of your screen and tap the icon with the 3
        dots.
      </Instruction>
      <Instruction>
        Here you can edit the temporary icon and replace it with your own by
        tapping it.
      </Instruction>
      <Instruction>
        In the dropdown find the location of the custom icon and choose it.
      </Instruction>
      <Instruction>
        Now in the text field you can rename the app as is your preference, or
        leave it blank for a cleaner look.
      </Instruction>
      <Instruction>
        Tap Add. Tap Done. Your new custom icon should be on your homescreen!
      </Instruction>
    </InstructDiv>
  )
}

export default Instructions
