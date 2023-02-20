import React from "react";
import styled from "styled-components/macro";

import Form from "./Form";
import Addition from "./Addition";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 50vh;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.h1`
  font-family: "Raleway", sans-serif;
  margin: 0;
  font-size: 3rem;
  max-width: 25rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;

  &:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }
`;

const Hero = () => (
  <Component>
    <Wrapper>
      <Slogan>Make your tasks unique</Slogan>
      <Text>Superhero To-Do List helps you solve the problems</Text>
      <Text>Simple and easy</Text>
      <Form />
      <Addition />
    </Wrapper>
  </Component>
);

export default Hero;
