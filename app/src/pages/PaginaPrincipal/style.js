import styled from 'styled-components';

export const Container = styled.div`


.form .input .inputBox input {
    width: 150px;
    height: 150px;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: 5px 15px;
    color: #fff;
    font-size: 18px;
    color: #03a9f4;
    box-shadow: inset 22px 22px 60px rgba(255,255,255,0.05),
                inset  22px 22px 60px rgba(0,0,0,0.5); 
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    border: 0;
    
}
.form .input .inputBox input:hover {
    color: #355784;
    background: #e0e0e0;
    box-shadow: 0 0 10px #f4f4f4,
                0 0 40px #f4f4f4,
                0 0 80px #f4f4f4;
      
}


 .form .input .inputBox input[type="submit"] {
    margin-top: 20px;
     box-shadow:  -5px -5px 1px #FF0047,
                  5px 5px 2px #00bcd4; 
 }
 .form .input .inputBox input[type="submit"]:active {
     color: #006c9c;
     margin-top: 20px;
     box-shadow:  inset -2px -2px 6px #FF0047,
                  inset 2px 2px 6px #00bcd4; 
 }
 .form .input .inputBox input::placeholder {
     color: #555;
     font-size: 18px;
 }

`;