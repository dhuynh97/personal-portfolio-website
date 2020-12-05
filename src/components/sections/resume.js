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
  min-height: 10vh;

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
	margin-left: auto;;
	margin-right: auto;
    color: var(--main-blue);
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
`;
const StyledPic = styled.div`
  position: relative;
  bottom: 10px;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0px auto 0;
    width: 100%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
	width: 75%;
	margin-left: auto;
    margin-right: auto;
    border-radius: var(--border-radius);
    background-color: var(--main-black);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
	}
	
	a {
		width: 100%;
		background-color: var(--white);
		border-radius: var(--border-radius);
		vertical-align: middle;
  
		&:hover,
		&:focus {
		  background: transparent;
  
		  &:before,
		  .img {
			background: transparent;
			filter: none;
		  }
		}
  
		&:before {
		  content: '';
		  position: absolute;
		  width: 100%;
		  height: 100%;
		  top: 0;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  z-index: 3;
		  transition: var(--transition);
		  mix-blend-mode: screen;
		}
	  }

    .img {
      position: relative;
      border-radius: 0px;
      mix-blend-mode: multiply;
      filter: grayscale(1%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--white);
      mix-blend-mode: screen;
    }

    &:after {
      border: 1px solid var(--main-black);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const Resume = () => {
	const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100, webpQuality: 100, traceSVG: { color: "#054e5b" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
	
  const revealTitle = useRef(null);	
  const revealContainer = useRef(null);
  
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);
  
	return (
		<StyledHeroSection>
		<h2 className="numbered-heading" ref={revealTitle}>
        	Resume
      	</h2>
        <StyledPic>
				<div className="wrapper">
					<a href="/resume.pdf">
					<Img fluid={data.avatar.childImageSharp.fluid} alt="Resume" className="img" />
					</a>
          </div>
        </StyledPic>
	  </StyledHeroSection>
	);
  };
  
  export default Resume;