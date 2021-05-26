import { signIn, useSession } from 'next-auth/client';
import Stripe from 'stripe';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe.js';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({
  priceId,
}: SubscribeButtonProps): JSX.Element {
  const [session] = useSession();

  async function handleSubscribe(): Promise<Stripe> {
    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;
      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
