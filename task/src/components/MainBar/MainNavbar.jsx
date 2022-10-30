import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMessage,
    faInbox,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

export default function MainNavbar() {
    return (
        <>
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
        </>
    );
}
