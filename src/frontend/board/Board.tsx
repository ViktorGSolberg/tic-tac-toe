import * as React from 'react';
import styled from "styled-components";

const BoardContainer = styled.div`
margin: auto;
width: 30%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 2rem;
margin-bottom: 2rem;
`;

const Box = styled.div`
background-color: #C86752;
height: 10rem;
width: 10rem;
border: 2px solid black;
`;

interface Props {
    size: number;
}

const Board: React.FC<Props> = ({size}) => {

    const handleClick = () => {
        console.log('click');
    }

    return (
        <BoardContainer>
            {Array.from({length: size*size}, (v, i) => i).map((num, index) => {
                return <Box onClick={handleClick} key={index}/>
            })}
        </BoardContainer>
        )
}

export default Board