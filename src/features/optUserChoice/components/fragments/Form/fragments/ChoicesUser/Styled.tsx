import styled from "styled-components";
import { resp } from "@/core/constants/breakpoints";

export const ChoicesUserStyled = styled.div`
  gap: 24px;

  ${resp("md")} {
    gap: 32px;
  }
`;
