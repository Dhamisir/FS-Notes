import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "Axios, Fetch & Dummy API CRUD" };

export default function AxiosDummyApi() {
  return (
    <ReactLesson backHref="/react/day-4" title="1️⃣ Axios, Fetch & Dummy API CRUD">
      <Callout variant="reactMini">
        <p className="text-sm text-[#2c3e50]">
          An API lets the frontend send and receive data. We will use
          <code> https://dummyjson.com/products</code> for safe practice.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Install Axios</h2>
        <CodeBlock language="bash" code={`npm install axios`} />
        <CodeBlock language="jsx" code={`import axios from "axios";`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">HTTP methods: Axios vs Fetch</h2>
        <p className="mt-2 text-sm text-[#2c3e50]">
          Every CRUD operation below shows the Fetch call first, then the
          equivalent Axios call, so you can compare how the same request
          looks in both.
        </p>

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">GET - read all products</h3>
        <CodeBlock language="jsx" code={`// Fetch
const getProducts = async () => {
  const response = await fetch(API);
  if (!response.ok) throw new Error("Request failed");
  const data = await response.json();
  console.log(data.products);
};

// Axios
const getProducts = async () => {
  const response = await axios.get(API);
  console.log(response.data.products);
};`} />

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">GET - read one product</h3>
        <CodeBlock language="jsx" code={`// Fetch
const getProduct = async () => {
  const response = await fetch(API + "/1");
  if (!response.ok) throw new Error("Request failed");
  const data = await response.json();
  console.log(data);
};

// Axios
const getProduct = async () => {
  const response = await axios.get(API + "/1");
  console.log(response.data);
};`} />

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">POST - create a product</h3>
        <CodeBlock language="jsx" code={`// Fetch
const addProduct = async () => {
  const response = await fetch(API + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "New Laptop",
      price: 55000,
    }),
  });
  const data = await response.json();
  console.log(data);
};

// Axios
const addProduct = async () => {
  const response = await axios.post(API + "/add", {
    title: "New Laptop",
    price: 55000,
  });
  console.log(response.data);
};`} />

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">PUT - replace/update a product</h3>
        <CodeBlock language="jsx" code={`// Fetch
const updateProduct = async () => {
  const response = await fetch(API + "/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Updated Laptop",
      price: 60000,
    }),
  });
  const data = await response.json();
  console.log(data);
};

// Axios
const updateProduct = async () => {
  const response = await axios.put(API + "/1", {
    title: "Updated Laptop",
    price: 60000,
  });
  console.log(response.data);
};`} />

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">PATCH - update selected fields</h3>
        <CodeBlock language="jsx" code={`// Fetch
const patchProduct = async () => {
  const response = await fetch(API + "/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ price: 62000 }),
  });
  const data = await response.json();
  console.log(data);
};

// Axios
const patchProduct = async () => {
  const response = await axios.patch(API + "/1", {
    price: 62000,
  });
  console.log(response.data);
};`} />

        <h3 className="mt-4 text-sm font-semibold text-[#2c3e50]">DELETE - remove a product</h3>
        <CodeBlock language="jsx" code={`// Fetch
const deleteProduct = async () => {
  const response = await fetch(API + "/1", {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};

// Axios
const deleteProduct = async () => {
  const response = await axios.delete(API + "/1");
  console.log(response.data);
};`} />

        <Callout variant="reactInfo" className="mt-3">
          <p className="text-sm text-[#2c3e50]">
            DummyJSON simulates POST, PUT, PATCH, and DELETE. It returns a
            realistic response, but the server data is not permanently changed.
          </p>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Axios vs Fetch: pros and cons</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border bg-white p-4">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="w-[15%] px-3 py-2">Library</th>
                <th className="w-[45%] px-3 py-2">Pros</th>
                <th className="w-[40%] px-3 py-2">Cons</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-b [&>tr:last-child]:border-0">
              <tr>
                <td className="px-3 py-2 align-top font-medium">Axios</td>
                <td className="px-3 py-2 align-top">
                  Less code to write, automatically gives you the JSON
                  data, automatically throws an error when the request
                  fails
                </td>
                <td className="px-3 py-2 align-top">
                  You have to install it first
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top font-medium">Fetch</td>
                <td className="px-3 py-2 align-top">
                  Already built into the browser, nothing to install
                </td>
                <td className="px-3 py-2 align-top">
                  More code to write, you must convert the response to
                  JSON yourself, and a failed request does not throw an
                  error automatically &mdash; you have to check it yourself
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout variant="reactMini" className="mt-3">
          <p className="text-sm text-[#2c3e50]">
            <strong>As a beginner:</strong> use Axios when you can install
            packages, since it does more of the work for you. Use Fetch when
            you cannot install anything, or the project asks you to avoid
            extra libraries.
          </p>
        </Callout>
      </section>

      <Callout variant="reactPractice">
        <b>Method summary</b>
        <ul className="mt-2 list-disc pl-6 text-sm">
          <li><strong>GET:</strong> read data</li>
          <li><strong>POST:</strong> create data</li>
          <li><strong>PUT:</strong> replace/update data</li>
          <li><strong>PATCH:</strong> update selected fields</li>
          <li><strong>DELETE:</strong> remove data</li>
        </ul>
      </Callout>
    </ReactLesson>
  );
}
