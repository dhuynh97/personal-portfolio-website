import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

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
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
      background: --main-blue;
    margin-top: 0px;
    font-size: var(--fz-lg);
  }

  .demo a {
    position: absolute;
    bottom: 0px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: var(--main-black);
    font : normal 400 20px/1 'Josefin Sans', sans-serif;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
  }
  .demo a:hover {
    opacity: .5;
  }

  #section06 a {
    padding-top: 70px;
  }
  #section06 a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid var(--main-black);
    border-bottom: 1px solid var(--main-black);
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    -webkit-animation: sdb06 1.5s infinite;
    animation: sdb06 1.5s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb06 {
    0% {
      -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb06 {
    0% {
      transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
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
  const three = <h3 className="medium-heading"> A Software Engineer from San Jose, CA </h3>;
  const four = <p>I'm currently an undergrad studying Business and Computer Science at the University of California, San Diego.
                  I hope to be able to intersect both of my passions of finance and computer science into meaningful work.</p>;
  const five = (
    <section id="section06" class="demo">
      <a href="#about"><span></span></a>
    </section>

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
