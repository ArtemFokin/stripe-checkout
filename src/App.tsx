import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const App = () => {
  const clientSecret = import.meta.env.VITE_STRIPE_SECRET;

  return (
    <div className="relative flex h-[calc(100vh-73px)] items-center justify-center bg-black">
      <div className="absolute left-14 top-16">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="h-[38px] rounded-[6px] border border-neutral-700 bg-transparent py-1 pl-1 pr-3 text-neutral-200 shadow-none hover:bg-neutral-800 hover:text-neutral-200"
        >
          <ChevronDownIcon className="mr-2 rotate-90 scale-75" />
          Back to Task
        </Button>
      </div>
      <div id="checkout" className="w-full">
        {clientSecret && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </div>
  );
};

export default App;