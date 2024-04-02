import { component$ } from "@builder.io/qwik";
import { Form, useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  const location = useLocation();
  const id = location.url.searchParams.get("loanId");
  return (
    <div class="py-5">
      {/* Recent Activity */}
      <div class="p-5 py-5 shadow">
        <div class="mb-5">
          <h2 class="text-lg">Add Transaction</h2>
          <p>Enter the details of the transaction:</p>
        </div>
        <Form
          onSubmit$={(e) => {
            e.preventDefault();
          }}
        >
          <div class="mb-4">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="description"
            >
              Description
            </label>
            <input
              class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div class="mb-4">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="amount"
            >
              Amount:
            </label>
            <input
              class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="amount"
              placeholder="Amount"
              type="number"
            />
          </div>
          <div class="mb-6">
            <label for="date">Date:</label>
            <input
              class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="date"
              placeholder="Date"
              type="date"
            />
          </div>
          <div class="relative mb-5">
            <label for="loan-account">Loan Account</label>
            <select
              class="block w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="loan-account"
            >
              <option selected={id === "loan1"} value={"loan1"}>
                Loan 1
              </option>
              <option selected={id === "loan2"} value={"loan2"}>
                Loan 2
              </option>
              <option selected={id === "loan3"} value={"loan3"}>
                Loan 3
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div class="relative mb-5">
            <label for="loan-account">Transaction Type</label>
            <select
              class="block w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="grid-state"
            >
              <option value="recovered">Recovered</option>
              <option value="loaned">Loaned</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div class="flex justify-between">
            <button
              class="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
              type="button"
              onClick$={() => {
                nav("/");
              }}
            >
              Cancel
            </button>
            <button
              class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Add Transaction
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
});
