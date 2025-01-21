import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import AktiviteterPage from "./pages/aktiviteter/AktiviteterPage";
import Backoffice from "./pages/backoffice/Backoffice";
import KontaktPage from "./pages/kontakt/KontaktPage";
import MinlistePage from "./pages/minliste/MinlistePage";
import Navigation from "./components/Navigation/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import useAuth from "./hooks/useAuth";
import Footer from "./components/footer/Footer";
import OpholdPage from "./pages/ophold/OpholdPage";
import OpholdSinglePage from "./pages/opholdsingle/OpholdSinglePage";

// Application
const App = () => {
  const { signedIn } = useAuth();

  // Setting Up Routes
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    { path: "/login", element: <Login></Login>
    },

    {
      path: "/aktiviteter",
      element: <AktiviteterPage></AktiviteterPage>,
    },
    {
      path: "/ophold",
      element: <OpholdPage></OpholdPage>,
    },
    {
      path: "/ophold/:id",
      element: <OpholdSinglePage></OpholdSinglePage>,
    },

    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={signedIn}>
          <Backoffice />
        </ProtectedRoute>
      ),
    },
    {
      path: "/kontakt",
      element: <KontaktPage></KontaktPage>,
    },
    {
      path: "/minliste",
      element: <MinlistePage></MinlistePage>,
    },
    {
      path: "*",
      element: <div>NOT FOUND</div>,
    },
  ]);

  return (
    <>
      <div>
        <Navigation></Navigation>
        <div>{routes}</div>
        {/* GLOBAL FOOTER */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
