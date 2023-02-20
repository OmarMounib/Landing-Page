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

const RightSection = () => (
  <Component>
    <Wrapper row>
      <Item right mr>
        <PlaceholderImage />
        <Text>
          Superhero To-Do List allows you to work with unique features not found
          in any other To-Do List
        </Text>
      </Item>
      <Item>
        <Subheader>Incredible features</Subheader>
        <Header>Universal app to manage your tasks</Header>
      </Item>
    </Wrapper>
  </Component>
);

export default RightSection;
