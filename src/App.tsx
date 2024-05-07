import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div className="flex justify-center items-center">
      <p>Auth Checking...</p>
    </div>
  ) : (
    <div className="bg-[#F7F7F7]">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
