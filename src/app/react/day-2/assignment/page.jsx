import { ReactLesson } from "@/app/react/components/ReactLesson";
import { CodeBlock } from "@/components/code/CodeBlock";

export const metadata = { title: "React Day 2 Assignment" };

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

export default function ReactDay2Assignment() {
  return (
    <ReactLesson backHref="/react/day-2" title="🎯 Day 2 Assignment: Adding Life to your App">
      <Task
        badge="Task 1"
        title="Simple Multi-page Navigation"
        description='Create 3 pages: Home, Projects, Contact. Implement navigation using "react-router-dom" without page reload.'
        solution={`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/projects" element={<h1>My Projects</h1>} />
        <Route path="/contact" element={<h1>Contact Me</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
      />

      <Task
        badge="Task 2"
        title="Product Catalog with Dynamic Details"
        description="Build a small online store with a product list page. Each product must link to its own dynamic /products/:productId page. Show a helpful message when a product is not found."
        solution={`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 65000, description: "Work and study laptop" },
  { id: 2, name: "Phone", price: 30000, description: "5G smartphone" },
  { id: 3, name: "Headphones", price: 2500, description: "Wireless headphones" },
];

function ProductList() {
  return (
    <main>
      <h1>Products</h1>
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <Link to={"/products/" + product.id}>View details</Link>
        </article>
      ))}
    </main>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <Link to="/products">← Back to products</Link>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/products">Browse products</Link>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
      />

      <Task
        badge="Task 3"
        title="Job Portal with Job Details"
        description="Create a job portal with Home, Jobs, About, and dynamic /jobs/:jobId routes. Display the selected job's company, location, and description, with navigation back to the job list."
        solution={`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const jobs = [
  { id: 1, role: "Frontend Developer", company: "Pixel Labs", location: "Pune" },
  { id: 2, role: "React Developer", company: "WebWorks", location: "Delhi" },
  { id: 3, role: "UI Developer", company: "Design Hub", location: "Remote" },
];

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/jobs">Jobs</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}

function JobList() {
  return (
    <main>
      <h1>Open Positions</h1>
      {jobs.map((job) => (
        <article key={job.id}>
          <h2>{job.role}</h2>
          <p>{job.company} · {job.location}</p>
          <Link to={"/jobs/" + job.id}>View job</Link>
        </article>
      ))}
    </main>
  );
}

function JobDetails() {
  const { jobId } = useParams();
  const job = jobs.find((item) => item.id === Number(jobId));

  if (!job) {
    return <h1>Job not found</h1>;
  }

  return (
    <main>
      <Link to="/jobs">← Back to jobs</Link>
      <h1>{job.role}</h1>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Build accessible and responsive user interfaces.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Find Your Next Job</h1>} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/about" element={<h1>About Our Job Portal</h1>} />
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
