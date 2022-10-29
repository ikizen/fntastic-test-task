import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function Sidebar() {
    return (
        <>
            <nav className="bg-[#202225] pt-4">
                <ul>
                    <div className="mb-2">
                        <Tooltip content="Личные сообщения" placement="right">
                            <div className="group/discord flex flex-row mr-2">
                                <div className="flex self-center w-[4px] h-[8px] mr-[8px] rounded-tr-full rounded-br-full invisible bg-white group-hover/discord:h-[20px] group-hover/discord:visible"></div>
                                <div className="flex justify-center items-center bg-[#36393f] rounded-full h-12  w-12 group-hover/discord:rounded-[22px] group-hover/discord:bg-[#5865f2]">
                                    <FontAwesomeIcon
                                        className=" rounded-full h-8 w-8 text-[#dcddde] group-hover/discord:text-white px-2"
                                        icon={faDiscord}
                                        size="xs"
                                    />
                                </div>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex justify-center mb-2">
                        <div className="flex bg-[#36393f] h-[2px] w-[32px] justify-self-center"></div>
                    </div>
                    <Tooltip content="Nfactorial" placement="right">
                        <div className="flex flex-row group/channels mr-2">
                            <div className="flex self-center w-[4px] h-[8px] mr-[8px] rounded-tr-full rounded-br-full invisible bg-white group-hover/channels:h-[20px] group-hover/channels:visible"></div>

                            <div className="flex flex-grow justify-center items-center h-[60px] rounded-full group-hover/channels:rounded-[22px]">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvYx0SzGIEPUw2fBFgdmfc1XzPDrvStMhT_NNRlah_Q&s"
                                    alt="nfactorial"
                                    className="group/channels  object-scale-down h-[60px] w-[60px] 
                                        rounded-full group-hover/channels:rounded-[22px]"
                                />
                            </div>
                        </div>
                    </Tooltip>
                </ul>
            </nav>
        </>
    );
}
