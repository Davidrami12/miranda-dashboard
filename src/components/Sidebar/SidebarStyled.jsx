import styled from 'styled-components';
import { MdMenuOpen } from 'react-icons/md';

const MenuIcon = styled(MdMenuOpen)`

    transform: ${props => props.rotated ? 'rotate(-180deg)' : 'none'};
    transition: transform 0.3s ease-in-out;
`;


const NavContainer = styled.div`
    width: ${props => props.display};
    height: 100vh;
    box-shadow: 13px 3px 40px #00000005;
    background-color: #FFFFFF;
    transition: width 0.3s;
    overflow: visible;
    position: relative;
`;

const MenuButton = styled.button`
    transform: rotate(0deg);
    position: absolute;
    right: -60px;
    top: 45px;
    background-color: transparent;
    border: none;

    .menu{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

const UserCard = styled.div`
    margin-left: 15%;
    padding-bottom: 10px;
    overflow: hidden;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    overflow: hidden;

    & > img {
        width: 250px;
    }
`;

const Navigation = styled.nav`
overflow: hidden;
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        a{
            text-decoration: none;
        }
    }
`;

const Link = styled.li`
    width: 100%;
    display: flex;
    height: 70px;
    border-radius: 6px;
    align-items: center;
    gap: 20px;
    transition: all 0.3s;
    padding: 0.5rem 0rem 0.5rem 0rem;
    
    p, .icon{
        color: black;
        transition: all 0.3s ease-in-out;
    }

    &:hover p,
    &:hover .icon{
        color: #E23428;
        
    }

    div{
        margin-right: 15%;
        transition: background-color 0.2s;
        width: 8px;
        height: 100%;
        background-color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#FFFFFF";
        }
    }};;
        border-radius: 0 8px 8px 0;
    }

    p {
        color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#799283";
        }
    }};
        font: normal normal 600 18px/27px Poppins;
        text-decoration: none;
    }

    .icon{
        color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#799283";
        }
    }};
        width: 27px;
        height: 27px;
    }
`;

const NavigationDescription = styled.p`
    padding-left: 15%;
    overflow: hidden;
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #212121;
`;

const NavigationRights = styled.p`
    padding-left: 15%;
    overflow: hidden;
    color: #799283;
    font-size: 14px;
`;

const NavigationAuthor = styled.p`
    padding-left: 15%;
    overflow: hidden;
    color: #799283;
    font-size: 14px;
    margin-top: 30px;
`;

export {
    NavContainer,
    MenuButton,
    LogoContainer,
    Navigation,
    UserCard,
    NavigationDescription,
    NavigationRights,
    NavigationAuthor,
    Link,
    MenuIcon
};