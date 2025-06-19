import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const GameFooterStyled = styled.div`
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 100;

  display: flex;
  justify-content: center;
  max-width: fit-content;
  margin: auto;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    .wrapper__counter_box {
      width: 151px;
    }

    ${resp("md")} {
      gap: 32px;

      .wrapper__counter_box {
        width: 255px;
      }
    }
  }
`;
