import configureStripe from 'stripe';

const STRIPE_SECRET_KEY = 'sk_test_hQOG2sUmWnOUX5g9sbXwxoUY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

export default stripe;