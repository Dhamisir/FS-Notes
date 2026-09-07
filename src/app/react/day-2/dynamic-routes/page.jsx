import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "Dynamic Routes (useParams)" };

export default function DynamicRoutes() {
  return (
    <ReactLesson backHref="/react/day-2" title="4️⃣ Dynamic Routes (useParams)">
      <Callout variant="reactMini">
        <div className="text-sm text-[#2c3e50]">
          Dynamic routes use one route pattern to display different records.
          For example, <code>/products/1</code> and <code>/products/2</code> both
          use <code>/products/:productId</code>.
        </div>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          1️⃣ Static route vs dynamic route
        </h2>
        <div className="mt-3 overflow-x-auto rounded-lg border bg-white p-4 text-sm">
          <table className="w-full text-left">
            <thead><tr><th>Route type</th><th>Path</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Static</td><td><code>/products</code></td><td>Product list</td></tr>
              <tr><td>Dynamic</td><td><code>/products/:productId</code></td><td>One product</td></tr>
            </tbody>
          </table>
        </div>
        <Callout variant="reactInfo" className="mt-3">
          <p className="text-sm text-[#2c3e50]">
            The colon in <code>:productId</code> marks a changing URL parameter.
            The parameter name can be anything, but it must match the name read
            with <code>useParams()</code>.
          </p>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          2️⃣ Read a URL parameter with useParams
        </h2>
        <CodeBlock
          language="jsx"
          code={`import { Routes, Route, useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();

  return <h1>Product ID: {productId}</h1>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/products/:productId" element={<ProductPage />} />
    </Routes>
  );
}`}
        />
        <Callout variant="reactMini" className="mt-3">
          <p className="text-sm text-[#2c3e50]">
            URL parameters are always strings. For <code>/products/2</code>,
            <code> productId</code> is <code>&quot;2&quot;</code>, not the number <code>2</code>.
          </p>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          3️⃣ Create dynamic links from data
        </h2>
        <CodeBlock
          language="jsx"
          code={`import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" },
];

function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>{" "}
          <Link to={"/products/" + product.id}>View details</Link>
        </div>
      ))}
    </div>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          4️⃣ Find and display the selected record
        </h2>
        <CodeBlock
          language="jsx"
          code={`import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products">← Back to products</Link>
      <h1>{product.name}</h1>
    </div>
  );
}`}
        />
        <Callout variant="reactInfo" className="mt-3">
          <ul className="list-disc pl-6 text-sm text-[#2c3e50]">
            <li><code>Number(productId)</code> converts the URL string to a number.</li>
            <li><code>find()</code> returns the matching object.</li>
            <li>The early return handles an ID that does not exist.</li>
          </ul>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">
          5️⃣ Complete product routing example
        </h2>
        <CodeBlock
          language="jsx"
          code={`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 65000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 2500 },
];

function ProductList() {
  return (
    <main>
      <h1>Products</h1>
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <Link to={"/products/" + product.id}>View details</Link>
        </article>
      ))}
    </main>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) return <h1>Product not found</h1>;

  return (
    <main>
      <Link to="/products">← Back</Link>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </section>

      <Callout variant="reactPractice">
        <b>🧠 Quick Practice</b>
        <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm">
          <li>Create a <code>/students/:studentId</code> route.</li>
          <li>Render links for three students from an array.</li>
          <li>Find and display the selected student using <code>useParams</code>.</li>
          <li>Show “Student not found” for an invalid ID.</li>
        </ol>
      </Callout>
    </ReactLesson>
  );
}
