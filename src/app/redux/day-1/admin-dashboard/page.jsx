import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Admin Dashboard Prop Drilling",
  description:
    "Walks through an admin dashboard where a user object and a logout action must be threaded from App through DashboardLayout, Content, and ProfilePage down to ProfileSettings, showing how prop drilling emerges naturally.",
  path: "/redux/day-1/admin-dashboard",
});

export default function AdminDashboard() {
  return (
    <ReduxLesson backHref="/redux/day-1" title="🎯 Real Example: Admin Dashboard">
      <Callout variant="reduxIntro">
        <p className="text-sm text-[#2c3e50]">
          Here state includes <b>actions</b> like <code>logout</code> that must be
          triggered deep in the tree. Prop drilling happens naturally.
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>
            <b>user</b> needed in Layout, Sidebar, Header, Profile
          </li>
          <li>
            <b>logout</b> needed deep in ProfileSettings
          </li>
        </ul>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          🧱 Component structure
        </h2>
        <CodeBlock
          language="plaintext"
          code={`App
 └── DashboardLayout
      ├── Sidebar
      ├── Header
      └── Content
            └── ProfilePage
                  └── ProfileSettings`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🔥 App.js</h2>
        <CodeBlock
          language="jsx"
          code={`import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

function App() {
  const [user, setUser] = useState({
    name: "John",
    role: "Admin",
    email: "john@example.com"
  });

  const logout = () => setUser(null);

  return <DashboardLayout user={user} logout={logout} />;
}

export default App;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          🔹 DashboardLayout.js
        </h2>
        <Callout variant="reduxSuccess">
          Layout actually uses <code>user</code>, so this feels correct.
        </Callout>
        <CodeBlock
          language="jsx"
          code={`import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function DashboardLayout({ user, logout }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar user={user} />
      <div style={{ flex: 1 }}>
        <Header user={user} />
        <Content user={user} logout={logout} />
      </div>
    </div>
  );
}

export default DashboardLayout;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">🔹 Content.js</h2>
        <Callout variant="reduxProblem">
          Content does <b>not</b> use <code>logout</code>, but must pass it down.
        </Callout>
        <CodeBlock
          language="jsx"
          code={`import ProfilePage from "./ProfilePage";

function Content({ user, logout }) {
  return (
    <div style={{ padding: 20 }}>
      <ProfilePage user={user} logout={logout} />
    </div>
  );
}

export default Content;`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">
          🔹 ProfileSettings.js
        </h2>
        <CodeBlock
          language="jsx"
          code={`function ProfileSettings({ logout }) {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfileSettings;`}
        />
      </section>

      <Callout variant="reduxExample">
        💡 Prop drilling happens when global data lives at the top, multiple
        branches need it, and deep components trigger actions.
      </Callout>
    </ReduxLesson>
  );
}

