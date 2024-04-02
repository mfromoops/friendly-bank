import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main>
        <div class="container mx-auto p-5">
          <h1 class="text-xl">Friendly Bank</h1>
          <p>Welcome to the Friendly Bank website.</p>
          {/* Overview */}
          <div class="py-5">
            <h2 class="text-lg">Overview</h2>
            <p>Here is a brief overview of your account:</p>
            <ul class="flex justify-between gap-5 p-2 shadow">
              <li>Money Loaned: $1000</li>
              <li>Money Recovered: $3000</li>
              <li>
                Current Balance: <span class="text-red-500">$-2000</span>
              </li>
              <li>Loaned to 3 Friends</li>
              <li>Average Loan: $333</li>
            </ul>
          </div>
          {/* Current Loans */}
          <div class="py-5">
            <h2 class="text-lg">Current Loans</h2>
            <p>Here is a list of your current loans:</p>
            <ul>
              <li class="grid grid-cols-4 px-2 py-1 shadow">
                <span>Loan 1</span>
                <span>
                  Loan Total: <span class="text-red-500">$1000</span>
                </span>
                <span>
                  Pending Balance: <span class="text-red-500">$1000</span>
                </span>
                <span>
                  <a href="/add-transaction?loanId=loan1">Add Transaction</a>
                </span>
              </li>
              <li class="grid grid-cols-4 px-2 py-1 shadow">
                <span>Loan 2</span>
                <span>
                  Loan Total: <span class="text-red-500">$100</span>
                </span>
                <span>
                  Pending Balance: <span class="text-red-500">$80</span>
                </span>
                <span>
                  <a href="/add-transaction?loanId=loan2">Add Transaction</a>
                </span>
              </li>
              <li class="grid grid-cols-4 px-2 py-1 shadow">
                <span>Loan 3</span>
                <span>
                  Loan Total: <span class="text-red-500">$1000</span>
                </span>
                <span>
                  Pending Balance: <span class="text-red-500">$1000</span>
                </span>
                <span>
                  <a href="/add-transaction?loanId=loan3">Add Transaction</a>
                </span>
              </li>
            </ul>
          </div>

          <Slot />
        </div>
      </main>
    </>
  );
});
