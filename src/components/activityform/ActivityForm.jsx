import useActivity from "../../hooks/useActivity";
import styles from "./ActivityForm.module.css";

const ActivityForm = () => {
  const {
    createActivity,
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    time,
    setTime,
    image,
    setImage,
    error,
    success,
    setSuccess
  } = useActivity();

  const handleSubmission = async (e) => {
    e.preventDefault();
    await createActivity(e);
    clearActivity();

  };

  const clearActivity = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setImage("");
    setSuccess(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create New Activity</h1>
      <form onSubmit={handleSubmission} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>
            Date
          </label>
          <input
            type="date"
            id="date"
            className={styles.input}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="time" className={styles.label}>
            Time
          </label>
          <input
            type="time"
            id="time"
            className={styles.input}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="image" className={styles.label}>
            Image URL
          </label>
          <input
            type="text"
            id="image"
            className={styles.input}
            value={image}
            onChange={(e) => {
              console.log("Updated image value:", e.target.value);
              setImage(e.target.value);
              console.log("Image value:", image);
            }}
          />
        </div>

        <button type="submit" className={styles.button}>
          Create Activity
        </button>
      </form>

      {success && (
        <p className={styles.success}>Activity created successfully!</p>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ActivityForm;
