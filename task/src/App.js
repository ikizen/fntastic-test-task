import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import Main from "./components/MainBar/Main";
import Sidebar from "./components/SideBar/Sidebar";

const theme = {
    tooltip: {
        styles: {
            base: {
                bg: "bg-[#202225]",
                color: "text-black",
                fontSize: "text-[14px]",
                padding: "p-2",
                borderRadius: "rounded",
                fontWeight: "font-bold",
                margin: "ml-[8px]",
                backgroundColor: "bg-[#a29364]",
            },
        },
    },
};
function App() {
    return (
        <ThemeProvider value={theme}>
            <div className="flex flex-row min-h-screen w-full text-xs">
                <Sidebar />
                <Main />
            </div>
        </ThemeProvider>
    );
}

export default App;
