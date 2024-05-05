export const ValidationForm = {
  FullName: {
    required: "please enter your name",
    maxLength: {
      value: 200,
      message: "this long name ",
    },
    minLength: {
      value: 6,
      message: "this is short name",
    },
  },
  phone: {
    required: " enter your phone number",
    pattern: {
      value: /^\+?[0-9]\d{1,20}$/i,
      message: "not valid phone number",
    },
  },
  email: {
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: "Invalid email address",
    },
    required: "please enter your email",
  },
  company:{
    required: "company name is short",
    maxLength: {
      value: 200,
      message: "this long name ",
    },
    minLength: {
      value: 2,
      message: "this is short name",
    },
  }
};
