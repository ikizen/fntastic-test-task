import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faUser,
    faRocket,
    faPlus,
    faXmark,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { Dialog, Tooltip } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import Search from "./components/Search";

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
            <div className="flex flex-row min-h-screen w-full text-xs">
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
                <div className="flex flex-row grow ">
                    <div className="flex flex-col content-between bg-[#2f3136] w-[140px] text-[#96989d]">
                        <div>
                            <Search />
                            <div className="grow h-[1px] bg-[#202225]"></div>
                            <div className="flex p-1 flex-col">
                                <button className="flex flex-row items-center hover:text-white text-[10px] p-1 mb-[2px] hover:rounded-sm hover:bg-[#42464d] grow">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="px-1 "
                                        size="md"
                                    />
                                    <div className="flex grow px-1">Друзья</div>
                                </button>
                                <button className="flex flex-row items-center text-[10px] py-1 px-1 hover:rounded-sm hover:bg-[#42464d] hover:text-white grow">
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        className="px-1 "
                                        size="md"
                                    />
                                    <div className="flex grow px-1">Nitro</div>
                                </button>
                                <div className="flex flex-row p-1 text-[8px] text-[#96989d] items-center justify-between">
                                    <div className=" hover:text-white px-[2px]">
                                        Личные сообщения
                                    </div>
                                    <button className="flex justify-self-end px-2">
                                        <Tooltip
                                            value={theme}
                                            // className={theme}
                                            content="Создать ЛС"
                                            placement="top"
                                        >
                                            <FontAwesomeIcon
                                                // icon="fa-solid fa-user-group"
                                                icon={faPlus}
                                                className="hover:text-white"
                                                size="lg"
                                            />
                                        </Tooltip>
                                    </button>
                                </div>
                                <div className="flex text-[10px]">
                                    <button className="grow group flex flex-row p-1 rounded-sm hover:bg-[#42464d] hover:text-white items-center justify-between">
                                        <div className="flex flex-row">
                                            <div className="flex items-end rounded-full justify-end w-4 h-4 bg-cover  bg-center bg-[url('../public/face.jpg')]">
                                                <Tooltip
                                                    content="Не в сети"
                                                    placement="top"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCircle}
                                                        className="text-[3.5px] text-[#2f3136] border-[#96989d] rounded-full border-[1.5px]"
                                                        size="xs"
                                                    />
                                                </Tooltip>
                                            </div>

                                            <div className="px-1">
                                                Aidyn Sairan
                                            </div>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className="px-1 invisible group-hover:visible text-[8px]"
                                            size="sm"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#292b2f]">hello</div>
                    </div>
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
