import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      {/* Recent Activity */}
      <div class="py-5">
        <div class="flex items-center justify-between py-2">
          <div>
            <h2 class="text-lg">Recent Activity</h2>
            <p>Here is a list of your recent transactions:</p>
          </div>
          <div class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
            <a href="/add-transaction">Add Transaction</a>
          </div>
        </div>
        <ul class="divide-y p-2 shadow">
          <li class="grid gap-5 py-2 md:grid-cols-3">
            <span>Loan to Bob</span>
            <span class="text-red-500">$500</span>
            <span>
              <time>2021-07-01</time>
            </span>
          </li>
          <li class="grid gap-5 py-2 md:grid-cols-3">
            <span>Loan to Alice</span>
            <span class="text-red-500">$300</span>
            <span>
              <time>2021-07-02</time>
            </span>
          </li>
          <li class="grid gap-5 py-2 md:grid-cols-3">
            <span>Loan to Charlie</span>
            <span class="text-red-500">$200</span>
            <span>
              <time>2021-07-03</time>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
