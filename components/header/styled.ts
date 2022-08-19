import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
    -moz-box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
    box-shadow: -1px 9px 18px 0px rgba(85,85,85,0.10);
`;
export const ZapArea  = styled.div`
    background-color: #000;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TopHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    @media (max-width : 700px) {
        display: none;
    }
`;
export const Input = styled.input`
    width: 840px;
    height: 22px;
    border: none !important;
    padding: 10px;
    background-color: transparent;
    :active{
        border: none;
    }
`;
export const AreaLogo = styled.div`
    width: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const AreaIcons = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: #000;
    }
`;
export const AreaSearch = styled.div`
    width: 66%;
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const SearchBar = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    margin: 0 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #ccc;
`;
export const Icon = styled.div`
    margin: 0 5px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    :hover {
        div{
            padding: 40px 0;
        }
        section{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 13vh;
            z-index: 20;
            align-items: center;
        }
    }
`;
export const ButtonArea = styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const Text = styled.span`
    color: #fff;
    font-size: 14px;
`;


export const BottomHeader = styled.div`
    width: 100%;
    height: 40px;
    @media (max-width : 700px) {
        display: none;
    }
`;
export const AreaUser = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;
    p{
        color: #000;
    }
`;
export const AreaInfo = styled.section`
    background-color: #f8f8f8;
    font-size: 14px;
    display: none;
    height: 100px;
    width: 160px;
    cursor: default;
    padding: 10px;
    border-radius: 3px;
    p, a{
        color: #000;
        cursor: pointer;
        margin: 3px 0;
    }
    :hover{
            position: absolute;
            top: 14vh;
            z-index: 10;
    }
`;
export const QtCart = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    color: white;
    position: absolute;
    top: 8vh;
    right: 3vw;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AreaNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    @media (max-width : 700px) {
        transform: translateX(100%);
        flex-direction: column;
        position: absolute;
        top: 110px;
        right: 0;
        width: 50vw;
        height: 80vh;
        background-color: #f2f2f2;
        justify-content: flex-start;
    }
`;
export const NavItem = styled.div`
    padding: 0 22px;
    font-size: 22px;
    font-family: sans-serif;
    :hover{
        a{
            border-bottom: 1px solid #111;
        }
    }
    @media (max-width : 700px) {
        margin: 15px 0;
        opacity: 0;
    }
`;







export const MobileArea = styled.div`
    width: 100%;
    height: 80px;
    display: none;
    align-items: center;
    justify-content: space-between;
    @media (max-width : 700px) {
        display: flex;
    }
`;
export const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-right: 3%;
`;
export const Line = styled.div`
    width: 32px;
    height: 2px;
    background-color: #000;
    margin: 4px;
`;