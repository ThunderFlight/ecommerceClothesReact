import styles from './ContactTitle.module.scss'
import UnderLine from "@/components/ui/UnderLine/UnderLine";

const ContactTitle = () => {
  return (
    <section className={styles.contactTitle}>
      <h1 className={styles.contactTitle__name}>Contact</h1>
      <UnderLine color="black" />
      <h2 className={styles.contactTitle__description}>
        Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
        massa orci.<br/> Suspendisse vulputate semper nunc eget rhoncus.
      </h2>
    </section>
  );
};

export default ContactTitle;
