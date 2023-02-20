import styled from "styled-components/macro";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 25vh;
  background-color: ${(props) => (props.bg ? "#f9fafb" : "#fff")};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800%;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  justify-content: center;
`;

export const Subheader = styled.h4`
  margin: 0 0 1rem 0;
  font-weight: 400;
  font-size: 0.9rem;
  color: #a0aec0;
`;

export const Header = styled.h3`
  margin: 0 0 2rem 0;
  font-family: "Raleway", sans-serif;
`;

export const PlaceholderImage = styled.div`
  width: 400px;
  height: 200px;
  border: 1px solid #cbd5e0;
  border-radius: 0.75rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

export const Text = styled.p`
  margin: 2rem 0 0 0;
  color: #a0aec0;
  font-size: 0.9rem;
  max-width: 402px;
  text-align: center;
`;

const getAlign = (props) => {
  if (props.center) {
    return "center";
  } else if (props.right) {
    return "flex=end";
  } else {
    return "flex-start";
  }
};

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => getAlign(props)};
  margin-right: ${(props) => (props.mr ? "2rem" : 0)};
  margin-left: ${(props) => (props.ml ? "2rem" : 0)};
`;
