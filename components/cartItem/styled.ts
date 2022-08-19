import styled from "styled-components";

export const Container = styled.div`
    margin: 18px auto;
    display: flex;
    gap: 10px;
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 200px;
    border-radius: 5px;
`;
export const DescArea = styled.div`
    width: 38%;
    height: 100%;
    display: flex;
    align-items: center;
`;
export const QtArea = styled.div`
    width: 25%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-size: 22px;
        color: #00bb2d;
        margin: 0 20%;
    }
`;
export const PriceArea = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-size: 22px;
        color: #00bb2d;
        margin: 0 20%;
    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    height: 75%;
    p{
        
        color: #565656;
        font-weight: bold;
    }
    span{
        
        color: #565656;

    }
`;
export const ChangeValue = styled.div`
    cursor: pointer;
    width: 35px;
    height: 35px;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 18px;
    }
`;
export const ChangeValueA = styled.div`
cursor: pointer;
    width: 35px;
    height: 35px;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 18px;
    }
`;
