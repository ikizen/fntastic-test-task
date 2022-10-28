import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
    const theme = {
        tooltip: {
            styles: {
                base: {
                    bg: "bg-[#202225]",
                    color: "text-white",
                    fontSize: "text-[7px]",
                    padding: "p-1",
                    borderRadius: "rounded",
                    fontWeight: "font-bold",
                    margin: "ml-[1px]",
                },
            },
        },
    };
    return (
        <ThemeProvider value={theme}>
            <div className="flex flex-row min-h-screen">
                <nav className="bg-[#202225] pt-2">
                    <ul>
                        <div className="mb-1">
                            <Tooltip
                                value={theme}
                                // className={theme}
                                content="Личные сообщения"
                                placement="right"
                            >
                                <div className="group/discord flex flex-row mr-1">
                                    <div className="flex self-center w-[2px] h-[4px] mr-[4px] rounded-tr-full rounded-br-full invisible bg-white group-hover/discord:h-[10px] group-hover/discord:visible"></div>
                                    <div className="flex justify-center items-center bg-[#36393f] rounded-full h-6  w-6 group-hover/discord:rounded-[11px] group-hover/discord:bg-[#5865f2]">
                                        <FontAwesomeIcon
                                            className=" rounded-full h-4 w-4 text-[#dcddde] group-hover/discord:text-white px-1"
                                            icon={faDiscord}
                                            size="xs"
                                        />
                                    </div>
                                </div>
                            </Tooltip>
                        </div>
                        <div className="flex justify-center mb-1">
                            <div className="flex bg-[#36393f] h-[1px] w-[16px] justify-self-center"></div>
                        </div>
                        <Tooltip
                            value={theme}
                            content="Nfactorial"
                            placement="right"
                        >
                            <div className="flex flex-row group/channels mr-1">
                                {/* <div className="flex self-center w-[2px] h-[4px] rounded-tr-full rounded-br-full bg-white group-hover/channels:h-[10px]"></div> */}
                                <div className="flex self-center w-[2px] h-[4px] mr-[4px] rounded-tr-full rounded-br-full invisible bg-white group-hover/channels:h-[10px] group-hover/channels:visible"></div>

                                <div className="flex flex-grow justify-center items-center h-[30px] rounded-full group-hover/channels:rounded-[11px]">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvYx0SzGIEPUw2fBFgdmfc1XzPDrvStMhT_NNRlah_Q&s"
                                        alt="nfactorial"
                                        className="group/channels  object-scale-down h-[30px] w-[30px] 
                                        rounded-full group-hover/channels:rounded-[11px]"
                                    />
                                </div>
                            </div>
                        </Tooltip>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </ul>
                </nav>
                <div className="flex flex-row">
                    <div className="bg-[#2f3136] w-[240px]">search bar</div>
                    <main className="flex flex-grow bg-[#36393f] ">
                        main
                        <nav>
                            <div></div>
                            <div></div>
                        </nav>
                        <div></div>
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
