import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #32327a;
  padding: 2rem 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background-color: #ffc958;
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  width: 10rem;
`;
export const LabelButton = styled.label`
  font-weight: bold;
  font-size: smaller;
`;

export const Label = styled(LabelButton)`
  color: white;
  margin: 2rem;
  @media (max-width: 695px) {
    margin: 0rem 0.5rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
