import styled from "styled-components";

export const StyledDiv = styled.div`
z-index: 10;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-left: 300px;
display: flex;
flex-direction: row;
align-items: center;
/* width: 100%; */
height: 107px;
background-color: white;
padding-left: 50px;
/* padding-right: 200px; */
&svg {
    fill: grey;
}
`


export const StyledInput = styled.input`
margin-left: 10px;
width: 300px;
border-radius: 4px;
outline: none;
border: none;
height: 40px;
color: grey;
font-weight: 300;
font-size: 21px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const StyledButton = styled.button`
cursor: pointer;
margin-left: 1050px;
background-color: #70d25f;
color: white;
padding: 10px 20px 10px 20px;
border: none;
width: 130px;
height: 40px;
font-size: 18px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border-radius: 4px;
`