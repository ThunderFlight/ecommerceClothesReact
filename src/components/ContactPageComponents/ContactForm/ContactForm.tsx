import styles from "./ContactForm.module.scss";
import email from "@/assets/icons8-email-15.png";
import phone from "@/assets/icons8-phone-15.png";
import addres from "@/assets/icons8-address-15.png";
import Button from "@/components/ui/Button/Button";
import classNames from "classnames";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__informationWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.textWrapper__title}>Get in touch</h1>
          <p className={styles.textWrapper__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
            tempor,
            <br /> congue justo at, lobortis orci.
          </p>
          <ul className={styles.textWrapper__information}>
            <li className={styles.elements}>
              <img src={addres} />
              <span>123 Fifth Avenue, New York, NY 10160</span>
            </li>
            <li className={styles.elements}>
              <img src={email} />
              <span>contact@/info.com</span>
            </li>
            <li className={classNames(styles.elements, styles.phone)}>
              <img src={phone} />
              <span>9-334-7565-9787</span>
            </li>
          </ul>
        </div>
        <form className={styles.form}>
          <div className={styles.wrapperName}>
            <input
              type="text"
              placeholder="First Name"
              className={classNames(
                styles.wrapperName__firstName,
                styles.wrapperName__inputName
              )}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={classNames(
                styles.wrapperName__lastName,
                styles.wrapperName__inputName
              )}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email Address..."
            className={styles.email}
          />
          <textarea
            placeholder="Message..."
            className={styles.textForm}
          ></textarea>
          <Button size="default" name="Send" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
