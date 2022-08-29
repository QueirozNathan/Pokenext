import styled from "styled-components";

export const NewsContainer = styled.div`
    top: 400px;
    display: flex;
    justify-content: center;
    height: 150px;
    position: relative;
    z-index: 1;
    box-shadow: inset 0 0 1em black;
    background: #5b5b5b;
`

export const NewsP = styled.p`
    position: absolute;
    margin-top: 40px;
    font-size: 25px;
    font-weight: 700;
    color: #fff;

`

export const Label = styled.div``

export const Colorgreen = styled.a`
    color: #01BF71;
`
export const Button = styled.div`
    margin-left: 500px;
    margin-top: 100px;
    position: absolute;
    background: #01BF71;
    color: #fff;
    font-weight: bold;
    padding: 4px;
    width: 90px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        transition: 0.5s;
        background: #fff;
        color: #000;
    }
`