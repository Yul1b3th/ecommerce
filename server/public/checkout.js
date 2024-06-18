// This is your test secret API key.
const stripe = Stripe("pk_test_51PT8cSGSFF9Zp2j58o8rbeziMfLcPD31G6ztay34IxbKegfckLTurdJgu3ZlhIBqq2sv49MLJueLk75xU0QrLVAa00nyotcKFJ");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}