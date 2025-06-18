import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const RowChoiceStyled = styled.div`
  gap: 8px;

  .label {
    font-size: var(--h__xs);
    font-weight: 700;
    color: var(--green__4);
  }

  .row_btns {
    gap: 8px;
  }

  .wrap__choice_btn {
    /* height: 40px; */
  }

  ${resp("md")} {
    gap: 16px;

    .label {
      font-size: var(--h__md);
    }

    .row_btns {
      gap: 32px;
    }

    .wrap__choice_btn {
      /* height: 52px; */
    }
  }
`;
