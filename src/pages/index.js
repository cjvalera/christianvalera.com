import React, { Component } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Social from "../components/social";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;

const BoldLinks = styled.a`
  font-weight: 400;
  color: #222;
  border-bottom: solid 1px #ddd;
  &:hover {
    text-decoration: none;
    color: #d91344;
  }
`;

const Content = styled.div`
  font-weight: 300;
  color: #50505a;
`;

const Role = styled.span`
  border-bottom: solid 1px #ddd;
  color: #d91344;
`;

const roles = ["Full-Stack Developer", "Software Developer", "iOS Developer"];
const consonant = ["a", "an"];

class IndexPage extends Component {
  state = {
    roleIndex: 0,
  };

  componentDidMount = () => {
    this.interval = setInterval(this.updateRole, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  updateRole = () => {
    this.setState((prevState) => ({
      roleIndex: prevState.roleIndex + 1,
    }));
  };

  render() {
    let index = this.state.roleIndex % roles.length !== 2 ? 0 : 1;
    let textBeforeRole = consonant[index];
    let role = roles[this.state.roleIndex % roles.length];

    return (
      <Layout>
        <Wrapper>
          <Social />
          <Content className="slide-in-right">
            <p>
              I am {textBeforeRole} <Role>{role}</Role>.
            </p>
            <p>
              {" "}
              I am currently employed at{" "}
              <BoldLinks target="_blank" href="https://www.glossier.com/">
                Glossier
              </BoldLinks>{" "}
              and a graduate of Cal Poly Pomona with a B.S. in Computer Science.{" "}
            </p>
            <p>
              I've previously worked with brands and businesses such as:
              <BoldLinks target="_blank" href="https://wagwalking.com/">
                {" "}
                &nbsp;Wag!
              </BoldLinks>
              ,
              <BoldLinks target="_blank" href="https://www.redbull.com/us-en/">
                {" "}
                &nbsp;RedBull
              </BoldLinks>
              ,
              <BoldLinks target="_blank" href="https://www.queenmary.com/">
                {" "}
                &nbsp;Queen Mary
              </BoldLinks>
              , and most recently
              <BoldLinks target="_blank" href="https://www.medtronic.com/">
                &nbsp;Medtronic.
              </BoldLinks>{" "}
            </p>
            <p>
              With a strong passion for technology, I am always striving to
              learn and thrive with the latest innovative stack or tool to add
              to my work flow.
            </p>
            <p>
              I also enjoy eating sushi{" "}
              <span role="img" aria-label="sushi">
                🍣{" "}
              </span>
              , walking my English Bulldog,
              <BoldLinks
                target="_blank"
                href="https://www.instagram.com/hersheybully/"
              >
                {" "}
                Hershey
              </BoldLinks>
              , and going on trips to Hawaii{" "}
              <span role="img" aria-label="shaka">
                🤙{" "}
              </span>{" "}
              with my fiancée.
            </p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}

export default IndexPage;
