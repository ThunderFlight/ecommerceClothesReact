import UnderLine from '@components/ui/UnderLine/UnderLine';
import styles from './DescriptionCompany.module.scss'

const DescriptionCompany = () => {
  return (
    <section className={styles.descriptionCompany}>
        <div className={styles.descriptionCompany__wrapperTitle}>
          <h1 className={styles.title}>About</h1>
          <UnderLine color='black'/>
        </div>
        <p className={styles.descriptionCompany__topDescription}>
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
          massa orci. Suspendisse vulputate semper nunc eget rhoncus.
        </p>
        <p className={styles.descriptionCompany__bottomDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante
          vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
          Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem,
          interdum tincidunt libero. Nulla vel quam lobortis, varius est
          scelerisque, dapibus nisl.
        </p>
    </section>
  );
};

export default DescriptionCompany;
