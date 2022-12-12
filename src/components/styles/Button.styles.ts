import styled from 'styled-components';

interface Props {
    bg?: string;
    color?: string;
};

export const StyledButton = styled.button<Props>`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: 10px;
    border: 0;
    border-radius: 5px; 
    font-size: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`