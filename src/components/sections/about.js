import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '》';
        position: absolute;
        left: 0;
        color: var(--main-blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  bottom: 100px;
  max-width: 1920px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0px auto 0;
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

  const skills = ['Java', 'C++', 'Python', 'JavaScript (ES6+)', 'HTML & (S)CSS', 'React'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey there, My name is Daniel Huynh! I'm a software engineer from San Jose, CA. I'm currently an undergrad studying Business and Computer Science at <a href="https://www.ucsd.edu"> UC San Diego </a>.
            </p>

            <p>
            </p>

            <p>
              Feel free to view and download my resume <a href="/resume.pdf"> here. </a>
            </p>

            <p>Here are some of the technologies I have worked with:</p>
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
