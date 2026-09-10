import { ReduxLesson } from "@/app/redux/components/ReduxLesson";
import { Callout } from "@/components/notes/Callout";
import { CodeBlock } from "@/components/code/CodeBlock";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Redux Toolkit Example",
  description:
    "A basic Redux Toolkit walkthrough covering configureStore, an authSlice created with createSlice, wrapping the app in a Provider, and reading and dispatching state with useSelector and useDispatch.",
  path: "/redux/day-2/rtk-example",
});

export default function RtkExample() {
  return (
    <ReduxLesson backHref="/redux/day-2" title="🚀 Basic Redux Example (RTK)">
      <p className="text-muted-foreground">
        We use <strong>Redux Toolkit (RTK)</strong> because it’s the professional
        way to write Redux today.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">1️⃣ store.js</h2>
        <Callout variant="reduxMini">
          <div className="text-sm text-[#2c3e50] font-semibold">store.js</div>
          <div className="mt-2">
            <CodeBlock
              language="js"
              code={`import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});`}
            />
          </div>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">2️⃣ authSlice.js</h2>
        <Callout variant="reduxMini">
          <div className="text-sm text-[#2c3e50] font-semibold">authSlice.js</div>
          <div className="mt-2">
            <CodeBlock
              language="js"
              code={`import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "John",
      role: "Admin",
      email: "john@example.com"
    }
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;`}
            />
          </div>
        </Callout>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">3️⃣ Wrap app</h2>
        <CodeBlock
          language="jsx"
          code={`import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>`}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#0288d1]">4️⃣ Use in component</h2>
        <Callout variant="reduxMini">
          <div className="text-sm text-[#2c3e50] font-semibold">
            ProfileSettings.js
          </div>
          <div className="mt-2">
            <CodeBlock
              language="jsx"
              code={`import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice";

function ProfileSettings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <button onClick={() => dispatch(logout())}>
      Logout {user?.name}
    </button>
  );
}`}
            />
          </div>
        </Callout>
      </section>
    </ReduxLesson>
  );
}

