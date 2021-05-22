import styles from './styles.module.scss';

export function SubscribeButton(): JSX.Element {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
