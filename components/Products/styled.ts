import styled from "styled-components";

export const Item = styled.div`
    width: 280px;
    height: 350px;
    transition: all ease 0.4s;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;
export const ImageArea = styled.div`

`;
export const InfoArea = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Name = styled.span`
    font-size: 15px;
    text-align: center;
`;
export const Preço = styled.span`
    font-size: 22px;
    margin-top: 10px;
`;