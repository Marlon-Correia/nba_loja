import styled from "styled-components";

export const InpuT = styled.input`
    outline: none;
    padding: 15px 20px;
    width: ${props => props.width}%;
    font-size: 16px;
    background-color: transparent;
    transition: all ease 0.5s;
    border-bottom: 1px solid #000;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 15px 0;
    :hover{
        border-bottom: 1px solid violet;
    }
`;