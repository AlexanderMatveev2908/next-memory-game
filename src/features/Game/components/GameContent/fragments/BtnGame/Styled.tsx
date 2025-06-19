import { resp } from "@/core/lib/style";
import styled from "styled-components";

type PropsType = {
  $fsz?: string;
  $fsz_md?: string;
  $bg: string;
};

export const BtnGameStyled = styled.button<PropsType>`
  background: ${({ $bg }) => $bg};
  border-radius: 60px;

  .label {
    font-size: ${({ $fsz }) => $fsz};
    font-weight: 700;
    color: var(--white__1);
  }

  ${resp("md")} {
    font-size: ${({ $fsz_md }) => $fsz_md};
  }
`;
