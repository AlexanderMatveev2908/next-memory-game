import { resp } from "@/core/lib/style";
import styled from "styled-components";

type PropsType = {
  $fsz?: string;
  $fsz_md?: string;
  $iconSize: string;
  $iconSIze_md: string;
  $bgServer: string;
};

export const BtnGameStyled = styled.button<PropsType>`
  border-radius: 60px;
  background: transparent;

  .label {
    font-size: ${({ $fsz }) => $fsz};
    font-weight: 700;
    color: var(--white__1);
  }

  .icon {
    width: ${({ $iconSize }) => $iconSize};
    height: ${({ $iconSize }) => $iconSize};
  }

  .deep_show {
    perspective: 9999px;
  }

  .client,
  .server {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
  }

  .client {
    background: var(--green__3);
    min-width: 100%;
    min-height: 100%;
  }
  .server {
    transform: rotateY(180deg);
    background: ${({ $bgServer }) => $bgServer};
  }

  ${resp("md")} {
    font-size: ${({ $fsz_md }) => $fsz_md};

    .icon {
      width: ${({ $iconSIze_md }) => $iconSIze_md};
      height: ${({ $iconSIze_md }) => $iconSIze_md};
    }
  }
`;
