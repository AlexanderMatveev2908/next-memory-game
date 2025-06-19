import { resp } from "@/core/lib/style";
import styled from "styled-components";

type PropsType = {
  $gridSize: string;
};

export const GameContentStyled = styled.div<PropsType>`
  grid-template-columns: ${({ $gridSize }) => `repeat(${$gridSize}, 1fr)`};
  justify-items: center;
  gap: ${({ $gridSize }) => ($gridSize === "4" ? "8px" : "8px")};
  padding: ${({ $gridSize }) => ($gridSize === "4" ? "24px" : "27px")};
  max-width: fit-content;

  .cell {
    background: var(--green__3);
    border-radius: 60px;
    width: ${({ $gridSize }) => ($gridSize === "4" ? "74px" : "47px")};
    height: ${({ $gridSize }) => ($gridSize === "4" ? "74px" : "47px")};
  }

  ${resp("md")} {
    gap: ${({ $gridSize }) => ($gridSize === "4" ? "24px" : "8px")};

    .cell {
      width: ${({ $gridSize }) => ($gridSize === "4" ? "118px" : "47px")};
      height: ${({ $gridSize }) => ($gridSize === "4" ? "118px" : "47px")};
    }
  }
`;
