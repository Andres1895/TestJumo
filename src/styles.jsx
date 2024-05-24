import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  height: auto;
  background-color: #32327a;
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 20rem;
`;
export const Title = styled.h1`
  color: ${(props) => (props.isHighlighted ? "#ffc958" : "white")};
  text-align: left;
  margin: 0;
`;

export const Text = styled.label`
  color: white;
  font-weight: bold;
  font-size: small;
  margin: 4rem 0rem 3rem 0rem;
  padding-right: 3rem;
  text-align: left;
`;

export const Image = styled.img`
  box-shadow: 0 87px 33px rgba(7, 4, 9, 0.1);
`;

export const FormContainer = styled(InfoContainer)`
  margin: 0rem 1rem;
  padding: 3rem 0rem;
  align-items: center;
`;

export const StyledButton = styled.button`
  height: 3rem;
  width: 20rem;
  min-width: 10rem;
  background: #feb864;
  border-radius: 5px;
  border: navajowhite;
  font-weight: bold;
`;
