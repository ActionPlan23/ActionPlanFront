import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    const {children, placeholder, type, _onChange, value, textarea, width, border, border_radius,padding } = props;
    const styles = {width: width, border: border, border_radius: border_radius, padding: padding }
    if (textarea) {
        return (
        <React.Fragment>
            <Label>
                {children} 
            </Label>
            <Textarea rows="10" cols="50"
             value={value}
             onChange={_onChange}
             placeholder={placeholder}
             />
        </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Label>
                {children} 
            </Label>
            <RealInput
             type={type}
             placeholder={placeholder}
             onChange={_onChange}
             value={value}
             {...styles}
             />
        </React.Fragment>
    );
};


Input.defaultProps = {
    placeholder: "내용을 입력하세요",
    type: "text",
    _onChange: () => {},
    value: "",
    textarea: false,
    border: "1px solid #212121",
    border_radius : "0px",
    width: "100%",
    padding: "12px 4px",
}

const Label = styled.label`
    font-size: 15px;
`;

const RealInput = styled.input`
    display: block;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.border_radius};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
`;

const Textarea = styled.textarea`
    margin-right: 10px; 
    border: 2px solid darkgray;
    padding: 12px;
    box-sizing: border-box;
    width: 100%;
    height: 80%;

`;

export default Input;