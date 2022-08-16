import emailjs from "emailjs-com";

export default function sendEmail(
  form,
  setLoading,
  setSuccess,
  setFailed,
  resetForm
) {
  const templateParams = {
    name: name,
    notes: "Check this out!",
  };

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccess(true);
        resetForm();
      },
      function (error) {
        setFailed(true);
        console.log("FAILED...", error);
      }
    );
}
