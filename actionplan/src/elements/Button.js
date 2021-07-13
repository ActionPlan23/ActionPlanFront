import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const {hovershadow, shadow,position,bgcolor, fontcolor, children, _onClick, margin, padding, width, height  } = props;

    const styles = {
        margin: margin,
        padding: padding,
        width: width,
        bgcolor: bgcolor,
        fontcolor: fontcolor,
        height: height,
        shadow:shadow,
        hovershadow:hovershadow
        
     
    }

    if(position) {
        return(
            <FloatBtn  onClick={_onClick}{...styles} >{children}</FloatBtn>
        )
    }
    else{
        return (
            <Btn onClick={_onClick} {...styles}>
                {children}
            </Btn>
        );
    }
  
};

Button.defaultProps = {
    children : null,
    _onClick : () => {},
    margin: false,
    padding: "12px 0px",
    width: "100%",
    bgcolor: false,
    fontcolor: false, 
    height: "40px",
    position:false,
    shadow:"",
    hovershadow:""


}


const Btn = styled.button`
  width: ${(props)=> (props.width)};
  height: ${(props)=> (props.height)};
  padding: ${(props)=> (props.padding)};
  margin: ${(props)=> (props.margin)};
  border: 0;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  ${(props) => (props.bgcolor ? `background-color: ${props.bgcolor};` : "")}
  ${(props) => (props.fontcolor ? `color: ${props.fontcolor};` : "")}
  box-shadow: ${(props)=> (props.shadow)};
  &:hover {

      box-shadow:${(props)=> (props.hovershadow)};
  }
 

`

const FloatBtn = styled.button`
  position: fixed;
  bottom: 80px;
  right:100px;
  width:100px;
  height:100px;
    border-radius: 100px;
    border:none;
    background-color: white;
    display: block;
    text-align: center;
   
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    font-size: 50px;
    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;;
        transform:  ${(props)=> props.hovertransition};
    }
`;
export default Button;