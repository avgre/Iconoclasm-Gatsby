import React, { Component } from "react"
import Slider from "react-slick"
import IconsDark from "../components/iconsDark"
import IconsLight from "../components/iconsLight"
import IconsDarkPop from "../components/iconsDarkPop"
import IconsLightPop from "../components/iconsLightPop"
import Phone1 from "../components/phone1"
import Phone2 from "../components/phone2"
import Phone3 from "../components/phone3"
import Phone4 from "../components/phone4"
import styled from "@emotion/styled"
import ArrowLeft from "../images/handleft.svg"
import ArrowRight from "../images/handright.svg"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      slideIndex: 0,
      updateCount: 0,
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings1 = {
      className: "center",
      infinite: false,
      slidesToShow: 1,
      swipeToSlide: true,
      arrows: false,
      afterChange: () =>
        this.setState(state => ({ updateCount: this.state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    }
    console.log(this.state.slideIndex)
    const settings2 = {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      arrows: false,
      fade: true,
    }
    let slideIndex = this.state.slideIndex
    console.log(slideIndex)
    const renderPhone = () => {
      if (slideIndex === 0) {
        return <Phone1 />
      } else if (slideIndex === 1) {
        return <Phone2 />
      } else if (slideIndex === 2) {
        return <Phone4 />
      } else {
        return <Phone3 />
      }
    }
    return (
      <FlexContainer>
        <FlexBlock1>
          <ArrowDiv>
            <HandLeft onClick={this.previous} />
            <HandRight onClick={this.next} />
          </ArrowDiv>
          {renderPhone()}
          <Overlay>
            <Container>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                ref={c => (this.slider = c)}
                {...settings1}
              >
                <Slide>
                  <IconGrid>
                    <IconsDarkPop />
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    <IconsLightPop />
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    <IconsDark />
                  </IconGrid>
                </Slide>
                <Slide>
                  <IconGrid>
                    <IconsLight />
                  </IconGrid>
                </Slide>
              </Slider>
            </Container>
          </Overlay>
        </FlexBlock1>
        <FlexBlock2>
          <Selection>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={1}
              swipeToSlide={true}
              {...settings2}
            >
              <Slide2>
                <h2>A Touch of Color (Dark)</h2>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’.
                </Text>
                <FlexModule>
                  <Price>$20</Price>
                  <Buy>Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <h2>A Touch of Color (Light)</h2>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’.
                </Text>
                <FlexModule>
                  <Price>$20</Price>
                  <Buy>Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <h2>Monochromatic Dark</h2>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Text>
                <FlexModule>
                  <Price>$15</Price>
                  <Buy>Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <h2>Monochromatic Light</h2>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Text>
                <FlexModule>
                  <Price>$15</Price>
                  <Buy>Take My Money</Buy>
                </FlexModule>
              </Slide2>
            </Slider>
          </Selection>
        </FlexBlock2>
      </FlexContainer>
    )
  }
}
const Text = styled.p`
  font-weight: 200;
`
const HandLeft = styled(ArrowLeft)``
const HandRight = styled(ArrowRight)``
const ArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 500px;
  left: -75px;
  top: 30%;
`
const FlexModule = styled.div`
  margin: 5% 0%;
  display: flex;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  margin-top: 5%;
  padding: 0 calc((100vw - 1200px) / 2);
`
const FlexBlock1 = styled.div`
  position: relative;
  display: block;
  width: 350px;
`
const FlexBlock2 = styled.div`
  position: relative;
  display: block;
  width: 450px;
`

const Container = styled.div`
  display: block;
  width: 310px;
`
const IconGrid = styled.div`
  width: 310px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat (4, 1fr);
  grid-gap: 3%;
`
const Slide = styled.div`
  width: 310px;
  height: 300px;
`
const Overlay = styled.div`
  position: absolute;
  top: 70px;
  z-index: 2;
  display: flex;
  width: 350px;
  justify-content: center;
`
const Selection = styled.div`
  position: relative;
  top: 20%;
  height: auto;
  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`
const Slide2 = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`
const Buy = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  background: #ffb703;
  border: none;
  border-radius: 15px;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px 15px;
`
const Price = styled.h3`
  font-size: 18;
  text-align: center;
  padding: 5px 15px;
  padding-left: 0;
`
