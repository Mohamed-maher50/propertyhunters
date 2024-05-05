const WithWarningAalert = ({ Component, errors, filedName }) => {
  if (!errors) return null;
  if (!errors[filedName]) return <></>;
  return <Component className="text-sm">{errors[filedName].message}</Component>;
};

export default WithWarningAalert;
