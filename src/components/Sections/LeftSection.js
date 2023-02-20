import React from "react";

import {
  Component,
  Wrapper,
  Subheader,
  Header,
  PlaceholderImage,
  Text,
  Item,
} from "./Components";

const LeftSection = () => (
  <Component bg>
    <Wrapper row>
      <Item right>
        <Subheader>Amazing collaborations</Subheader>
        <Header>Connect to everyone you need</Header>
      </Item>
      <Item left ml>
        <PlaceholderImage />
        <Text>
          Superhero To-Do List allows you to work with unique features not found
          in any other To-Do List
        </Text>
      </Item>
    </Wrapper>
  </Component>
);

export default LeftSection;
