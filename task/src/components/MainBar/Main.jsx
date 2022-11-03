import React from "react";
// import "./App.css";
import Search from "../SearchBar/Search";
import MainPart from "./MainPart";
import SearchButtons from "../SearchBar/SearchButtons";
import Settings from "../SearchBar/Settings";

export default function Main() {
    return (
        <>
            <div className="flex flex-row flex-grow ">
                <div className="flex flex-col justify-between bg-searchbar w-[280px] text-black">
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
