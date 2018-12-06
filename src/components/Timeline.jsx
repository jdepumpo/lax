/* global tw */
import React from 'react';
import styled from 'react-emotion';


const LineWrap = styled.div`
  ${tw('')};
  
`;

const CircleStyle = styled.svg`
filter: drop-shadow( 0px 1px 7px #000 );

&:hover {
  transform: translateY(-2px);
}
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide rounded-lg p-4')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Timeline = () => (

<LineWrap>
  <svg height="1000" width="300">
    <line 
      x1="40" y1="3" x2="40" y2="980"  
      stroke="slateGrey" 
      strokeWidth="7"
      fill="none"
      stroke-linecap="round" />
  <CircleStyle>
      <circle 
      cx="40" 
      cy="50" 
      r="15"
      fill="purple"
      stroke="white"
      strokeWidth="3" />
  </CircleStyle>
  <CircleStyle>
      <circle 
      cx="40" 
      cy="250" 
      r="15"
      fill="purple"
      stroke="white"
      strokeWidth="3" />
  </CircleStyle>
    </svg>

</LineWrap>

);

export default Timeline;