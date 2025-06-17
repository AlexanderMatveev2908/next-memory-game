"use client";

import { resp } from "@/core/constants/breakpoints";
import styled from "styled-components";

export const OptUserChoiceFormStyled = styled.div`
  padding: 25.5px 40px;
  background: var(--white_1);
  border-radius: 10px;

  ${resp("md")} {
    border-radius: 20px;
    padding: 54.5px 75px;
  }
`;
