import styled from "src/styles/styled";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.color.mintGreen};
`;

const Footer = () => {
  return <Container></Container>;
};

export default Footer;
