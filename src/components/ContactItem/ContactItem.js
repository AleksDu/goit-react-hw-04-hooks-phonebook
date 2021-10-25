import styles from "./ContactItem.module.css";
import IconButton from "../IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/remove.svg";

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <span className={styles.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>
      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="20px" height="20px" fill="#a9a1a1" />
      </IconButton>
    </>
  );
};

export default ContactItem;
