import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'


const Header = () => {
  return (
    <>
        <Header1>
            <Left>
                <h1>Develop<span>er</span></h1>
            </Left>
            <Right>
                <Link to="about" smooth={true} duration={500}><Data><h4>About Me</h4></Data></Link>
                <Link to="skills" smooth={true} duration={500}><Data><h4>Skills</h4></Data></Link>
                <Link to="projects" smooth={true} duration={500}><Data><h4>Projects</h4></Data></Link>
                <Link to="experience" smooth={true} duration={500}><Data><h4>Experience</h4></Data></Link>
                <Link to="contact" smooth={true} duration={500}><Data><h4>Contact</h4></Data></Link>
                <Button><h4>Join With Me</h4></Button>
            </Right>
        </Header1>
    </>
  )
}


const Header1=styled.div`
    display:flex;
    align-items:center;
    color:#fff;
    background-color:black;
`;
const Left=styled.div`
    flex:0.4;
    text-align:center;
    font-family:"Alata",sans-serif;
    letter-spacing:0.5px;
    padding:20px 0;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    span{
        color:#f64c08;
    }   
`;
const Right=styled.div`
    display:flex;
    flex:0.6;
    justify-content:space-evenly;
    align-items:center;
`;
const Data=styled.div`
    font-size:18px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    font-family: "Crimson Text",serif;
    padding: 20px 0;
    letter-spacing: 1px;
    &:hover{
        transform: scale(1.09);
        background-color: #f64c08;
        padding: 5px 20px;
        border-radius: 3px;
        letter-spacing: 1px;
        font-family: "Crimson Text",serif;
        font-size: 18px;
        cursor: pointer;
    }
`;
const Button=styled.div`
    background-color: #f64c08;
    color:white;
    padding: 5px 20px !important;
    border-radius: 3px;
    cursor: pointer;
`;

export default Header



