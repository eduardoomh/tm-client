import styled from "@emotion/styled";

export const Main = styled.main`
    padding: 1rem;
    min-height: 100vh;
    max-height: 100vh;
`;


export const Div = styled.div`
    display: flex;
    justify-content: center;
    div{
        display: grid;
        h1{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.6rem;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 10rem;
        }
    }
    }

    @media (min-width: 600px){
        min-height: 15rem;
        div{
            display: grid;
            grid-template-columns: .4fr 1fr;
            grid-template-rows: 1fr;
            justify-content: center;
            min-width: 450px;
            max-width: 450px;

            h1{
                grid-column: 2/3;
                grid-row: 1/2;
                display: flex;
                justify-content: flex-start;
                text-align: start;
                max-width: 100%;
        }

            div{
                grid-column: 1/2;
                grid-row: 1/2;
                display: inline-flex;
                justify-content: flex-start;
                max-width: 100%;
                min-width: 100%;
            }
        }
    }
`;

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-height: 50vh;
`;