import { useState } from "react";

import DisplayAnswer from "./DisplayAnswer";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Calculator.module.css";

const CalcForm = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isSubtract, setIsSubtract] = useState(false);
  const [isDivide, setIsDivide] = useState(false);
  const [isMultiply, setIsMultiply] = useState(false);

  const notEmpty = num1.trim().length > 0 && num2.trim().length > 0;

  const num1Handler = (e) => {
    setNum1(e.target.value);
  };

  const num2Handler = (e) => {
    setNum2(e.target.value);
  };

  const addHandler = () => {
    if (notEmpty) {
      setIsAdd(true);
    } else return;
  };

  const subtractHandler = () => {
    if (notEmpty) {
      setIsSubtract(true);
    } else return;
  };

  const divideHandler = () => {
    if (notEmpty) {
      setIsDivide(true);
    } else return;
  };

  const multiplyHandler = () => {
    if (notEmpty) {
      setIsMultiply(true);
    } else return;
  };

  const clearFieldsHandler = () => {
    setNum1("");
    setNum2("");
    setIsAdd(false);
    setIsDivide(false);
    setIsMultiply(false);
    setIsSubtract(false);
  };

  let answer = 0;

  if (isAdd === true) {
    answer = +num1 + +num2;
  } else if (isSubtract === true) {
    answer = +num1 - +num2;
  } else if (isDivide === true) {
    answer = +num1 / +num2;
  } else if (isMultiply === true) {
    answer = +num1 * +num2;
  }

  return (
    <Card className={styles.input}>
      <div>
        <Button className={styles.clear} onClick={clearFieldsHandler}>
          C
        </Button>
        <label htmlFor="num1">Enter a Number</label>
        <input value={num1} id="num1" type="number" onChange={num1Handler} />
        <label htmlFor="num2">Enter another Number</label>
        <input value={num2} id="num2" type="number" onChange={num2Handler} />
      </div>
      <div className={styles.buttons}>
        <Button type="button" onClick={addHandler}>
          ADD
        </Button>
        <Button type="button" onClick={subtractHandler}>
          SUBTRACT
        </Button>
        <Button type="button" onClick={divideHandler}>
          DIVIDE
        </Button>
        <Button type="button" onClick={multiplyHandler}>
          MULTIPLY
        </Button>
      </div>

      <div>
        <DisplayAnswer solution={answer} />
      </div>
    </Card>
  );
};

export default CalcForm;
