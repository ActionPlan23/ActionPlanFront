import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { bgcolor, fontcolor, children, _onClick, margin, padding, width, height  } = props;

    const styles = {
        margin: margin,
        padding: padding,
        width: width,
        bgcolor: bgcolor,
        fontcolor: fontcolor,
        height: height,
    }

    return (
        <Btn onClick={_onClick} {...styles}>
            {children}
        </Btn>
    );
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
  &:hover {
      background-color: red;
  }
  ${(props) => (props.bgcolor ? `background-color: ${props.bgcolor};` : "")}
  ${(props) => (props.fontcolor ? `color: ${props.fontcolor};` : "")}




`

export default Button;