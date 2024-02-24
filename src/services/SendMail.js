import emailjs from "@emailjs/browser";

export const SendEmail = async (data) => {
  try {
    const { status } = await emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICES__ID,
      process.env.REACT_APP_EMAIL_TEMPLATE__ID,
      { ...data },
      {
        publicKey: process.env.REACT_APP_EMAIL_PUBLIC_ID,
      }
    );
    console.log("no error");
    console.log(status);
    return [status, null];
  } catch (error) {
    console.log("there error");
    console.log(error);
    return [null, error];
  }
};
