import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Marvel', sans-serif;
    }

    body{
        margin: 0 50px;
        background: black;
    }

    main {
    max-width: 100rem;
    margin: 0 auto;
    padding: 7.8rem 1.2rem;
}
`;