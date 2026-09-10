import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "useContext + useState",
  description:
    "Shows how to eliminate prop drilling by building an AuthContext with createContext and useState, wrapping the app in an AuthProvider, and reading user data or calling logout from any component with useContext.",
  path: "/redux/day-2/usecontext",
});

export default function UseContext() {
  return (
    <ReduxLesson backHref="/redux/day-2" title="✅ STEP 1 — Fix Using useContext + useState">
      <Callout variant="reduxIntro">
        <p className="text-sm text-[#2c3e50]">
          We remove prop drilling using the <b>Context API</b>. Components read
          global data directly instead of receiving it via props.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          1️⃣ Create AuthContext
        </h2>
        <CodeBlock
          language="jsx"
          code={`import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "John",
    role: "Admin",
    email: "john@example.com"
  });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          2️⃣ Wrap app with provider
        </h2>
        <CodeBlock
          language="jsx"
          code={`import React from "react";
import { AuthProvider } from "./AuthContext";
import DashboardLayout from "./DashboardLayout";

function App() {
  return (
    <AuthProvider>
      <DashboardLayout />
    </AuthProvider>
  );
}

export default App;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          3️⃣ Use context anywhere (no props)
        </h2>
        <CodeBlock
          language="jsx"
          code={`import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>{user?.name}</h3>
      <p>{user?.role}</p>
    </div>
  );
}

export default Sidebar;`}
        />
        <CodeBlock
          language="jsx"
          code={`import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function ProfileSettings() {
  const { logout } = useContext(AuthContext);
  return <button onClick={logout}>Logout</button>;
}

export default ProfileSettings;`}
        />
      </section>

      <Callout variant="reduxSuccess">
        <h3 className="text-base font-semibold text-[#2c3e50]">🎯 What we solved</h3>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>No prop drilling</li>
          <li>No forwarding props through layers</li>
          <li>Any component can access global auth data</li>
        </ul>
      </Callout>

      <Callout variant="reduxProblem">
        <h3 className="text-base font-semibold text-[#2c3e50]">
          🚨 New problem
        </h3>
        <p className="mt-2 text-sm text-[#2c3e50]">
          As features grow, all logic lives inside the provider file and becomes
          messy.
        </p>
      </Callout>
    </ReduxLesson>
  );
}

