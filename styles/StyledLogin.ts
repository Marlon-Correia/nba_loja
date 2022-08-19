import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const LeftSide = styled.main`
    height: 70%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
    -moz-box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
    box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
`;
export const RightSide = styled.aside`
    height: 70%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
    -moz-box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
    box-shadow: 6px -1px 40px -24px rgba(153,153,153,0.64);
`;
export const AreaInfo = styled.section`
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.span`
    color: #444;
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
`;
export const InputArea = styled.div`
    width: 100%;
    height: 160px;
`;
export const Button = styled.button`
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
    padding: 10px 0;
    color: #fff;
    cursor: pointer;
    background-color: #000;
    border-radius: 3px;
`;
export const LabelError = styled.label`
    font-size: 16px;
    color: #f00;
`;
export const LabelSignUp = styled.label`
    margin-top: 15px;
    font-size: 16px;
`;
export const Strong = styled.strong`
    cursor: pointer;
    a {
        text-decoration: none;
        color: #444;
    }
`;