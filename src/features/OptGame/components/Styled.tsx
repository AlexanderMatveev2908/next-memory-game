"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const OptGameStyled = styled.div`
  gap: 48px;
  width: 327px;
  height: 418px;

  ${resp("md")} {
    gap: 80px;
    width: 654px;
    height: 600px;
  }
`;
