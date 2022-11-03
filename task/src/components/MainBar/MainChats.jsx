import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faComment,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function MainChats() {
    return (
        <>
            <div className="grow my-6 text-black">В сети - 2</div>

            <button className="w-full border-t-[2px] border-[#a29364] rounded p-2 hover:bg-[#a29364]">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row  rounded-md items-center">
                        <div className="flex items-end rounded-full justify-end w-10 h-10 bg-cover  bg-center bg-[url('../public/face.jpg')]">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="text-[7px] text-[#3ba55d] border-[#3ba55d] rounded-full border-[1.5px]"
                                size="md"
                            />
                        </div>
                        <div className="flex flex-col pl-2 text-black">
                            <div className="h-6 text-black font-bold pr-[6px] content-end">
                                Aidyn Sairan
                            </div>
                            <div className="h-6 self-start align-top text-[12px]">
                                #9903
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-self-end text-black">
                        <Tooltip content="Сообщение" placeholder="top">
                            <button className="h-10 w-10 bg-[#a29364] rounded-full justify-center content-center hover:bg-[#dcb336]">
                                <FontAwesomeIcon icon={faComment} size="lg" />
                            </button>
                        </Tooltip>
                        <div className="ml-2">
                            <Tooltip content="Ещё" placeholder="top">
                                <button className="h-10 w-10 bg-[#a29364] rounded-full justify-center content-center hover:bg-[#dcb336] hover:text-black">
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                        size="lg"
                                    />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </button>
        </>
    );
}
