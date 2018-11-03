/* global tw */
import React from 'react';
import styled from 'react-emotion';

import 'typeface-cantata-one';
import 'typeface-open-sans';


import SEO from '../components/SEO';
import SVG from '../components/SVG';
import Footer from '../components/Footer';
import ToolList from '../components/ToolList'
import MainMenu from '../components/MainMenu';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled.div`
  ${tw('relative w-full h-50% ')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerHero = styled.div`
${tw('relative  w-full h-2 mb-6')};
  background: ${props => props.bg};
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const DividerBottom = styled.div`
${tw('relative w-full h-24')};
  background: ${props => props.bg};
`;

const Content = styled.div`
  ${tw('p-6 md:p-12 lg:px-24 lg:py-12 justify-center items-center flex')};
`;

const Hero = styled.div`
  ${tw('m-auto mt-12 w-full xl:w-2/3 border-solid border-purple rounded-lg px-8')};
`;

const HeaderBG = styled.div`
  ${tw('h-full w-full bg-purple-darkest')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide rounded-lg p-4')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, rebeccaPurple 0%, Purple 100%);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: relative;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -20px;
    top: 10px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('pin-b w-full h-100% hidden md:block')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-100%')};
  svg {
    width: 100%;
    height: 40vh;
    fill: purple;
  }
`;

{/* NEED TO FIX FADE ON SCROLL
const GoDown = styled.div`
${tw('static')};
  margin-left: 50%;
  animation-name: jump, pulse;
  animation-duration: 1s;
  animation-iteration-count: 4;
  svg {
    transform: rotate(180deg);
  }
  @keyframes pulse {
    0% {opacity:1;}
    50%  {opacity:0.5;}
    100% {opacity:1;}
  }
  @keyframes jump {
  0% {transform:translate(0, 0px);}
  50%  {transform:translate(0, 5px);}
  100%  {transform:translate(0, 0px);}
}
`;

const GoDownWrapper = styled.div`
${tw('hidden md:block h-12 bg-red pin-b w-full absolute')};
`;
*/}

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    ${tw('text-purple')};
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <MainMenu />
    <HeaderBG>
      <Content>
        <Hero>
        <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={.8} />
          <BigTitle>
            jfd3.
          </BigTitle>
          <Subtitle>web designer \\ web developer</Subtitle>
          <Divider fill="#23262b">
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="15s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
        </Divider>
        <DividerHero
        bg="linear-gradient(to right, rebeccaPurple 0%, Purple 100%)"
      />
        </Hero>
        </Content>
        </HeaderBG>
     {/*NEED TO FIX FADE ON SCROLL
        <GoDownWrapper class="GoDownWrapper">
        <GoDown>
           <SVG icon="arrowUp" width={6} fill={colors["purple"]}/>
        </GoDown>
        </GoDownWrapper>
     */}
        <Content>
          <Inner>
            <Title>
              Me
            </Title>
            <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
             I am an internet tinkerer who finds creative ways to distill important info into a beautiful package.
            </AboutSub>
            </AboutHero>
            <AboutDesc>
             There are two parts to a succesful internet presence: message and design. Simplifying language to make it easily digestible is essential. When these messages are wrapped in an alluring experience, it makes internet magic. I experiment with language and design to improve my skills everyday.
            </AboutDesc>
            <AboutDesc>
            Here are the tools that help me do this:
            </AboutDesc>
            <ToolList />
          </Inner>
        </Content>
      <Content>
        <Inner>
          <Title>More</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Resume"
              link="#"
            >
              Take a gander at this beaut'.
            </ProjectCard>
            <ProjectCard
              title="About"
              link="#"
            >
              Sure to be a great read.\
            </ProjectCard>
            <ProjectCard
              title="Experience"
              link="#"
            >
              Dontcha wish ya girlfriend was hot like me.
            </ProjectCard>
            <ProjectCard
              title="Something"
              link="#"
            >
              Another thing that is on the way
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Content>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a>.
          </ContactText>
        </Inner>
      </Content>
      <Footer />
  </React.Fragment>
);

export default Index;
