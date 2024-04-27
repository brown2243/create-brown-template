import styled from "src/styles/styled";

const Container = styled.header`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.color.mintGreen};
`;

const Header = () => {
  return <Container></Container>;
};

export default Header;
