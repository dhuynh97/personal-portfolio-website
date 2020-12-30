import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto -50px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 10px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  h2 {
    margin-bottom: 20px;
  }
`;
const StyledText = styled.div`
  p {
    line-height: 1.25;
    max-width: 500px;
    margin: 0 0 20px 0;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 140px));
    padding: 0;
    margin: 15px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 6px;
      padding-left: 15px;
      font-family: var(--font-sans);
      font-size: var(--fz-lg);

      &:before {
        margin-top: 6px;
        content: '》';
        position: absolute;
        left: 4px;
        color: var(--main-blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  bottom: 25px;
  max-width: 1920px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0px auto 50px;
    bottom: 0px;
    width: 100%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
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
      border-radius: 3px;
      mix-blend-mode: multiply;
      filter: grayscale(0%) contrast(1);
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

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, webpQuality: 100, traceSVG: { color: "#054e5b" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', ,'React', 'HTML & CSS', 'Java', 'Python', 'C++', 'GatsbyJS'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hey there, I'm Daniel! I'm an undergrad with a background in Business and Computer Science from <a href="https://www.ucsd.edu"> UC San Diego </a>. This is my last year as an undergrad and I'll be graduating in June 2021.</p>
            
            <p>
              One thing I enjoy doing is keeping up with the latest technologies to understand the implications they have in our world. A recent one that I've found fascinating is blockchain; I truly believe it's going to make huge revolutions within the fintech space and eventually creep into our everyday lives.
            </p>
            
            <p>
            My love for programming began when I was working at Bainbridge Consulting where I wrote Python scripts to scrape contact info to enhance our customer acquisition. Little did I know, that would be the catalyst for me to dive into the deep ocean of software development.
            </p>

            <p>
            </p>

            <p>Below are a few of the technologies I've worked with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <a href = "https://www.linkedin.com/in/danielhuynh97">
              <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
              </a>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
