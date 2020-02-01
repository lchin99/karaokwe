import styled from "styled-components";
import { brightPink, pureWhite } from "../Base/colors";

export const Button = styled.button`
  background-color: ${pureWhite};
  border: 1px solid ${pureWhite};
  color: ${brightPink};
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 15px;
  margin: 10px;
  min-width: 200px;
  &:hover {
    cursor: pointer;
    background-color: ${brightPink};
    color: ${pureWhite};
  }
  &:focus {
    outline-color: ${brightPink};
  }
`