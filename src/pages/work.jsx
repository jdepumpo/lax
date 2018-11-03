/* global tw */
import React from 'react';
import styled from 'react-emotion';

import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
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
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex')};
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
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide rounded-lg p-6')};
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
    color: #e07628;
    text-decoration: none;
  }
`;

const Work = () => (
  <React.Fragment>
    <SEO />
    <MainMenu />
    <HeaderBG>
      <Content>
        <Hero>
        <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={.8} />
          <BigTitle>
            work.
          </BigTitle>
        </Hero>
        </Content>
        </HeaderBG>
      <Content>
        <Inner>
            <Timeline />
        </Inner>
        </Content>
      <Footer />
  </React.Fragment>
);

export default Work;
