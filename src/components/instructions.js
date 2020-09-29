import React from "react"
import styled from "@emotion/styled"

const Instructions = () => {
  return (
    <Yellow>
      <h2>Instructions:</h2>
      <InstructDiv>
        <Instruction>
          Save your new icons to your camera roll/photos/phone. Make sure you
          have the latest update for iOS 14 installed on your phone as well.
        </Instruction>
        <Instruction>
          Open up the Siri Shortcuts app on your iPhone or iPad.
        </Instruction>
        <Instruction>
          Find the + icon on the top right of your screen and give it a tap.
        </Instruction>
        <Instruction>Press the Add Action button.</Instruction>
        <Instruction>Tap the Scripting button.</Instruction>
        <Instruction>
          Select Open App and choose the app you want to customize.
        </Instruction>
        <Instruction>
          Now go back to the top right of your screen and tap the icon with the
          3 dots.
        </Instruction>
        <Instruction>Tap the "Add to Homescreen" option.</Instruction>
        <Instruction>
          Under "Homescreen Name and Icon", tap the default icon on the left,
          and select "choose photo".
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
