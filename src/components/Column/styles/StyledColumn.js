import styled from "@emotion/styled";

export const StyledColumn = styled.div`
  width: 100%;
  margin: 0 1rem;
  padding: 0.5rem;
  background: #f3faff;
  border-radius: 5px;
  color: #000000;
  .title {
    margin-bottom: 0.5rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    min-height: 150px;
    height: 80%;
  }
`;
