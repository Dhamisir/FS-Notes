import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prop Drilling",
  description:
    "A realistic prop drilling example that forwards user, theme, and cartCount state plus an addToCart action through Layout, Header, and Main so that distant components like Navbar and ProductCard can use them.",
  path: "/redux/day-1/prop-drilling",
});

export default function PropDrilling() {
  return (
    <ReduxLesson backHref="/redux/day-1" title="🎯 Realistic Example: Theme + Auth + Cart">
      <Callout variant="reduxIntro">
        <p className="text-sm text-[#2c3e50]">
          This is a realistic case where state is needed across distant
          components: <b>user</b>, <b>theme</b>, <b>cartCount</b>, and actions
          like <b>addToCart</b>.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🧱 App structure</h2>
        <CodeBlock
          language="plaintext"
          code={`App
 └── Layout
      ├── Header
      │     └── Navbar
      └── Main
            └── ProductPage
                  └── ProductCard`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          🔥 App.js (everything lives here)
        </h2>
        <CodeBlock
          language="jsx"
          code={`import React, { useState } from "react";
import Layout from "./Layout";

function App() {
  const [user, setUser] = useState({ name: "John" });
  const [theme, setTheme] = useState("light");
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <Layout
      user={user}
      theme={theme}
      setTheme={setTheme}
      cartCount={cartCount}
      addToCart={addToCart}
    />
  );
}

export default App;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🔹 Layout.js</h2>
        <p className="text-muted-foreground">
          Layout uses <code>theme</code>, but must still pass everything else.
        </p>
        <CodeBlock
          language="jsx"
          code={`import Header from "./Header";
import Main from "./Main";

function Layout({ user, theme, setTheme, cartCount, addToCart }) {
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <Header user={user} cartCount={cartCount} />
      <Main addToCart={addToCart} />
    </div>
  );
}

export default Layout;`}
        />
      </section>

      <Callout variant="reduxProblem">
        <p className="text-sm text-[#2c3e50]">
          <b>The pain:</b> components that don’t use a prop still have to forward
          it just because a deep child needs it.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🔹 Main.js</h2>
        <CodeBlock
          language="jsx"
          code={`import ProductPage from "./ProductPage";

function Main({ addToCart }) {
  return (
    <main>
      <ProductPage addToCart={addToCart} />
    </main>
  );
}

export default Main;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🔹 ProductCard.js</h2>
        <CodeBlock
          language="jsx"
          code={`function ProductCard({ addToCart }) {
  return (
    <div>
      <h3>Product 1</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;`}
        />
      </section>

      <Callout variant="reduxExample">
        <div className="text-sm text-[#2c3e50] font-semibold">
          🎯 Teaching line: We are not passing props because intermediate
          components need them — we are passing them because children need them.
          That’s prop drilling.
        </div>
      </Callout>
    </ReduxLesson>
  );
}

