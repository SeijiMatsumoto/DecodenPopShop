import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CloudButton } from '../../../UILibrary';
import Options from './Options';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    padding: 30px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
  `,
  TopWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    padding-bottom: 10px;
    border-bottom: 4px solid #b8d4d7;
    margin-bottom: 20px;
    width: 150px;
  `,
  Title: styled.span`
    font-size: 46px;
  `,
  CatColWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  `,
  Category: styled.span`
    font-size: 18px;
    color: #494949;
  `,
  Divider: styled.span`
    height: 100%;
    border-right: 3px solid #7c75c1;
    margin: 0 5px;
  `,
  Collection: styled.span`
    font-size: 18px;
    color: #7c75c1;
  `,
  Price: styled.span`
    font-size: 22px;
  `,
  DescAction: styled.span`
    font-size: 14px;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
  Description: styled.div`
    font-size: 20px;
    color: #494949;
    margin: 10px 0;
  `,
  BottomWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
  `,
  CartButton: styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin: 20px 0;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
  `,
  ChecboxWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 15px 0 26px;
    align-items: center;

    &:first-child {
      border: 1px solid red;
      margin-right: 10px;
    }
  `,
  CheckboxTitle: styled.label`
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-right: 5px;
  `,
  Form: styled.form``,
  Checkbox: styled.input`
    margin-right: 40px;;
  `,
}

const ProductInfo = ({ product }) => {
  const maxQuantity = Array.from({ length: 10 }, (item, index) => index + 1);
  const devices = ['iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max'];
  const [quantity, setQuantity] = useState<number>(1);
  const [device, setDevice] = useState<string>(devices[0]);
  const [isGift, setIsGift] = useState<boolean>(false);
  const [includeLanyard, setIncludeLanyard] = useState<boolean>(false);

  const [shortDesc, setShortDesc] = useState<string>("");
  const [viewMore, setViewMore] = useState<boolean>(false);

  const addToCart = () => {
    console.log(`Adding ${quantity} ${product.title} for ${device} to cart.`);
    isGift ? console.log('It is a gift.') : console.log('It is not a gift.');
    includeLanyard ? console.log('Include a lanyard.') : console.log('Do not include a lanyard.');
  }

  useEffect(() => {
    let split = product.description.split(" ");
    if (split.length > 60) {
      setShortDesc(split.slice(0, 60).join(" "));
    }
  }, [product])

  const viewDesc = () => {
    setViewMore(!viewMore);
  }

  return (
    <_.Wrapper>
      <_.TopWrapper>
        <_.TitleWrapper>
          <_.Title>{product.title}</_.Title>
        </_.TitleWrapper>

        <_.Price>{product.price} USD</_.Price>

        <_.CatColWrapper>
          <_.Category>{product.category.indexOf(' ') >= 0 ? product.category.slice(0, product.category.length - 1) : product.category}</_.Category>
          <_.Divider />
          <_.Collection>{product.collection}</_.Collection>
        </_.CatColWrapper>

        {shortDesc ?
          <_.Description>{viewMore ? product.description : shortDesc}<_.DescAction onClick={() => setViewMore(!viewMore)}>[View More]</_.DescAction></_.Description>
          :
          <_.Description>{product.description}</_.Description>
        }
      </_.TopWrapper>
      <_.BottomWrapper>
        <_.Form>
          <Options title={"Select device"} choices={devices} callback={setDevice} selected={device} />
          <Options title={"Quantity"} choices={maxQuantity} callback={setQuantity} selected={quantity} />
          <_.ChecboxWrapper>
            <div>
              <_.CheckboxTitle htmlFor="giftBox" >Buy as gift</_.CheckboxTitle>
              <_.Checkbox type="checkbox" name="gift" id="giftBox" onChange={(e) => setIsGift(e.currentTarget.checked)} />
            </div>
            <div>
              <_.CheckboxTitle htmlFor="lanyardBox" >Include Lanyard</_.CheckboxTitle>
              <_.Checkbox type="checkbox" name="lanyard" id="lanyardBox" onChange={(e) => setIncludeLanyard(e.currentTarget.checked)} />
            </div>
          </_.ChecboxWrapper>
        </_.Form>
        <CloudButton text={"Add to cart"} src={""} callback={addToCart} target={""} size="" />
      </_.BottomWrapper>
    </_.Wrapper>
  );
};

export default ProductInfo;