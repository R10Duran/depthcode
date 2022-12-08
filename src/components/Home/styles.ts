import styled from "styled-components";
import backgroundImage from '../../assets/imgs/background.jpeg';

export const Container = styled.div`
    height: 90vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
`

export const Content = styled.div`
    max-width: 1220px;
    margin: 0 auto;

    padding: 2rem 1rem 2rem;


    .title {
        margin: 0 auto 0;
        margin-bottom: 2rem;
        h1 {
            font-size: 4rem;
            margin-bottom: 2rem;
            /* text-shadow: #000 5px 5px 0px; */
        }
        p {
            color: var(--transparentBlack);
        }
    }    

    .conjButton {
        button {
            padding: 1rem 1.3rem;
            background-color: #fff;
            margin: 0 1rem 0 0;
            border: none;
            border-radius: 0.3rem;
            transform: skewX(-5deg);
            font-weight: 700;
            transition: all 0.2s;
            box-shadow: 7px 5px #000;
        }

        .const {
            &:hover {
                background-color: var(--background2);
                color: var(--fontColor);
                box-shadow: 9px 7px #000;
            }
        }

        .red {
            background-color: var(--red);
            color: var(--fontColor);
            &:hover {
                background-color: var(--fontColor);
                color: #000;
                box-shadow: 9px 7px #000;
            }

        }
    }

`