import { ReactFlowProvider } from "reactflow";
import MainRoutes from "./routes/MainRoutes";

import { BrowserRouter } from "react-router-dom";
export default () => (
<BrowserRouter>

  <ReactFlowProvider>
    <MainRoutes/>
  </ReactFlowProvider>
</BrowserRouter>
);
