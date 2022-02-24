import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import AvatarImage from "../img/1.jpg"
import {Telegram } from "@styled-icons/boxicons-logos/Telegram";
import {Github} from "@styled-icons/boxicons-logos/Github"
import {Linkedin} from "@styled-icons/fa-brands/Linkedin"

function Sidebar(){
    return(
        <Container>
            <ProfileContainer>
                <Avatar src={AvatarImage}/>
                <Name>Anvar Abdurashidov</Name>
                <a href='#' target="_blank">
                    <CV>CV about</CV>
                </a>
            </ProfileContainer>
            <Links>
                <NavLink className="sidbar-nav-link" to="/">Home</NavLink>
                <NavLink className="sidbar-nav-link" to="/about">About</NavLink>
                <NavLink className="sidbar-nav-link" to="/project">Project</NavLink>
                <NavLink className="sidbar-nav-link" to="/contact">Contact</NavLink>
                <Icons>
                    <Telegram className='sidbar-icon' size={20}/>
                    <Github className='sidbar-icon' size={20}/>
                    <Linkedin className='sidbar-icon'size={20}/>
                </Icons>
            </Links>
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100% !important;
    border-radius: 2rem;
    background: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:3rem;
    overflow: hidden;
`

const ProfileContainer = styled.div`
    display: flex;
    padding: 10px; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Avatar = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`

const Name = styled.h1`
    padding: 5px;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
`

const Links = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #162349;
`

const CV = styled.div`
    padding: 12px 20px; 
    text-decoration: none;
    color: #fff;
    background: blue;
    font-weight: 600;
    border-radius: 23px;
`

const Icons = styled.div`
    display: flex;
    padding: 20px 10px;
    justify-content: start;
    align-items: center;
`


export default Sidebar;