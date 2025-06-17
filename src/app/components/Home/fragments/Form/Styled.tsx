"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const OptUserChoiceFormStyled = styled.div`
  padding: 40px 25.5px;
  background: var(--white_1);
  border-radius: 10px;

  ${resp("md")} {
    border-radius: 20px;
    padding: 75px 54.5px;
  }
`;
