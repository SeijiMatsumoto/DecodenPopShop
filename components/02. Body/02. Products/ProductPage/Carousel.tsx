import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageProps {
  readonly active: boolean;
}

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  `,
  CarouselAndArrows: styled.div`
    height: 60vh;
    max-height: 500px;
    width: 630px;
    position: relative;
    display: flex;
    align-items: center;
  `,
  CarouselContainer: styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    overflow: visible;
  `,
  ArrowsContainer: styled.div`
    width: 675px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-left: 2px;
    z-index: 2;
    left: -22px;
  `,
  Arrow: styled.div`
    color: black;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      color: #505050;
    }

    &:active {
      transform: translateY(1px)
    }
  `,
  Image: styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
  `,
  OtherImagesWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    height: 100px;
    justify-content: flex-start;
    width: 630px;
    /* border: 1px solid red; */
    overflow-x: scroll;
    padding-bottom: 2px;
    &:hover {
      ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
      }
    }
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      transition: all 0.2s;
      background-color: transparent;
      border-radius: 10px;
    }
  `,
  OtherImage: styled.img<ImageProps>`
    height: 100%;
    width: 100px;
    object-fit: cover;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
    cursor: pointer;
    transition: all 300ms;
    opacity: ${props => props.active ? "1" : "0.5"};
    &:hover {
      opacity: 1;
    }
  `,
}

const Carousel = ({ product }) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    if (product) setActiveImage(0);
  }, [product]);

  const changeImage = (index) => {
    setActiveImage(index);
  }

  return (
    <_.Wrapper>
      <_.CarouselAndArrows>
        <_.ArrowsContainer>
          {activeImage > 0 ? <_.Arrow onClick={() => setActiveImage(activeImage - 1)}><ArrowBackIosIcon /></_.Arrow> : <_.Arrow />}
          {activeImage < product.images.length - 1 ? <_.Arrow onClick={() => setActiveImage(activeImage + 1)}><ArrowForwardIosIcon /></_.Arrow> : <_.Arrow />}
        </_.ArrowsContainer>
        <_.CarouselContainer>
          {/* <_.Background src={product.images[activeImage]} alt='main carousel background' /> */}
          <_.Image src={product.images[activeImage]} alt='main carousel image' />
        </_.CarouselContainer>
      </_.CarouselAndArrows>
      <_.OtherImagesWrapper>
        {product.images.map((image, i) => {
          return (
            <_.OtherImage key={image + '-carousel'} src={image} active={i === activeImage} onClick={() => changeImage(i)} />
          )
        })}
      </_.OtherImagesWrapper>
    </_.Wrapper>
  );
};

export default Carousel;