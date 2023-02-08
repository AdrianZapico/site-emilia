import styled from "styled-components";



export const Centralizer = styled.div`
   
   display: flex;
    justify-content: center;
    text-align: center;

`


export const TextAreaAi = styled.textarea`
width: 90%;
justify-content: space-around;
flex-direction: column;
resize: none;
border: none;
background-color: #3f3f3f;
color: white;
font-size:25px;
text-align: justify;


&:focus{
    border: 3px solid green;
}
`
export const TextAreaQuestion = styled.textarea`

width: 30%;
margin: 10px;
resize: none;
border: none;
background-color: #3f3f3f;
color: white;
font-size:25px;
text-align: justify;
&:focus{
    border: 3px solid blue;
}


`