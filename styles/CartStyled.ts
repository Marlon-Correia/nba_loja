import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 75%;
    margin: 40px auto;
`;
export const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
    -moz-box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
    box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
`;
export const Info = styled.div`
    width: 100%;
    height: 10px;
    margin-top: 30px;
    display: flex;
    gap: 10px;
    span{
        font-weight: bold;
        color: #565656;
        margin: 0;
        padding: 0;
    }
`;
export const PagArea = styled.div`
    margin: 70px 0;
    display: flex;
    section{
        width: 50%;
        min-height: 45vh;
    }
    .CEP{
        display: flex;
        gap: 1px;
        flex-direction: column;
        input{
            width: 45%;
            border: 1px solid #565656;
        }

        button{
            width: 25%;
            background-color: #00dd2c;
            color: #000;
        }

        .RES{
            display: none;
            width: 70%;
            height: 70%;
            background-color: #00dd2c;
        }
    }

    .PAY{
        display: flex;
        justify-content: flex-end;
        .Area-Prices{
            display: flex;
            flex-direction: column;
            width: 88%;
            height: 100%;
            align-items: flex-end;
            span{
                width: 100%;
                display: flex;
                justify-content: space-around;
                font-size: 25px;
                color: #00dd2c;
            }
        }
    }
`;
export const Jerseys = styled.div`

`;
export const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    color: #00bb4c;
    font-weight: bold;
`;
export const Product = styled.div`
    width: 38%;
    height: 100%;
    span{
        margin-left: 5%;
    }
`;
export const Qt = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
export const SubTotal = styled.div`
    
`;
export const Price = styled.div`

`;

export const PriceArea = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    div {
        margin: 0 30%;
    }
`;
export const ButtonCep = styled.div`
    display: flex;
    margin-bottom: 3%;
`;
