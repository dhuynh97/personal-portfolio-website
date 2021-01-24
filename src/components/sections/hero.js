import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 95vh;

  h1 {
    margin: 0 0 30px 0px;
    color: var(--main-blue);
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
    line-height: 1.0;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
    font-size: var(--fz-xxl);
  }
  x {
    font-size: var(--fz-md);
    font-family: var(--font-sans);
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: transparent;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    line-height: 1.0;

    &:hover,
    &:focus {
      color: gold;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
    padding-bottom: 12px;
    font-size: var(--fz-xl);
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1></h1>;
  const two = <h2 className="big-heading"> Hey there, I'm Daniel Huynh.</h2>;
  const three = <h3 className="medium-heading"> A Software Engineer from San Jose, CA. </h3>;
  const four = <p>I'm an undergrad with a background in Business and Computer Science from <a href='https://www.ucsd.edu'>UC San Diego‏‏‎‎</a> looking to create meaningful solutions to complex problems. <x href='https://www.ucsd.edu'>(go tritons! ♆) </x></p>;
  const five = (
    <a href= '#about' className="email-link">‏‏‎see more</a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
