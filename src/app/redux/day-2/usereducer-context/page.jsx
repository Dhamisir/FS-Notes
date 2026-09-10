import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "useReducer + Context",
  description:
    "Upgrades a Context-based auth provider to useReducer, introducing an action-based authReducer with LOGIN, LOGOUT, and UPDATE_EMAIL cases so components dispatch actions instead of managing state directly.",
  path: "/redux/day-2/usereducer-context",
});

export default function UseReducerContext() {
  return (
    <ReduxLesson backHref="/redux/day-2" title="🔥 STEP 2 — useReducer + Context">
      <Callout variant="reduxIntro">
        <p className="text-sm text-[#2c3e50]">
          When state logic becomes complex, <code>useState</code> inside context
          gets hard to manage. <code>useReducer</code> introduces an action-based
          pattern.
        </p>
      </Callout>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">1️⃣ Create reducer</h2>
        <CodeBlock
          language="jsx"
          code={`import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: {
    name: "John",
    role: "Admin",
    email: "john@example.com"
  }
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "UPDATE_EMAIL":
      return { ...state, user: { ...state.user, email: action.payload } };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">2️⃣ Use it</h2>
        <CodeBlock
          language="jsx"
          code={`import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function ProfileSettings() {
  const { dispatch } = useContext(AuthContext);

  return (
    <button onClick={() => dispatch({ type: "LOGOUT" })}>
      Logout
    </button>
  );
}

export default ProfileSettings;`}
        />
      </section>

      <Callout variant="reduxSuccess">
        <h3 className="text-base font-semibold text-[#2c3e50]">🎯 What students learn</h3>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#2c3e50]">
          <li>Centralized business logic in the reducer</li>
          <li>Predictable updates via actions</li>
          <li>Components say what happened, not how to update</li>
          <li>Easier to scale by adding new action cases</li>
        </ul>
      </Callout>

      <Callout variant="reduxMini" className="bg-[#fff3e0] border-l-[#ff9800]">
        <div className="text-sm text-[#2c3e50]">
          <b>Next question:</b> What if we have Auth, Cart, Theme, Notifications,
          Products, Orders… do we create many contexts and nest providers?
          <br />
          This leads to <b>Redux</b>.
        </div>
      </Callout>
    </ReduxLesson>
  );
}

