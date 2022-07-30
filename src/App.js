import "./styles.css";
import ThemeProvider from "./Material/PrimaryColor";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CmdP from "./components/cmd"
import CmdDialog from "./components/cmdDialog"
import CmdDial from "./components/cmdDialog"
import CmdD from "./components/cmdD"
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        {/* <CmdDialog></CmdDialog> */}
        <CmdD/>
        </Switch>
    </BrowserRouter>
  );
}
