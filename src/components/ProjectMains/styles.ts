import styled from "styled-components";

export const Content = styled.div`
    max-width: 1220px;
    margin: 0 auto;

    padding: 2rem 1rem 2rem;

    .conjProjectMains {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        .cardProjectMains {
            width: 100%;
            height: 15rem;
            background-color: #fff;
            margin: 0 1rem;
            border-radius: 0.5rem;
            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }


`