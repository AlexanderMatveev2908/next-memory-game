import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const CounterBoxStyled = styled.div`
  padding: 10.5px 32px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: var(--green__0);
  border-radius: 5px;

  .label,
  .value {
    font-weight: 700;
  }

  .label {
    color: var(--green__4);
    font-size: var(--h__xs);
  }

  .value {
    color: var(--green__3);
    font-size: var(--btn__md);
  }

  ${resp("md")} {
    padding: 16px 22.5;
    grid-template-columns: repeat(2, 1fr);

    .label {
      font-size: var(--h__sm);
      justify-self: start;
    }

    .value {
      font-size: var(--h__lg);
      justify-self: end;
    }
  }
`;
