import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const GamePopStyled = styled.div`
  padding: 28px 24px;
  background: var(--white__1);
  border-radius: 16px;
  gap: 24px;
  min-width: 327px;

  .header {
    padding: 0 21px;
    gap: 8px;
  }

  .content {
    gap: 8px;
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    .wrap_btn {
      height: 48px;
    }
  }

  ${resp("md")} {
    padding: 60px 55px;
    gap: 40px;
    min-width: 654px;

    .header {
      gap: 16px;
    }

    .content {
      gap: 16px;
    }

    .footer {
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;

      .wrap_btn {
        height: 52px;
      }
    }
  }
`;
