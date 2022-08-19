import styled from 'styled-components';

export const Container = styled.div`

`;
export const Carousel = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;
export const ConfArea = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const AreaBanner = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Item = styled.div`
    margin: 0 40px;
    cursor: pointer;
`;
export const title = styled.span`
    margin: 20px 0 50px 0;
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
`;

export const FranqArea = styled.aside`
    margin: 100px 0;
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const AreaLogo = styled.div`
    width: 85%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;