"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const CardFormStyled = styled.div`
  background: var(--white_1);
  padding: 40px 25.5px;
  border-radius: 10px;
  gap: 40px;

  .choices {
    gap: 24px;

    ${resp("md")} {
      gap: 32px;
    }
  }

  ${resp("md")} {
    gap: 32px;
    padding: 75px 54.5px;
    border-radius: 20px;
  }
`;
