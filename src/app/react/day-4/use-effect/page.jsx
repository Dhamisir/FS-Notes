import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "useEffect & API Integration",
  description:
    "Explains why data fetching needs useEffect to avoid an infinite render loop, covers how the dependency array controls when effects run, and demonstrates fetching products and refetching when a dependency like productId changes.",
  path: "/react/day-4/use-effect",
});

export default function UseEffectLesson() {
  return (
    <ReactLesson backHref="/react/day-4" title="2️⃣ useEffect & API Integration">
      <Callout variant="reactMini">
        <p className="text-sm text-[#2c3e50]">
          <code>useEffect</code> runs side effects after React renders. API
          requests, timers, and event subscriptions are common side effects.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">❌ Problem without useEffect</h2>
        <CodeBlock language="jsx" code={`function Products() {
  const [products, setProducts] = useState([]);

  // Runs during every render - do not do this
  const loadProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };
  loadProducts();

  return <div>{products.length} products</div>;
}`} />
        <Callout variant="problem" className="mt-3">
          <ol className="list-decimal space-y-1 pl-6 text-sm text-[#2c3e50]">
            <li>The component renders and sends a request.</li>
            <li>The response updates state.</li>
            <li>The state update causes another render.</li>
            <li>Another request is sent, creating a render/request loop.</li>
          </ol>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">useEffect syntax</h2>
        <CodeBlock language="jsx" code={`useEffect(() => {
  // side effect
}, [dependencies]);`} />
        <div className="mt-3 overflow-x-auto rounded-lg border bg-white p-4">
          <table className="w-full text-left text-sm">
            <thead><tr><th>Dependency</th><th>When effect runs</th></tr></thead>
            <tbody>
              <tr><td>No array</td><td>After every render</td></tr>
              <tr><td><code>[]</code></td><td>After the first render</td></tr>
              <tr><td><code>[value]</code></td><td>After first render and when value changes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">✅ Fetch and render products with Axios</h2>
        <CodeBlock language="jsx" code={`import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=8"
      );
      setProducts(response.data.products);
    } catch (error) {
      setError("Unable to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {products.map((product) => (
        <article key={product.id}>
          <img src={product.thumbnail} alt={product.title} width="150" />
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
        </article>
      ))}
    </div>
  );
}`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#2c3e50]">Effect with a changing ID</h2>
        <CodeBlock language="jsx" code={`useEffect(() => {
  const getProduct = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/" + productId
    );
    setProduct(response.data);
  };

  getProduct();
}, [productId]);`} />
        <p className="mt-2 text-sm text-muted-foreground">
          This effect runs again whenever <code>productId</code> changes.
        </p>

        <p className="mt-3 text-sm font-semibold text-[#2c3e50]">
          Proof: buttons that change the id
        </p>
        <CodeBlock language="jsx" code={`function ProductViewer() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/" + productId
      );
      setProduct(response.data);
    };

    getProduct();
  }, [productId]);

  return (
    <div>
      <button onClick={() => setProductId(1)}>Product 1</button>
      <button onClick={() => setProductId(2)}>Product 2</button>
      <button onClick={() => setProductId(3)}>Product 3</button>

      {product && <p>{product.title}</p>}
    </div>
  );
}`} />
        <p className="mt-2 text-sm text-muted-foreground">
          Clicking a button updates <code>productId</code>. Since
          <code> productId</code> is in the dependency array, the effect runs
          again and calls the API for the new id.
        </p>
      </section>
    </ReactLesson>
  );
}
