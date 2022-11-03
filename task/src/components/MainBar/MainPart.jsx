import React from "react";
import MainSearch from "./MainSearch";
import MainNavbar from "./MainNavbar";
import MainChats from "./MainChats";

export default function MainPart() {
    return (
        <>
            <main className="flex flex-col flex-grow bg-mainbar">
                <MainNavbar />
                <div className="h-[2px] bg-[#8B8676]"></div>

                <div className="grow flex flex-row">
                    <div className="grow py-4 px-6 text-[18px] text-[#6d6f73]">
                        <MainSearch />
                        <MainChats />
                    </div>

                    <div className="bg-[#40444b] w-[2px]"></div>

                    <div className="flex flex-col basis-3/12 w-500 p-4 text-black text-[20px]">
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
