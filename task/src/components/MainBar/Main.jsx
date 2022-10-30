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
import Search from "../SearchBar/Search";
import MainPart from "./MainPart";
import SearchButtons from "../SearchBar/SearchButtons";
import Settings from "../SearchBar/Settings";

export default function Main() {
    return (
        <>
            <div className="flex flex-row flex-grow ">
                <div className="flex flex-col justify-between bg-[#2f3136] w-[280px] text-[#96989d]">
                    <div>
                        <Search />
                        <SearchButtons />
                    </div>
                    <Settings />
                </div>
                <MainPart />
            </div>
        </>
    );
}
