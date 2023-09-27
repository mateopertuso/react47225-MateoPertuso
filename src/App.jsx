

import ResponsiveAppBar from "./components/layout/navbar/Navbar";
import { Box } from "@mui/material";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
/* import { Home } from "./components/pages/home/Home"; */




function App() {

  let bienvenida = "Bienvenido a nuestra tienda! Encontrá lo que buscas.";

  return (
      <Box>
        <ResponsiveAppBar  />
        <ItemListContainer bienvenida={bienvenida} />
        {/* <Home /> */}
      </Box>
  );
}

export default App;

