import styles from "./user.module.css";
import Button from './../UI/Button';
import Card from "../UI/Card";

const UserCard = ({ item, deleteUser }) => {
  const deleteHandler = () => {
    deleteUser(item.id);
  };
  return (
    <Card>
    <div className={styles.userCard}>
      <ul>
        <li>name:{item.name}</li>
        <li>phone:{item.phone}</li>
        <li>city:{item.city}</li>
      </ul>
      <div className="btnGroup">
        <Button className={styles.delete} onClick={deleteHandler}>
          Delete
        </Button>
        <Button className={styles.update} onClick={deleteHandler}>
          Update
        </Button>
      </div>
    </div>
    </Card>
  );
};

export default UserCard;






