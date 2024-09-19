"use client";
import { useState } from "react";
import styles from "../styles/new-entry.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { postEntry } from "../api-queries";

export default function NewEntry() {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };

  function NewEntryForm() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      await postEntry(
        form.elements.name.value,
        form.elements.author.value,
        form.elements.type.value,
      );
      window.location.reload();
    };

    return (
      <div className={styles.form}>
        <p>New Entry</p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            autocomplete="off"
            type="text"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className={styles.input}
            autocomplete="off"
            type="text"
            name="author"
            placeholder="Author"
          />
          <br />
          <input
            className={styles.input}
            autocomplete="off"
            type="text"
            name="type"
            placeholder="Type"
          />
          <br />
          <div id={styles.buttonDiv}>
            <button id={styles.submit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      {!showForm && (
        <div class={styles.interact} onClick={handleClick}>
          <i id={styles.plus} className="fas fa-plus"></i>
        </div>
      )}
      {showForm && <NewEntryForm />}
    </div>
  );
}
