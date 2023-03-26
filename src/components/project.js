import React from "react";
import styled from "styled-components";

const Title = styled.a`
  font-size: 1.25rem;
  font-weight: 200;
  color: #011627;
  &:hover {
    color: #e71d36;
    text-decoration: none;
  }
  > h3 {
    margin: 0;
  }
`;

const Container = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 1rem;
  > p {
    font-size: 16px;
    margin: 10px 0 0 0;
  }
`;

const Wrapper = styled.ul`
  list-style: none;
  margin: 0 0 10px 0;
  padding: 0;
  > li {
    color: #333;
    font-size: 12px;
    border-radius: 0.2em;
    padding: 0.45em 0.8em 0.4em;
    background: #fafafa;
    margin-right: 10px;
    display: inline;
    transition: all 0.3s;
    &:hover {
      background: #f2f2f2;
      color: #1a1919;
    }
  }
`;

const Image = styled.img`
  max-width: 60%;
  height: auto;
  margin: 10px 0;
`;

const Project = (props) => {
  let animate = props.animate;
  let link = props.link;
  let name = props.name;
  let description = props.description;
  let skills = props.skills;
  let image = props.image;

  return (
    <Container className={`slide-in-${animate}`}>
      <Title target="_blank" href={link}>
        {name}
      </Title>
      <Wrapper>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </Wrapper>
      {description.length > 0 && <p>{description}</p>}
      {image.length > 0 && <Image src={image} alt="project_image" />}
    </Container>
  );
};

export default Project;
