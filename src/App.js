import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto py-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
