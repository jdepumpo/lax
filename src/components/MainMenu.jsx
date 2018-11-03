/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const Menu = styled.div`
  ${tw('flex justify-end items-center fixed shadow-lg bg-black h-12 w-full z-40')};
  }
`;

const Inner = styled.span`
  ${tw('text-purple-lightest no-underline text-lg font-sans px-6 tracking-wide')};
  }
`;

const Logo = styled.span`
  ${tw('text-sans font-bold text-white tracking-wide px-6')};
}
`;

const MainMenu = () => (

<Menu>
<Link to="/">
  <Logo>jfd3.</Logo>
    </Link>
    <Link to="/work">
      <Inner>work.</Inner>
    </Link>
    <Link to="/me">
      <Inner>me.</Inner>
    </Link>
</Menu>
);

export default MainMenu;

