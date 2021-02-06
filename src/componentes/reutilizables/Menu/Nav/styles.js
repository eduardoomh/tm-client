import styled from "styled-components";

export const NavStyles = styled.nav`
    display: flex;
    justify-content: flex-start;
    min-height: 20rem;
    padding: 0 0 2rem 0;
    border-bottom: 1px solid #aea8a8;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        list-style: none;
        padding: 0 1rem;
        min-width: 100%;

        li{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1.2rem;
            min-height: 2.5rem;
            max-height: 2.5rem;
            min-width: 100%;
            padding-left: .5rem;


            a{
                min-width: inherit;
                max-width: inherit;
                color: rgba(0, 0, 0, 0.80);

                i{
                    padding-right: 1.4rem;
                }
            }

            &:hover{
                background-color: #f4f3f3;
            }
        }

        .selected{
            background-color: #e8e8e8;
            border-radius: 0px;
            border-left: 2px solid red;
        }

    }
`;