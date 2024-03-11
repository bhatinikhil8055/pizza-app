import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="400" height="400" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        This is a variety of Italian pizza that is traditionally topped with
        mozzarella cheese, zucchini flowers, olive oil, and salted anchovies. If
        one is using the untraditional method, it is recommended to add some
        black pepper and garlic for extra flavor.
      </p>
    </div>
  );
};

export default PizzaCard;
