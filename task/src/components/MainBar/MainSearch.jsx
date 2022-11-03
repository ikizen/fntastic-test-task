import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function MainSearch() {
    return (
        <>
            <div className="grow">
                <div className="relative content-center text-black">
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
        </>
    );
}
