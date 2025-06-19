import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const RowCounterStyled = styled.div`
  .label,
  .val {
    font-weight: 700;
  }

  background: var(--green__0);
  border-radius: 5px;
  padding: 11.5px 16px;

  .label {
    font-size: var(--h__xs);
    color: var(--green__4);
  }

  .val {
    font-size: var(--btn__sm);
    color: var(--green__3);
  }

  ${resp("md")} {
    padding: 16px 32px;

    .label {
      font-size: var(--h__sm);
    }

    .val {
      font-size: var(--btn__lg);
    }
  }
`;
