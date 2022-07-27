import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import buttonStyle from "../styles/00. Components/Button/Button.module.css";
import cardStyle from "../styles/00. Components/Card/Card.module.css";
import expandListStyle from "../styles/00. Components/ExpandList/ExpandList.module.css";
import titleStyle from "../styles/00. Components/Title/Title.module.css";
// https://getcssscan.com/css-box-shadow-examples

export const Button = ({ action, buttonText }) => {
  return (
    <button className={buttonStyle.button} onClick={action}>{buttonText}</button>
  );
};

export const Card = ({ title, desc, img }) => {
  return (
    <div className={cardStyle.wrapper}>
      {img && <Image className={cardStyle.img} src={img} alt='card' layout="responsive" width="150px" height="150px" />}
      <div className={cardStyle.textWrapper}>
        <span className={cardStyle.title}>{title}</span>
        <span className={cardStyle.desc}> {desc}</span>
      </div>
    </div >
  )
}

export const ExpandList = ({ mainItem, subItems, callback }) => {
  const [expand, setExpand] = useState<boolean>(false);

  const clickHandler = () => {
    setExpand(!expand);
  }

  const linkClickHandler = () => {
    callback();
    setTimeout(() => {
      setExpand(false);
    }, 500);
  }

  return (
    <div className={expandListStyle.wrapper}>
      <div className={expandListStyle.titleWrapper} onClick={clickHandler}>
        {!expand ?
          <span className={expandListStyle.arrow}>{">"}</span> :
          <span className={expandListStyle.arrow}>{"<"}</span>
        }
        <span className={expandListStyle.title}>{mainItem}</span>
      </div>
      {expand && <div className={expandListStyle.subWrapper}>
        {subItems.map(item => {
          return (
            <Link href={item.url} key={item.url}><span className={expandListStyle.title} onClick={linkClickHandler}>{item.title}</span></Link>
          )
        })}
      </div>}
    </div>
  )
}

export const SectionTitle = ({ text }) => {
  return (
    <span className={titleStyle.title}>{text}</span>
  )
}