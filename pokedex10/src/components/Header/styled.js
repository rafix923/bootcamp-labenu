import styled from "styled-components";
import { backgroundColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
  height: 8vh;
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

export const LeftHeaderButton = styled.button`
  position: absolute;
  left: 10px;
`;

export const RightHeaderButton = styled.button`
  position: absolute;
  right: 10px;
`;