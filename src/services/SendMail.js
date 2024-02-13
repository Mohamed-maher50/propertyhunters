import emailjs from "@emailjs/browser";

export const SendEmail = async (data) => {
  try {
    console.log(data);
    console.log(process.env.REACT_APP_EMAIL_SERVICES__ID);
    console.log(process.env.REACT_APP_EMAIL_TEMPLATE__ID);
    console.log(process.env.REACT_APP_EMAIL_PUBLIC_ID);
    const response = await emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICES__ID,
      process.env.REACT_APP_EMAIL_TEMPLATE__ID,
      { ...data },
      {
        publicKey: process.env.REACT_APP_EMAIL_PUBLIC_ID,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
