"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const CardFormStyled = styled.div`
  background: var(--white_1);
  padding: 40px 25.5px;
  border-radius: 10px;
  gap: 40px;

  ${resp("md")} {
    padding: 75px 54.5px;
    border-radius: 20px;
  }
`;
