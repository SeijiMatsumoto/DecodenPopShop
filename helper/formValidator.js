export const inputsAreValid = (
  valid,
  setValid,
  inquiry,
  name,
  phone,
  email,
  subject,
  message
) => {
  let isValid = true;
  let temp = JSON.parse(JSON.stringify(valid));

  if (!inquiry.length) {
    temp.inquiry = false;
    isValid = false;
  } else {
    temp.inquiry = true;
  }

  if (!name.length) {
    temp.name = false;
    isValid = false;
  } else {
    temp.name = true;
  }

  function countNumbers() {
    let count = 0;
    for (let char of phone) {
      if (/^\d$/.test(char)) {
        count++;
      }
    }
    if (count >= 10) {
      return true;
    } else {
      return false;
    }
  }

  if (!phone.length) {
    temp.phone = false;
    isValid = false;
  } else if (!countNumbers()) {
    temp.phone = false;
    isValid = false;
  } else {
    temp.phone = true;
  }

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.length) {
    temp.email = false;
    isValid = false;
  } else if (!email.match(mailFormat)) {
    temp.email = false;
    isValid = false;
  } else {
    temp.email = true;
  }

  if (!subject.length) {
    temp.subject = false;
    isValid = false;
  } else {
    temp.subject = true;
  }

  if (!message.length) {
    temp.message = false;
    isValid = false;
  } else {
    temp.message = true;
  }

  setValid(temp);
  return isValid;
};
