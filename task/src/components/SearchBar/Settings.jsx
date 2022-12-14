import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faMicrophone,
    faHeadphones,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function Settings() {
    return (
        <>
            {/* <div className="flex bg-[#A29364]"> */}
            <div className="flex flex-row items-center p-2 bg-[#8B8676] text-[12px]">
                <button className="flex flex-row hover:bg-[#c5a648] text-black  rounded-sm items-center">
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
                        <div className=" flex h-6 text-black font-bold items-end">
                            Aidyn Sairan
                        </div>
                        <div className="h-6 self-start align-top text-[12px]">
                            #9903
                        </div>
                    </div>
                </button>
                <Tooltip placement="top" content="Выкл. микрофон">
                    <button className="h-8 w-8 text-black rounded-md hover:bg-[#c5a648]">
                        <FontAwesomeIcon
                            icon={faMicrophone}
                            size="lg"
                            className="text-[20px]"
                        />
                    </button>
                </Tooltip>
                <Tooltip placement="top" content="Откл. звук">
                    <button className="h-8 w-8 text-black rounded-md hover:bg-[#c5a648]">
                        <FontAwesomeIcon
                            icon={faHeadphones}
                            size="lg"
                            className="text-[20px]"
                        />
                    </button>
                </Tooltip>
                <Tooltip placement="top" content="Настройки">
                    <button className="h-8 w-8 text-black rounded-md hover:bg-[#c5a648]">
                        <FontAwesomeIcon
                            icon={faGear}
                            size="lg"
                            className="text-[20px]"
                        />
                    </button>
                </Tooltip>
            </div>
            {/* </div> */}
        </>
    );
}
