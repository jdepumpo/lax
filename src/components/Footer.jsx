/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { FaGithub } from 'react-icons/fa';


const FooterWrap = styled.div`
  ${tw('text-center text-grey pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    ${tw('text-purple')};
    text-decoration: none;
  }
`;

const Footer = () => (

<FooterWrap>
&copy; 2018 Joe DePumpo {' '}
<a href="https://github.com/jdepumpo"><FaGithub /></a>
</FooterWrap>
);

export default Footer;