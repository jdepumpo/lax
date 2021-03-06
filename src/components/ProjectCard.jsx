/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('border border-solid border-4 border-purple-dark shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-12 text-white')};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(to bottom, #23262b 0%, #1f133f 100%);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-purple-lightest uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, link, children }) => (
  <Wrapper href={link}>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
