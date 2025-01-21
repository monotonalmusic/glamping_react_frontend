import { useState } from "react";
import styles from "./kontaktpage.module.css";
import Button from "../../components/button/Button";
import PageHeader from "../../components/pageheader/PageHeader";
import Box from "../../components/box/Box";

const KontaktPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.container}>
      <PageHeader title={"Kontakt Gitte"} bgImg={"/image_03.jpg"}></PageHeader>
      <div className={styles.textDiv}>
        <h2>Har du spørgsmål?</h2>
        <p>
          Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at
          svare på henvendelser indenfor 24 timer, men op til ferier kan der
          være travlt, og svartiden kan derfor være op til 48 timer.!
        </p>
      </div>
      <div className={styles.formDiv}>
        <div className={styles.formSection}>
          <h2>Kontakt Os</h2>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Navn:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Besked:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <Button backgroundColor={"#829B97"} color={"white"}></Button>
            </form>
          ) : (
            <p className={styles.message}>
              Tak for beskeden! Vi vender tilbage hurtigst muligt.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
