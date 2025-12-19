import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import TodosPage from "./components/TodosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<TodosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
