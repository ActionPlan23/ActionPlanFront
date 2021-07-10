import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const { children, fontsize, fontweight, fontcolor, margin, textalign, _onClick } = props;
    const styles = {
        fontsize: fontsize,
        fontweight: fontweight,
        fontcolor: fontcolor,
        margin: margin,
        textalign: textalign,
    }
    return (
        <React.Fragment>
            <P {...styles} onClick={_onClick}>{children}</P>
        </React.Fragment>
    );
};

Text.defaultProps = {
    children: null,
    fontsize: false,
    fontweight: false,
    fontcolor: "",
    margin: false,
    textalign: false,
    _onClick: ()=>{}
}
const P = styled.p`
    ${(props) => (props.fontsize ? `font-size: ${props.fontsize};` : "")}
    ${(props) => (props.fontweight ? `font-weight: ${props.fontweight};` : "")}
    ${(props) => (props.fontcolor ? `color: ${props.fontcolor};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.textalign ? `text-align: ${props.textalign};` : "")}
`;

export default Text;