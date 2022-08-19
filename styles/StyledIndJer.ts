import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 30px;
    margin: 3% 0;
`;
export const AreaPictures = styled.aside`
    width: 10%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    img{
        margin-left: 35%;
        cursor: pointer;
        :hover{
            opacity: .8;
        }
    }
`;
export const AreaMain = styled.main`
    width: 50%;
    margin: auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: auto;
        width: 100%;
        -webkit-transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
        :hover{
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
        }
    }
`;
export const AreaInfo = styled.div`
    width: 40%;
    height: auto;
`;
export const ContInfo = styled.div`
    width: 85%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Name = styled.span`
    font-size: 36px;
    font-weight: bold;
    line-height: 1.1;
`;
export const PriceArea = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin: 2px 0;
    }
`;
export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin: 5px 0;
    }
`;

export const Price = styled.span`
    font-size: 36px;
    font-weight: 600;
`;
export const InfoSelect = styled.select`
    border: 1px solid #acacac;
    background-color: transparent;
    width: 30%;
    padding: 10px 4px;
    font-size: 16px;
    border-radius: 2px;
    z-index: 3;
    option{
        color: #565656;
        margin: 0;
        padding: 0;
    }
`;
export const Button = styled.a`
    
    border: 1px solid #acacac;
    border-radius: 5px;
    font-size: 20px;
    width: 85%;
    height: 60px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    background-color: #229a00;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const QtArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
export const ChangeValue = styled.button`
cursor: pointer;
    width: 35px;
    height: 35px;
    border: 1px solid #565656;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 18px;
    }
`;
export const ChangeArea = styled.div`
    display: flex;
`;
