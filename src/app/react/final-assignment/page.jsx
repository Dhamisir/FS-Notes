import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "React Final Assignment",
  description:
    "Capstone project combining Day 1-4 skills into a Product Store app with React Router pages, a reusable ProductCard component, search-filtered product listing, dynamic product details with delete, and a controlled add-product form backed by the DummyJSON API.",
  path: "/react/final-assignment",
});

function Task({ badge, title, description, solution }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[#e74c3c] px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
        <div className="text-base font-semibold text-[#2c3e50]">{title}</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>

      {solution ? (
        <details className="mt-4 rounded-lg bg-[#f0f7ff] p-3">
          <summary className="cursor-pointer font-semibold text-[#0066cc]">
            💡 View Solution
          </summary>
          <div className="mt-3 rounded-md border-l-4 border-[#0066cc] bg-white p-3">
            <CodeBlock language="jsx" code={solution} />
          </div>
        </details>
      ) : null}
    </div>
  );
}

export default function ReactFinalAssignment() {
  return (
    <ReactLesson backHref="/react" title="🏁 Final Assignment: Product Store App">
      <Callout variant="reactIntro">
        <p className="text-sm text-[#2c3e50]">
          This is a capstone task. It combines everything from Day 1 to
          Day 4: components &amp; props, React Router, useState, and
          useEffect with a real API.
        </p>
      </Callout>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50]">Requirements</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-muted-foreground">
          <li>
            Set up routes with <code>react-router-dom</code>: Home,
            Products, Product Details (<code>/products/:productId</code>),
            and Add Product.
          </li>
          <li>Add a Navbar with <code>Link</code> for every route.</li>
          <li>
            Create a reusable <code>ProductCard</code> component that
            receives a product through <code>props</code> and shows its
            image, title, category, and price.
          </li>
          <li>
            On the Products page, fetch products from
            <code> https://dummyjson.com/products</code> inside
            <code> useEffect</code> and store them with
            <code> useState</code>.
          </li>
          <li>Show a loading message while the request is in progress.</li>
          <li>
            Add a search input (controlled with <code>useState</code>)
            that filters the product list by title.
          </li>
          <li>
            On the Product Details page, read <code>productId</code> with
            <code> useParams()</code> and fetch that one product inside
            <code> useEffect</code> (the effect should re-run whenever the
            id changes).
          </li>
          <li>Add a Delete button on the details page that removes the product and navigates back to the list.</li>
          <li>
            Add an Add Product page with a controlled form
            (<code>useState</code> per field) that sends a POST request.
          </li>
        </ol>
      </section>

      <Callout variant="reactPractice">
        <b>Bonus</b>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
          <li>Add an "Update price" button that sends a PATCH request.</li>
          <li>Show an error message if a request fails.</li>
          <li>Add a 404 route for unmatched paths.</li>
          <li>Disable the submit button while a request is running.</li>
        </ul>
      </Callout>

      <Task
        badge="Solution"
        title="Full Product Store App"
        description="One way to put every piece together: routing, a shared ProductCard component, controlled search and form inputs, and useEffect-driven CRUD calls."
        solution={`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://dummyjson.com/products";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <Link to="/add-product">Add Product</Link>
    </nav>
  );
}

// Reusable component - receives data through props
function ProductCard({ product }) {
  return (
    <article>
      <img src={product.thumbnail} alt={product.title} width={80} />
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <strong>\${product.price}</strong>
      <br />
      <Link to={"/products/" + product.id}>View details</Link>
    </article>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Runs once when the page mounts
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(API + "?limit=12");
        setProducts(response.data.products);
      } catch (err) {
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Products</h1>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products..."
      />
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs again whenever productId changes
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(API + "/" + productId);
      setProduct(response.data);
      setLoading(false);
    };

    getProduct();
  }, [productId]);

  const handleDelete = async () => {
    await axios.delete(API + "/" + productId);
    navigate("/products");
  };

  const handleUpdatePrice = async () => {
    const response = await axios.patch(API + "/" + productId, {
      price: product.price + 500,
    });
    setProduct((prev) => ({ ...prev, price: response.data.price }));
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <main>
      <Link to="/products">← Back to products</Link>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <strong>\${product.price}</strong>
      <br />
      <button onClick={handleUpdatePrice}>Increase price by 500</button>
      <button onClick={handleDelete}>Delete product</button>
    </main>
  );
}

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    const response = await axios.post(API + "/add", {
      title,
      price: Number(price),
    });
    setMessage("Created: " + response.data.title);
    setTitle("");
    setPrice("");
    setSaving(false);
  };

  return (
    <main>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Product title"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
          type="number"
        />
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add product"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Product Store</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
      />
    </ReactLesson>
  );
}
