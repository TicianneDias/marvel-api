import styled from 'styled-components';

export const Nav = styled.div`
    background: #ec1d24;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const Logo = styled.a`
    padding: 1rem 0;

  img{
      width: 100px;
  }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;
export const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
    &:hover {
        transition: all 0.6s ease-in-out;
        color: black;
        padding: 15px;
        border-bottom: 2px solid black;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;