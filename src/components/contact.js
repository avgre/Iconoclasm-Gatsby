import React from "react"
import styled from "@emotion/styled"

const Contact = () => {
  return (
    <Container>
      <h2>Contact Us:</h2>
      <Text>
        Email us for any of your questions and concerns. We're also taking
        requests for more hard to find and unique icons you might need. Future
        updates might include an icon you want!
      </Text>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <FlexContainer1>
          <FlexBox1>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <br />
              <Input type="text" name="name" id="name" />
            </label>

            <label>
              Email
              <br />
              <Input type="email" name="email" id="email" />
            </label>

            <label>
              Subject
              <br />
              <Input type="text" name="subject" id="subject" />
            </label>
          </FlexBox1>
          <FlexBox2>
            <label>
              Message
              <br />
              <Input2 name="message" id="message" rows="5" />
              <FlexContainer>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
              </FlexContainer>
            </label>
          </FlexBox2>
        </FlexContainer1>
      </form>
    </Container>
  )
}
export default Contact
const Text = styled.p`
  font-weight: 200;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    line-height: 28px;
  }
`
const Container = styled.div`
  padding: 20px calc((100vw - 1200px) / 2);
  width: 100%;
  height: auto;
  @media (max-width: 1200px) {
    padding: 0 calc((100vw - 768px) / 2);
  }
  @media (max-width: 768px) {
    flex-direction: column;

    padding: 20px 20px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  > button,
  input {
    margin: 10px 0;
  }
`
const FlexContainer1 = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  flex: 0 0 30%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`
const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  flex: 1 0 52%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`
const Input = styled.input`
  width: 100%;
`
const Input2 = styled.textarea`
  width: 100%;
`
