import * as React from "react";
import styled from "styled-components";

const StandardButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 1rem;
  cursor: pointer;
  width: 16rem;
  align-self: center;
`;

interface Props {
    onClick: () => void;
}

const RegularButton: React.FC<Props> = ({onClick, children}) => {

    return (
        <StandardButton onClick={onClick}>
            {children}
        </StandardButton>
    )
}

export default RegularButton;