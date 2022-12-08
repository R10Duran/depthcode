import styled from 'styled-components';

export const Container = styled.header `
    background: var(--red);
    padding: 1rem 2rem;

    position: sticky;
    top: 0;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .logo{
        font-size: 1.6rem;
        font-weight: 900;
        cursor: pointer;
    }

    ul{
        display: flex;
        li{
            margin: 0 1rem 0 1rem;
            list-style: none;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 700;
            &:hover{
                color: var(--background2);
                /* border-bottom: 1px solid var(--red); */
            }
        }
    }

    .social{
        a{
            margin: 0 1rem;
        }
    }
`;