import  styled from 'styled-components';


export const Body = styled.body`
 .form {
     position: relative;
     width: 350px;
     padding: 40px 40px 60px;
     background: #131419;
     border-radius: 10px;
     text-aling: center;
     /* box-shadow: -5px -3px 10px rgba(255,255,255,0.09),
                  5px 3px 13px rgba(0,0,0,0.4);  */
 }
 .form::before {
            content: '';
            position: absolute;
            top: 2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            z-index: -1;
 }

 .form::after {
    content: '';
            position: absolute;
            top: 12px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            z-index: -2;
            filter: blur(20px)
 }

 .form::before,
 .form::after {
    background: linear-gradient(235deg, 
        #FF0047, #242426, #00bcd4 );
 }
 .form h2 {
     color: #c7c7c7;
     font-weight: 500;
     text-transform: uppercase;
     letter-spacing: 4px;
 }
 .form .input {
     text-aling: left;
     margin-top: 40px;
 }
 .form .input .inputBox {
     margin-top: 20px
 }

 .form .input .inputBox label {
     display: block;
     color: #868686;
     margin-bottom: 5px;
     font-size: 18px;
 }
 .form .input .inputBox input {
    width: 100%;
    height: 50px;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    padding: 5px 15px;
    color: #fff;
    font-size: 18px;
    color: #03a9f4;
    box-shadow: inset -2px -2px 6px rgba(255,255,255,0.05),
                inset  2px 2px 6px rgba(0,0,0,0.5); 
 }

 .form .input .inputBox input[type="submit"] {
     margin-top: 20px;
     box-shadow:  -2px -2px 6px rgba(255,255,255,0.05),
                   2px 2px 6px rgba(0,0,0,0.5); 
 }
 .form .input .inputBox input[type="submit"]:active {
     color: #006c9c;
     margin-top: 20px;
     box-shadow:  inset -2px -2px 6px rgba(255,255,255,0.05),
                  inset 2px 2px 6px rgba(0,0,0,0.5); 
 }
 .form .input .inputBox input::placeholder {
     color: #555;
     font-size: 18px;
 }
 .esquecido {
     margin-top: 30px;
     color: #555;
 }
 .esquecido a {
     color: rgba(255, 0, 71, .45);
     text-decoration: none;
 }

 .informacao {
    .ocupacao{ 
        width: 100%;
        height: 100%;
        background: white;
        color: white;
    }
 }
`;
