import styled from "styled-components";

export const FooterContainer = styled.nav`
  display: flex;
  background-color: #32327a;
  justify-content: space-between;
  padding: 3rem;
  height: 10rem;
  border-top: 2px solid red;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 15rem;
`;

export const Image = styled.img`
  width: 80px;
  height: 45px;
`;
export const Label = styled.label`
  color: white;
  font-weight: bold;
  font-weight: ${(props) => (props.isBold ? "bold" : "unset")};
`;
