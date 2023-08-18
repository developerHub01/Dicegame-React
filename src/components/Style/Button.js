import styled from 'styled-components';

export const Button = styled.button`
    text-transform: capitalize;
    padding: 10px 20px;
    background: #000;
    color: #fff;
    border: 2px solid #000;
    width: 100%;
    max-width: 220px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s ease-in-out;

    &:hover{
        background: #fff;
        color: #000;
    }
    `
export const OutlinedBtn = styled(Button)`
    background: #fff;
    color: #000;
    
    &:hover{
        background: #000;
        color: #fff;
    }
`