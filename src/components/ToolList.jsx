/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { FaJsSquare, FaHtml5, FaCss3, FaWordpress, FaNode, FaNpm } from 'react-icons/fa';


const Wrapper = styled.a`
  width: 100%;
  ${tw('border border-solid border-4 border-purple-dark shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-12 text-white')};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(to bottom, #23262b 0%, #1f133f 100%);
  &:hover {
    transform: translateY(-5px);
  }
`;

const ToolWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 2fr);
  @media (max-width: 600px) {
    grid-gap: 1rem;
  }
  @media (max-width: 450px) {
    grid-template-columns: 2, 2fr;
    grid-gap: 0rem;
  }
`;

const Tools = styled.p`
  ${tw('text-4xl lg:text-5xl font-sans text-white mt-8 xxl:w-3/4 text-center')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ToolList = ({ title, link, children }) => (
  <ToolWrapper>
  <Tools><FaJsSquare color="#F0DB4E"/></Tools>
  <Tools><FaHtml5 color="#EE5F27"/></Tools>
  <Tools><FaCss3 color="#F0DB4E"/></Tools>
  <Tools><FaWordpress color="#21759A" /></Tools>
  <Tools><FaNode color="#83BB24"/></Tools>
  <Tools><FaNpm color="#CE373C"/></Tools>
</ToolWrapper>
);

export default ToolList;
