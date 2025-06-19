import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const GamePopStyled = styled.div`
  padding: 28px 24px;
  background: var(--white__1);
  border-radius: 16px;
  gap: 24px;

  .header {
    padding: 0 21px;
    gap: 8px;
  }

  .content {
  }

  ${resp("md")} {
    padding: 60px 55px;
    gap: 40px;

    .header {
      gap: 16px;
    }
  }
`;
