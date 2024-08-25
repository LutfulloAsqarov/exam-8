import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import Lazy from "./components/lazy/Lazy.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback={<Lazy />}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </Suspense>
    </StrictMode>
);
