import styled from "@emotion/styled";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.color.blueViolet};
`;

const Footer = () => {
  return <Container></Container>;
};

export default Footer;
