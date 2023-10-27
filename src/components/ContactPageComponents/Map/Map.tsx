import styles from './Map.module.scss'

const Map = () => {
  return (
    <section className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317989.3400139066!2d-0.121869!3d51.489514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1698405072472!5m2!1sen!2sus"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Map;
