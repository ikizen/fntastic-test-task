import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMessage,
    faInbox,
    faCircle,
    faCircleQuestion,
    faMagnifyingGlass,
    faComment,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function MainPart() {
    return (
        <>
            <main className="flex flex-col flex-grow bg-[#36393f] ">
                <nav className="flex flex-row h-[60px] justify-between items-center">
                    <div className="flex flex-row px-4 gap-x-4 text-[18px] text-[#96989d] p-2 justify-between">
                        <button className="rounded-md hover:bg-[#454950] p-2">
                            В сети
                        </button>
                        <button className="rounded-md hover:bg-[#454950] px-2">
                            Все
                        </button>
                        <button className="rounded-md hover:bg-[#454950] px-2">
                            Ожидание
                        </button>
                        <button className="rounded-md hover:bg-[#454950] px-2">
                            Заблокированные
                        </button>
                        <button className="text-white rounded-md bg-[#2d7d46] px-2">
                            Добавить в друзья
                        </button>
                    </div>
                    <div className="flex flex-row px-6 gap-x-6 content-center text-[#b9bbbe]">
                        <button>
                            <Tooltip
                                placement="bottom"
                                content="Новый чат"
                                className="items-center"
                            >
                                <FontAwesomeIcon icon={faMessage} size="lg" />
                            </Tooltip>
                        </button>
                        <button>
                            <Tooltip
                                placement="bottom"
                                content="Почта"
                                className="items-center"
                            >
                                <FontAwesomeIcon icon={faInbox} size="lg" />
                            </Tooltip>
                        </button>
                        <button>
                            <Tooltip
                                placement="left"
                                content="Помощь"
                                className="items-center"
                            >
                                <FontAwesomeIcon
                                    icon={faCircleQuestion}
                                    size="lg"
                                />
                            </Tooltip>
                        </button>
                    </div>
                </nav>

                <div className="h-[2px] bg-[#20222573]"></div>

                <div className="grow flex flex-row">
                    <div className="grow py-4 px-6 text-[18px] text-[#6d6f73]">
                        <div className="grow">
                            <div className="relative content-center text-[#6d6f73]">
                                <input
                                    type="text"
                                    className="w-full rounded-md form-input placeholder-[#6d6f73] appearance-none  bg-[#202225] border-2 px-4 py-[8px] border-[#202225] text-[18px] focus:outline-none"
                                    placeholder="Поиск"
                                />
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    size="md"
                                    className="pointer-events-none absolute right-3 top-2"
                                />
                            </div>
                        </div>
                        <div className="grow my-6">В сети - 2</div>

                        <button className="w-full border-t-[2px] border-[#40444b] rounded p-2 hover:bg-[#40444b]">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row  rounded-md items-center">
                                    <div className="flex items-end rounded-full justify-end w-10 h-10 bg-cover  bg-center bg-[url('../public/face.jpg')]">
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className="text-[7px] text-[#3ba55d] border-[#3ba55d] rounded-full border-[1.5px]"
                                            size="md"
                                        />
                                    </div>
                                    <div className="flex flex-col pl-2">
                                        <div className="h-6 text-white font-bold pr-[6px] content-end">
                                            Aidyn Sairan
                                        </div>
                                        <div className="h-6 self-start align-top text-[12px]">
                                            #9903
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-self-end">
                                    <Tooltip
                                        content="Сообщение"
                                        placeholder="top"
                                    >
                                        <button className="h-10 w-10 bg-[#2f3136] rounded-full justify-center content-center hover:bg-[#202225] hover:text-white">
                                            <FontAwesomeIcon
                                                icon={faComment}
                                                size="lg"
                                            />
                                        </button>
                                    </Tooltip>
                                    <div className="ml-2">
                                        <Tooltip
                                            content="Ещё"
                                            placeholder="top"
                                        >
                                            <button className="h-10 w-10 bg-[#2f3136] rounded-full justify-center content-center hover:bg-[#202225] hover:text-white">
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
                    </div>

                    <div className="bg-[#40444b] w-[2px]"></div>

                    <div className="flex flex-col basis-3/12 w-500 p-4 text-white text-[20px]">
                        <div className="font-bold pt-4 pb-8">
                            Активные контакты
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="font-normal mb-2">
                                Пока что тут тихо...
                            </div>
                            <div className="text-[14px]">
                                Если ваш друг начнет чем то заниматься то вы
                                увидите это здесь!
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
