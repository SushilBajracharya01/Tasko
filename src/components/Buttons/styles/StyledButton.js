import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 0.3em 1em;
  font-size: 1.6rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: transform 100ms;
  font-family: "Outfit", sans-serif;
  :hover {
    transform: translateY(-5px);
  }
`;
