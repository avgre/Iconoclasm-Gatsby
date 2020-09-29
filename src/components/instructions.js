import React from "react"
import styled from "@emotion/styled"

const Instructions = () => {
  return (
    <Yellow>
      <h2>Instructions:</h2>
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
          Now go back to the top right of your screen and tap the icon with the
          3 dots.
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
    </Yellow>
  )
}

export default Instructions

const Yellow = styled.div`
  position: relative;
  padding: 30px calc((100vw - 1200px) / 2);
  width: 100%;
  height: auto;
  background: #ffb703;
  z-index: 3;
  margin-top: -90px;
  @media (max-width: 1200px) {
    padding: 30px calc((100vw - 768px) / 2);
    margin-top: -120px;
  }
  @media (max-width: 768px) {
    padding: 20px 3vw;
    margin-top: -150px;
  }
`
const InstructDiv = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  list-style-type: decimal;
`
const Instruction = styled.li`
  padding: 10px 0;
`
