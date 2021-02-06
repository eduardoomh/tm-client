import styled from "styled-components";

export const DivStyles = styled.div`
    display: grid;
    grid-template-columns: 4rem 1fr 3rem;
    grid-template-rows: 1fr;
    align-items: center;
    gap: 1rem;
    min-width: 16rem;
    max-width: 16rem;
    min-height: 7rem;
    max-height: 7rem;
    padding: .5rem;

    .img-container{
        img{
            width: 4rem;
        }
    }

    .nombre-container{
       p{
           font-size: 1.3rem;
           margin: 0;
           padding: 0;
           color: black;
       }
    }

    .icono-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        padding: 2rem;

        &:hover{
            transition: .2s ease-in;
            color: rgba(170, 32, 32, 0.87);
            
        }
    }

    &:hover{
        cursor: pointer;
    }
`;

export const PopupMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;

    li{
        font-size: 1rem;
    }
`;