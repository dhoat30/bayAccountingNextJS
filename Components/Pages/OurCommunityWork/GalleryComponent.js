import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Modal from './Modal';
import 'photoswipe/dist/photoswipe.css'

function GalleryComponent({ galleryData }) {
    console.log(galleryData)
    const [clickedImg, setClickedImg] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)
    const handleClick = (item, index) => {
        setCurrentIndex(index)
        setClickedImg(item.link)
    }

    const handleRotationRight = () => {
        const totalLength = galleryData.totalLength
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0)
            const newUrl = galleryData[0].link
            setClickedImg(newUrl)
            return
        }
        const newIndex = currentIndex + 1
        const newUrl = galleryData.filter((item) => {
            return galleryData.indexOf(item) === newIndex
        })

        const newItem = newUrl[0].link

        setClickedImg(newItem)
        setCurrentIndex(newIndex)

    }


    const gallery = galleryData.map((item, index) => {

        return (<ImageContainer key={index}>
            <ImageStyle
                src={item.url}
                alt="This is an image"
                onClick={() => handleClick(item, index)}
                width="100%"
                height="100%"

            />
        </ImageContainer>)

    })
    return (
        <ImageFlex className="wrapper">
            {gallery}
            {clickedImg && <Modal clickedImg={clickedImg}
                handleRotationRight={handleRotationRight}
                setClickedImg={setClickedImg}
            />}

        </ImageFlex>
    )
}

export default GalleryComponent
const ImageStyle = styled.img`
    width:  100%;
    object-fit: cover; 
`
const ImageFlex = styled.div`
display: flex ;
max-width: 1150px; 
margin:  0 auto;
flex-wrap: wrap;
`
const ImageContainer = styled.div`
width: calc(33% - 20px );
position: relative;
height: 300px;
margin: 20px 10px; 
@media(max-width: 1000px ){ 
    height: 200px;
    width: calc(33% - 20px );
}
@media(max-width: 700px ){ 
    height: 200px;
    width: calc(50% - 20px );
}
@media(max-width: 500px ){ 
    height: 200px;
    width: 100%;
}
`
const GalleryStyle = styled(Gallery)`
width: 500px;
height:  500px;
`