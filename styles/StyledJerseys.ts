import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LeftSide = styled.aside`
    width: 100%;
    height: 50px;
    margin-bottom: 20px ;
`;
export const RightSide = styled.main`
    width: 100%;
`;
export const AreaProducts = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 60px 30px;
    flex-wrap: wrap;
`;
export const Filter = styled.div`
    margin: auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Title = styled.span`
    font-size: 34px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;

export const FilterSelect = styled.select`
    border: 1px solid #acacac;
    background-color: transparent;
    padding: 6px 2px;
    font-size: 16px;
    border-radius: 2px;
    option{
        color: #565656;
    }
`;
export const FilterArea = styled.div`
    span{
        color: #565656;
    }
`;
