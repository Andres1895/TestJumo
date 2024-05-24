import React from "react";
import { JumpLogo } from "../../assets";
import {
  HeaderContainer,
  PrimaryButton,
  LabelButton,
  Label,
  Options,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={JumpLogo}
        alt="Logo"
        style={{ width: "60px", height: "35px" }}
      />
      <Options>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Label>Our Approach</Label>
          <Label>Success Stories</Label>
          <Label>Blog</Label>
          <Label>Careers</Label>
        </div>
        <PrimaryButton>
          <LabelButton>GROW WITH US</LabelButton>
        </PrimaryButton>
      </Options>
    </HeaderContainer>
  );
};
export default Header;
