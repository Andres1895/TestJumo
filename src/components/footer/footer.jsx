import { JumpLogo } from "../../assets";
import { FooterContainer, Container, Image, Label } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Image src={JumpLogo} alt="Logo" />
        <Label>195 Broadway, 8th Floor</Label>
        <Label>New York, NY, 10007</Label>
      </Container>
      <Container>
        <Label isBold>Our Approach</Label>
        <Label isBold>Blog</Label>
        <Label isBold>About Us</Label>
      </Container>
      <Container>
        <Label isBold>Success Stories</Label>
        <Label isBold>Careers</Label>
        <Label isBold>Contact Us</Label>
      </Container>
      <Container>
        <Label isBold>Get in touch with us!</Label>
        <Label>hello@jump450.jump</Label>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
