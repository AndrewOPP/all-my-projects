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
position: absolute;
top: 33px;
right: 30px;
background-color: #70d25f;
color: white;
padding: 10px 20px 10px 20px;
border: none;
width: 140px;
height: 43px;
font-size: 18px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border-radius: 4px;
&:hover {
border: 1px solid black;
}
`

export const StyledForm = styled.form`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const StyledFormDivTech = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
margin-top: 20px;
`
export const StyledFormInputDiv = styled.div`
margin-top: 45px;
`
export const StyledFormHeader = styled.h2`
margin: 0;
margin-top: 20px;

color: black;
font-size: 38px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const StyledFormLabel = styled.label`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: black;
font-size: 24px;
margin-top: 10px;

`
export const StyledFormInput = styled.input`
border: none;
border-bottom: 1px solid black;
outline: none;
width: 100%;
margin-top: 15px;
font-size: 23px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
&::placeholder {
font-size: 22px;
opacity: 40%;
}

`
export const StyledFormTechP = styled.label`
margin: 0;
margin-top: -5px;
margin-right: 10px;
margin-left: 5px;
font-size: 20px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const StyledFormTechInput = styled.input`
cursor: pointer;
margin-top: -5px;
width: 18px;
height: 18px;
margin-left: 10px;
`
export const StyledFormButton = styled.button`
cursor: pointer;
width: 200px;
height: 50px;
margin-top: 50px;
margin-left: 130px;
background-color: rgb(0,134,194);
color: white;
border-radius: 8px;
border: none;
outline: none;
font-size: 24px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
transition: all 300ms;
&:hover {
    background-color: rgb(4, 110, 160);
}
`

export const StyledFormCloseButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: none;
outline: none;
background-color: white;
border-radius: 50%;
border: 1px solid black;
width: 33px;
height: 33px;
position: absolute;
top: 15px;
right: 15px;
transition: all 300ms;
&:hover {
    background-color: rgb(211, 211, 211);
}
`