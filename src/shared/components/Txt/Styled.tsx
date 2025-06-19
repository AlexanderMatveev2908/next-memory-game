import { resp } from "@/core/lib/style";
import styled from "styled-components";
import { PropsTypeTxt } from "./Txt";

export const TxtStyled = styled.div<Omit<PropsTypeTxt, "txt">>`
  color: ${({ $clr }) => $clr ?? "var(--white__1)"};
  font-size: ${({ $fsz }) => $fsz ?? "var(--h__lg)"};
  font-weight: 700;

  ${resp("md")} {
    font-size: ${({ $fsz_md }) => $fsz_md ?? "var(--h__xl)"};
  }

  ${resp("lg")} {
    font-size: ${({ $fsz_lg }) => $fsz_lg ?? ""};
  }
`;
