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
      infinite: true,
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
            <Text>SWIPE</Text>
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
                <Title>A Touch of Color - Dark</Title>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’.
                  <br />
                  High-res iOS 14 icon set.
                </Text>
                <FlexModule>
                  <Price>$15</Price>
                  <Buy href="https://gum.co/WGTnH">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>A Touch of Color - Light</Title>
                <Text>
                  Research has shown that color in iconography boosts
                  association and recognizability. Just sayin’. <br />
                  High-res iOS 14 icon set.
                </Text>
                <FlexModule>
                  <Price>$15</Price>
                  <Buy href="https://gum.co/WGTnH">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Matter of Minimalism - Noir</Title>
                <Text>
                  “Keep only those things that speak to your heart." - Marie
                  Kondō
                  <br />A simple black and white icon set. <br />
                  High-res iOS 14 icon set.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/DjTHa">Take My Money</Buy>
                </FlexModule>
              </Slide2>
              <Slide2>
                <Title>Matter of Minimalism - Blanche</Title>
                <Text>
                  “Keep only those things that speak to your heart." - Marie
                  Kondō
                  <br />A simple black and white icon set. <br />
                  High-res iOS 14 icon set.
                </Text>
                <FlexModule>
                  <Price>$10</Price>
                  <Buy href="https://gum.co/DjTHa">Take My Money</Buy>
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
  height: auto;
  @media (max-width: 768px) {
    line-height: 24px;
  }
`
const Title = styled.div`
  font-weight: 400;
  font-style: bold;
  font-size: 20px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  margin-top: 3%;
  padding: 0 calc((100vw - 1200px) / 2);
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`
const HandLeft = styled(ArrowLeft)``
const HandRight = styled(ArrowRight)``
const ArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 140%;
  left: -20%;
  top: 30%;
  @media (max-width: 1100px) {
    justify-content: space-around;
    left: 0;
    width: 100%;
    top: -50px;
  }
`
const FlexBlock1 = styled.div`
  position: relative;
  display: block;
  width: 340px;
  margin-top: 50px;
  @media (max-width: 1100px) {
    margin-top: 80px;
  }
`

const Container = styled.div`
  display: block;
  width: 312px;
`
const IconGrid = styled.div`
  width: 312px;
  padding: 0 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat (4, 1fr);
  grid-gap: 10px;
`
const Slide = styled.div`
  width: 312px;
  height: 300px;
`
const Overlay = styled.div`
  position: absolute;
  top: 90px;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
`
const FlexBlock2 = styled.div`
  position: relative;
  display: block;
  width: 450px;
  align-items: center;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 350px;
  }
`
const Selection = styled.div`
  position: relative;
  top: 18%;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    top: 0%;
  }
`
const Slide2 = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: auto;
  }
`
const FlexModule = styled.div`
  display: flex;
  padding: 15px 0px;
`
const Buy = styled.a`
  font-size: 18px;
  color: black;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  background: #ffb703;
  border: none;
  border-radius: 15px;
  white-space: nowrap;
  z-index: 4;
  overflow: hidden;
  margin: 5px 15px;
  padding: 5px 15px;
`
const Price = styled.h3`
  font-size: 18;
  text-align: center;
  padding: 5px 15px;
  padding-left: 0;
`
