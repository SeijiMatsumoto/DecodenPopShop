/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Banner } from '../../UILibrary';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { inputsAreValid } from '../../../helper/formValidator';
import sendEmail from '../../../pages/api/sendEmail';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto", sans-serif;
  `,
  InnerWrapper: styled.div`
    width: 900px;
    padding: 90px 0 50px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 950px) {
      width: 95%;
    }
  `,
  Title: styled.span`
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:first-child {
      margin-right: 20px;
    }
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 660px) {
      flex-direction: column;
    }
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:first-child {
      margin-right: 20px;
      @media (max-width: 660px) {
        margin: 0;
      }
    }
  `,
  Label: styled.label`
    margin: 15px 0 5px;
    font-size: 20px;

    @media (max-width: 660px) {
      font-size: 1rem;
    }
  `,
  SelectInput: styled(Select)``,
  BodyInput: styled(TextField)`
    @media (max-width: 660px) {
      * {
        font-size: 1rem;
      }
    }
  `,
  BottomWrapper: styled.div`
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      margin: 10px 0;
      color: #999999;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Loading: styled(CircularProgress)`
      position: relative;
      right: -15px;
  `,
  SubmitBtn: styled(Button)`
    background-color: #63a3aa;

    &:hover {
      background-color: #5a98a0;
    }
  `,
  AlertBanner: styled(Collapse)`
    position: absolute;
    top: 0;
    width: 100%;
  `
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [inquiry, setInquiry] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [valid, setValid] = useState<any>(
    {
      inquiry: true,
      name: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    })
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [failMessage, setFailMessage] = useState<string>("");

  const resetForm = () => {
    setInquiry("");
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
    setValid({
      inquiry: true,
      name: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    });
  }

  useEffect(() => {
    if (inquiry.length) {
      let temp = subject.split(" ").filter(letter => letter.length);
      temp[0] = inquiry + ": ";
      setSubject(temp.join(" "));
    }
  }, [inquiry])

  useEffect(() => {
    if (loading) {
      if (inputsAreValid(valid, setValid, inquiry, name, phone, email, subject, message)) {
        sendEmail(form, setLoading, setSuccess, resetForm, setFailMessage);
      } else {
        setFailMessage("Please check your inputs and try again.");
      }
    }
  }, [loading])

  useEffect(() => {
    if (failMessage.length) {
      setFailed(true);
      setLoading(false);
    } else {
      setFailed(false);
    }
  }, [failMessage])

  const submitHandler = () => {
    setLoading(true);
    setFailMessage("");
  }

  return (
    <_.Wrapper>
      <Banner text="Contact" />
      <_.InnerWrapper>
        <_.AlertBanner in={success}>
          <Alert onClose={() => { setSuccess(false) }}>Message has been successfully sent! Please wait up to 24 hours for a response.</Alert>
        </_.AlertBanner>
        <_.AlertBanner in={failed}>
          <Alert severity="error" onClose={() => { setFailed(false) }}>{failMessage}</Alert>
        </_.AlertBanner>
        <_.Title>Any questions, concerns, or requests? Send a message!</_.Title>
        <_.Form ref={form} onSubmit={submitHandler} id="contact-form">
          <_.Row>
            <_.InputContainer>
              <_.Label htmlFor="type-form">Inquiry Type *</_.Label>
              <_.SelectInput
                error={!valid.inquiry}
                value={inquiry}
                name="inquiry"
                displayEmpty
                onChange={(e) => {
                  let temp = JSON.parse(JSON.stringify(valid));
                  temp.inquiry = true;
                  setValid(temp);
                  setInquiry(e.target.value as string)
                }}
              >
                <MenuItem disabled value="">
                  <em>Select inquiry type</em>
                </MenuItem>
                <MenuItem value="Request">Request</MenuItem>
                <MenuItem value="Question">Question</MenuItem>
                <MenuItem value="Suggestion">Suggestion</MenuItem>
                <MenuItem value="Complaint">Complaint</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </_.SelectInput>
            </_.InputContainer>

            <_.InputContainer>
              <_.Label htmlFor="name-form">Name *</_.Label>
              <TextField
                error={!valid.name}
                id="filled-error-helper-text"
                value={name}
                name="name"
                autoComplete="off"
                onChange={(e) => {
                  let temp = JSON.parse(JSON.stringify(valid));
                  temp.name = true;
                  setValid(temp);
                  setName(e.target.value)
                }}
                placeholder="Enter name"
              />
            </_.InputContainer>
          </_.Row>

          <_.Row>
            <_.InputContainer>
              <_.Label htmlFor="phone-form">Phone *</_.Label>
              <TextField
                error={!valid.phone}
                id="phone-form"
                value={phone}
                name="phone"
                autoComplete="off"
                onChange={(e) => {
                  let temp = JSON.parse(JSON.stringify(valid));
                  temp.phone = true;
                  setValid(temp);
                  setPhone(e.target.value)
                }}
                placeholder="Enter phone (e.g. 222-222-2222)"
              />
            </_.InputContainer>

            <_.InputContainer>
              <_.Label htmlFor="email-form">Email *</_.Label>
              <TextField
                error={!valid.email}
                id="email-form"
                value={email}
                name="email"
                autoComplete="off"
                onChange={(e) => {
                  let temp = JSON.parse(JSON.stringify(valid));
                  temp.email = true;
                  setValid(temp);
                  setEmail(e.target.value)
                }}
                placeholder="Enter email"
              />
            </_.InputContainer>
          </_.Row>

          <_.InputContainer>
            <_.Label htmlFor="subject-form">Subject *</_.Label>
            <TextField
              error={!valid.subject}
              id="subject-form"
              autoComplete='off'
              value={subject}
              name="subject"
              placeholder="Enter subject of inquiry"
              onChange={(e) => {
                let temp = JSON.parse(JSON.stringify(valid));
                temp.subject = true;
                setValid(temp);
                setSubject(e.target.value)
              }}
            />
          </_.InputContainer>

          <_.InputContainer>
            <_.Label htmlFor="message-form">Message *</_.Label>
            <_.BodyInput
              error={!valid.message}
              id="message-form"
              multiline
              minRows={5}
              name="message"
              autoComplete='off'
              value={message}
              onChange={(e) => {
                let temp = JSON.parse(JSON.stringify(valid));
                temp.message = true;
                setValid(temp);
                setMessage(e.target.value)
              }}
              placeholder="Enter message"
            />
          </_.InputContainer>

          <_.BottomWrapper>
            <_.ButtonWrapper>
              <_.SubmitBtn variant="contained" onClick={submitHandler}>Submit</_.SubmitBtn>
              {loading && <_.Loading size="1.2rem" />}
            </_.ButtonWrapper>
            <span>* Required fields</span>
          </_.BottomWrapper>

        </_.Form>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default Contact;