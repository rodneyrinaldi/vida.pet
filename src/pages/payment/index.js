import React, { useEffect } from "react";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../../components/Payment/CheckoutForm';
import { useRouter } from 'next/router';


var stripe_load = () => {
  var aScript = document.createElement('script');
  aScript.type = 'text/javascript';
  aScript.src = " https://js.stripe.com/v3/";

  document.head.appendChild(aScript);
  aScript.onload = () => {

  };
};

function Payment({ host }) {
  const key = host.includes('localhost') ? 'test' : 't';

  useEffect(() => {
    var aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = " https://js.stripe.com/v3/";

    document.head.appendChild(aScript);
    aScript.onload = () => {

    };
  }, [])
  //stripe_load();

  const router = useRouter();

  return (
    <div className="Payment Main">
      <StripeProvider apiKey={key}>
        <Elements>
          <CheckoutForm planid={router.query.id} />
        </Elements>
      </StripeProvider>
      <br />
      <br />
      <p>Powered by Stripe</p>
    </div>
  );
};


Payment.getInitialProps = async ctx => {
  return { host: ctx.req.headers.host }
};

export default Payment