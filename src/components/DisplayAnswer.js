import Card from "../UI/Card";
import styles from "./DisplayAnswer.module.css";

const DisplayAnswer = (props) => {
  return (
    <Card className={styles.users}>
      <h2>{props.solution}</h2>
    </Card>
  );
};

export default DisplayAnswer;
