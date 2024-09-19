"use client";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "../styles/entry.module.css";
import { deleteEntry, getEntries, editEntry } from "../api-queries";
import { useEffect, useState } from "react";

function Entry(props) {
  const [showForm, setShowForm] = useState(false);

  function UpdateForm() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.elements.name.value) {
        form.elements.name.value = props.name;
      }
      if (!form.elements.author.value) {
        form.elements.author.value = props.author;
      }
      if (!form.elements.type.value) {
        form.elements.type.value = props.type;
      }

      await editEntry(
        form.elements.name.value,
        form.elements.author.value,
        form.elements.type.value,
        props.id,
      );
      window.location.reload();
    };

    return (
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div id={styles.in}>
            <input
              className={styles.input}
              autocomplete="off"
              type="text"
              name="name"
              placeholder={props.name}
            />
            <br />
            <input
              className={styles.input}
              autocomplete="off"
              type="text"
              name="author"
              placeholder={props.author}
            />
            <br />
            <input
              className={styles.input}
              autocomplete="off"
              type="text"
              name="type"
              placeholder={props.type}
            />
            <br />
            <button className={styles.submit} type="submit">
              Confirm Edits
            </button>
          </div>
        </form>
      </div>
    );
  }

  const handleClickUpdate = () => {
    setShowForm(true);
  };
  const handleClickDelete = async () => {
    await deleteEntry(props.id);
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.container}>
        {!showForm && (
          <div className={styles.subcontainer}>
            <p className={styles.text}>{props.name}</p>
          </div>
        )}

        {!showForm && (
          <div className={styles.subcontainer}>
            <p className={styles.text}>{props.author}</p>
          </div>
        )}
        {!showForm && (
          <div className={styles.subcontainer}>
            <p className={styles.text}>{props.type}</p>
          </div>
        )}
        {!showForm && (
          <div className={styles.edit} onClick={handleClickUpdate}>
            {showForm && <UpdateForm />}
            <i id={styles.pencil} className="fas fa-pencil-alt"></i>
          </div>
        )}
        {!showForm && (
          <div id={styles.trashContainer} onClick={handleClickDelete}>
            <i id={styles.trash} className="fas fa-trash"></i>
          </div>
        )}
        {showForm && <UpdateForm />}
      </div>
    </div>
  );
}

export default function AllEntries() {
  const [data, setData] = useState([]);
  const entries = [];

  useEffect(() => {
    const getData = async (e) => {
      const d = await getEntries();
      setData(d);
    };
    getData();
  }, []);

  data.forEach((e) => {
    entries.push(
      <Entry name={e.name} author={e.author} type={e.type} id={e.id} />,
    );
  });

  return <div>{entries}</div>;
}
