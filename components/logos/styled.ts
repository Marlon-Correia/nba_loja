import styled from 'styled-components';

export const Item = styled.a`
    width: 140px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .4s;
    :hover{
        opacity: .7;
    }
    img{
        scale: 0.9;
    }
`;