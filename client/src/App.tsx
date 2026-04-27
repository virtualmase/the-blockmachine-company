import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Machines from "./pages/Machines";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Sustainability from "./pages/Sustainability";
import Rentals from "./pages/Rentals";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/machines"} component={Machines} />
        <Route path={"/rentals"} component={Rentals} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/about"} component={About} />
        <Route path={"/sustainability"} component={Sustainability} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/admin"} component={Admin} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
