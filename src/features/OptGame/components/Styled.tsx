"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const CardFormStyled = styled.form`
  background: var(--white__1);
  padding: 40px 25.5px;
  border-radius: 10px;
  gap: 40px;

  .choices {
    gap: 24px;

    ${resp("md")} {
      gap: 32px;
    }
  }

  .wrap__submit_btn {
    height: 48px;
  }

  ${resp("md")} {
    gap: 32px;
    padding: 75px 54.5px;
    border-radius: 20px;

    .wrap__submit_btn {
      height: 70px;
    }
  }
`;
