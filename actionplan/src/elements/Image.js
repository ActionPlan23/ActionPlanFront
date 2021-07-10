import styled from 'styled-components';
import React from "react";
import add_img from "../image/yellow_pencil2.png";

const Image = (props) => {
    const {home_img, write_img, src, size, _onClick, padding} = props;

    const styles = {
        src: src,
        size: size,
        padding: padding,
    }


    if(home_img){
        return (
            <HomeImg {...styles} onClick={_onClick}/>
        )
    }
    if(write_img){
        return (
            <Add {...styles} />
        )
    }
    return;
}

Image.defaultProps = {
    home_img: false,
    post_img: false,
    src: "",
    size: 50,
    _onClick: () => {},
    padding: "",
    write_img: false,
};

const HomeImg = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);

    background-image: url(${(props) => props.src===""? cat_img : props.src});
    background-size: cover;
    margin: 4px;
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}

    cursor: pointer;

`;

const Add = styled.div`
position: fixed;
z-index: 2;

bottom: 40px;
right: 40px;

background-image: url(${add_img});
background-repeat: no-repeat;
background-size: contain;

width: 80px;
height: 80px;

cursor: pointer;
`


export default Image;