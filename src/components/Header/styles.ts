import styled from 'styled-components';

export const Container = styled.header `
    background: var(--background2);
    padding: 2rem 1rem 2rem;

    position: sticky;
    top: 0;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul{
        display: flex;
        li{
            margin: 0 1rem 0 1rem;
            list-style: none;
            cursor: pointer;
            transition: all 0.2s;
            &:hover{
                color: var(--red);
                /* border-bottom: 1px solid var(--red); */
            }
        }
    }

    a{
        text-decoration: none;
    }
`;