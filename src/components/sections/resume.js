import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: 500;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    color: var(--main-black);
  }

  h3 {
    margin-top: 10px;
    color: var(--main-blue);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
      background: --main-blue;
    margin-top: 50px;
  }
`;

const Resume = () => {
	const [isMounted, setIsMounted] = useState(false);
  
	useEffect(() => {
	  const timeout = setTimeout(() => setIsMounted(true), navDelay);
	  return () => clearTimeout(timeout);
	}, []);
  
	const one = <h1></h1>;
	const two = <h2 className="big-heading"></h2>;
	const three = <h3 className="medium-heading"></h3>;
	const four = <p>holder</p>;
	const five = (
	  <p></p>
	);
  
	const items = [one, two, three, four, five];
  
	return (
	  <StyledHeroSection>
		  
	  </StyledHeroSection>
	);
  };
  
  export default Resume;