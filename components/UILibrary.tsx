import React, { useState, useEffect } from 'react';
import buttonStyle from "../styles/00. Components/Button/Button.module.css";
import titleStyle from "../styles/00. Components/Title/Title.module.css";
// https://getcssscan.com/css-box-shadow-examples
import bannerStyle from "../styles/00. Components/Banner/Banner.module.css";

export const Button = ({ action, buttonText }) => {
  return (
    <button className={buttonStyle.button} onClick={action}>{buttonText}</button>
  );
};

export const SectionTitle = ({ text }) => {
  return (
    <span className={titleStyle.title}>{text}</span>
  )
}

export const CloudButton = ({ text, src, callback, target, size }) => {
  return (
    <>
      {!src.length ?
        <div className="default-button animation-cloud-btn" onClick={callback}>
          <span className="cloud-button-content">{text}</span>
          <span className="animation-cloud-btn-inner">
            <span className="animation-cloud-parts">
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
            </span>
          </span>
        </div> :
        <a className="default-button animation-cloud-btn" href={src} target={target}>
          <span className="cloud-button-content">{text}</span>
          <span className="animation-cloud-btn-inner">
            <span className="animation-cloud-parts">
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
              <span className="animation-cloud-part"></span>
            </span>
          </span>
        </a>
      }
    </>
  )
}

export const CloudBackground = ({ }) => {
  return (
    <div className="cloudsWrapper">
      <div className="cloud large cloud-1">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud normal cloud-2">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud small cloud-3">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud tiny cloud-4">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud large cloud-5">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud normal cloud-6">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud small cloud-7">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud tiny cloud-8">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud small cloud-9">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud normal cloud-10">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud tiny cloud-11">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="cloud small cloud-12">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}

export const Banner = ({ text }) => {
  return (
    <div className={bannerStyle.bannerWrapper}>
      {text}
    </div>
  )
}