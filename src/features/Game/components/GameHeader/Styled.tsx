import styled from "styled-components";
import { resp } from "@/core/lib/style";

export const GameHeaderStyled = styled.div`
  top: 24px;
  left: 24px;
  right: 24px;
  max-width: 327px;
  margin: auto;

  ${resp("md")} {
    top: 37px;
    left: 40px;
    right: 40px;
    max-width: 689px;
  }

  ${resp("lg")} {
    max-width: 1100px;
  }
`;
