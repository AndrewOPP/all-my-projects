import styled from "styled-components";

export const StyledAside = styled.aside`
position: fixed;
background-color: rgb(0,134,194);
height: 970px;
width: 300px;
box-shadow: rgba(0, 0, 0, 0.3) 10px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
export const ProfileDiv = styled.div`
background-color: rgb(0,120,174);
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
padding: 30px;
gap: 20px;
padding-top: 20px;
padding-bottom: 20px;

`

export const ImgDiv = styled.div`
display: flex;
gap: 10px;
align-items: center;
`

export const ProfileText = styled.p`
color: white;
font-size: 22px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin: 0;
font-weight: 700;
`

export const ProfileTextProject = styled.p`
margin: 0;
font-weight: 100;
color: white;
font-size: 20px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const ProjectsUl = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 40px;
margin-top: 40px;
padding-left: 20px;
`

export const ProjectsUlItem = styled.li`
user-select: none;
cursor: pointer;
font-size: 22px;
color: ${({active}) => active ? "black" : "white"};
font-weight: 500;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
padding: 5px;
width: 205px;
display: flex;
gap: 15px;
transition: all 300ms;
&:hover {
    color: black;
}
`   

