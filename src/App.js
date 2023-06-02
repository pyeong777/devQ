import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { raven } from "./constants/raven";
import { AuthContextProvider } from "./components/context/AuthContext";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  raven();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <DarkModeProvider>
          <NavBar />
          <Outlet />
        </DarkModeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
