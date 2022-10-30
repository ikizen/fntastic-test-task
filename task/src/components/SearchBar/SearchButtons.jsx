import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRocket,
    faPlus,
    faXmark,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function SearchButtons() {
    return (
        <>
            <div className="grow h-[2px] bg-[#202225]"></div>
            <div className="flex p-2 flex-col">
                <button className="flex flex-row items-center hover:text-white text-[20px] p-2 mb-[4px] hover:rounded-md hover:bg-[#42464d] grow">
                    <FontAwesomeIcon icon={faUser} className="px-2" size="lg" />
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
                        <Tooltip content="Создать ЛС" placement="top">
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
                                <Tooltip content="Не в сети" placement="top">
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
        </>
    );
}
