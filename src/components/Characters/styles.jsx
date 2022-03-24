import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

//export urlIMG = (props) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
    background-color: #ec1d24;
    height: 400px;
    width: 250px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 2px 5px rgb(0, 0, 0, 0.3);

    h2, 
    p {
        padding: 5px;
        text-align: justify;
        color: #fff;
    }

    img{
        height: 350px;
        width: 100%;
        background-size: cover;

        transition: all 0.5s ease-in-out;
    }

    &:hover {
        img {
            height: 100px;
        }
    }

`;

export const ButtonMore = styled.div`
    background: #ec1d24;
    height: 30px;
    color: #fff;
    cursor: pointer;
    box-shadow: 3px 2px 5px rgb(0, 0, 0, 0.3);
    margin: 20px auto;
    padding: 40px;
    border-radius: 10px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: darkred;
    }

    .icon {
        margin: 4px;
    }
`;
