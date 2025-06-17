"use client";

import styled from "styled-components";

export const OptUserChoiceHeaderStyled = styled.span`
  font-size: var(--h__lg);
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: var(--h__xl);
  }
`;
// interface PropsType {
//   $isActive: boolean;
// }

// export const OptUserChoiceHeaderStyled = styled.span<PropsType>`
//   font-size: var(--h__lg);
//   font-weight: 700;

//   color: ${({ $isActive }) => ($isActive ? "green" : "red")};

//   @media screen and (min-width: 768px) {
//     font-size: var(--h__xl);
//   }
// `;
