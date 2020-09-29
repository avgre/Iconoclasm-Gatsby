import React, { useState } from "react"
import styled from "@emotion/styled"

const Contact = () => {
  return (
    <Container>
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <FlexContainer>
          <FlexBox1>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
          </FlexBox1>
          <FlexBox2>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </FlexBox2>
        </FlexContainer>
      </Form>
    </Container>
  )
}
export default Contact

const Form = styled.form``
const Container = styled.div`
  padding: 0 calc((100vw - 1200px) / 2);
  width: 100%;
`
const FlexContainer = styled.div`
  display: flex;
`
const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  flex: 0 0 30%;
`
const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  flex: 0 0 52%;
`
