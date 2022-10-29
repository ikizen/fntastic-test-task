import React from "react";
// import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRocket,
    faPlus,
    faXmark,
    faCircle,
    faMicrophone,
    faHeadphones,
    faGear,
    faMessage,
    faInbox,
    faCircleQuestion,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";
import Search from "../Search";
import MainPart from "./MainPart";

export default function Main() {
    return (
        <>
            <div className="flex flex-row flex-grow ">
                <div className="flex flex-col justify-between bg-[#2f3136] w-[280px] text-[#96989d]">
                    <div>
                        <Search />
                        <div className="grow h-[2px] bg-[#202225]"></div>
                        <div className="flex p-2 flex-col">
                            <button className="flex flex-row items-center hover:text-white text-[20px] p-2 mb-[4px] hover:rounded-md hover:bg-[#42464d] grow">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="px-2"
                                    size="lg"
                                />
                                <div className="flex grow p-2">Друзья</div>
                            </button>
                            <button className="flex flex-row items-center text-[20px] py-2 px-2 hover:rounded-md hover:bg-[#42464d] hover:text-white grow">
                                <FontAwesomeIcon
                                    icon={faRocket}
                                    className="px-2"
                                    size="lg"
                                />
                                <div className="flex grow p-2">Nitro</div>
                            </button>
                            <div className="flex flex-row p-2 text-[16px] text-[#96989d] items-center justify-between">
                                <div className=" hover:text-white px-[4px]">
                                    Личные сообщения
                                </div>
                                <button className="flex justify-self-end px-2">
                                    <Tooltip
                                        content="Создать ЛС"
                                        placement="top"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className="hover:text-white"
                                            size="lg"
                                        />
                                    </Tooltip>
                                </button>
                            </div>
                            <div className="flex text-[20px]">
                                <button className="grow group flex flex-row p-2 rounded-md hover:bg-[#42464d] hover:text-white items-center justify-between">
                                    <div className="flex flex-row items-center">
                                        <div className="flex items-end rounded-full justify-end w-8 h-8 bg-cover  bg-center bg-[url('../public/face.jpg')]">
                                            <Tooltip
                                                content="Не в сети"
                                                placement="top"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCircle}
                                                    className="text-[7px] text-[#2f3136] border-[#96989d] rounded-full border-[3px]"
                                                    size="sm"
                                                />
                                            </Tooltip>
                                        </div>

                                        <div className="px-2">Aidyn Sairan</div>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className="px-2 invisible group-hover:visible text-[16px]"
                                        size="md"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-[#292b2f]">
                        <div className="flex flex-row items-center p-2 bg-[#292b2f] text-[12px]">
                            <button className="flex flex-row hover:bg-[#36393f] rounded-sm items-center">
                                <div className="flex items-end rounded-full justify-end w-7 h-7 bg-cover  bg-center bg-[url('../public/face.jpg')]">
                                    <Tooltip placement="top" content="В сети">
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className="text-[7px] text-[#3ba55d] border-[#3ba55d] rounded-full border-[3px]"
                                            size="sm"
                                        />
                                    </Tooltip>
                                </div>
                                <div className="flex flex-col pl-2 mr-1">
                                    <div className=" flex h-6 text-white font-bold items-end">
                                        Aidyn Sairan
                                    </div>
                                    <div className="h-6 self-start align-top text-[12px]">
                                        #9903
                                    </div>
                                </div>
                            </button>
                            <Tooltip placement="top" content="Выкл. микрофон">
                                <button className="h-8 w-8 rounded-md hover:bg-[#36393f]">
                                    <FontAwesomeIcon
                                        icon={faMicrophone}
                                        size="lg"
                                        className="text-[20px]"
                                    />
                                </button>
                            </Tooltip>
                            <Tooltip placement="top" content="Откл. звук">
                                <button className="h-8 w-8 rounded-md hover:bg-[#36393f]">
                                    <FontAwesomeIcon
                                        icon={faHeadphones}
                                        size="lg"
                                        className="text-[20px]"
                                    />
                                </button>
                            </Tooltip>
                            <Tooltip placement="top" content="Настройки">
                                <button className="h-8 w-8 rounded-md hover:bg-[#36393f]">
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        size="lg"
                                        className="text-[20px]"
                                    />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <MainPart />
            </div>
        </>
    );
}
