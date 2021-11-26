import styled from "@emotion/styled";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    background: #0197f6;
    width: 35%;
    border-radius: 15px;
    padding: 1rem;

    .header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.5rem;
      .modal-heading {
        font-size: 2.5rem;
      }
      .header-hr {
        border: 3px solid;
        border-radius: 10px;
      }
    }
  }
`;
