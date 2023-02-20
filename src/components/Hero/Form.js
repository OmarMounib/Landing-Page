import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  margin: 3rem 0;
  display: flex;
`;

const Input = styled.input`
  padding: 0.75rem 2rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  line-height: 1.25;
`;

const Submit = styled.button`
  padding: 0.75rem 2rem;
  margin-left: 1rem;
  color: #fff;
  background-color: #68d391;
  border: 1px solid #68d391;
  border-radius: 0.375rem;
  line-height: 1.25;

  transition: all 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid #9ae6b4;
    background-color: #9ae6b4;
  }
`;

const Form = () => (
  <Component>
    <form>
      <Input type="email" placeholder="Your email address" />
      <Submit>Send me the app</Submit>
    </form>
  </Component>
);

export default Form;
