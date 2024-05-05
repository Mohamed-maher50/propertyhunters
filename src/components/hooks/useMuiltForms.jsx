import { useState } from "react";

const useMuiltForms = (Forms = []) => {
  const [indexOfActiveForm, setIndexOfActiveForm] = useState(0);
  const next = () => {
    if (indexOfActiveForm < Forms.length - 1)
      setIndexOfActiveForm(indexOfActiveForm + 1);
  };

  const prev = () => {
    if (indexOfActiveForm > 0) setIndexOfActiveForm(indexOfActiveForm - 1);
  };

  const isLastStep = indexOfActiveForm === Forms.length - 1;
  const isFistStep = indexOfActiveForm === 0;

  return {
    ActiveForm: Forms[indexOfActiveForm],
    next,
    prev,
    isLastStep,
    isFistStep,
  };
};

export default useMuiltForms;
