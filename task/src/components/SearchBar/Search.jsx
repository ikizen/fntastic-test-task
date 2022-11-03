import { Fragment, useState } from "react";
import { Dialog } from "@material-tailwind/react";

export default function Search() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>
            <div className="flex">
                <button
                    onClick={handleOpen}
                    className="text-black text-[14px] bg-sidebar rounded-[6px] py-2 px-[12px] flex-1 m-2 grow"
                >
                    <div className="flex flex-start">
                        Найти или начать беседу
                    </div>
                </button>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                size="md"
                className="bg-sidebar text-black text-sm rounded-[10px] p-4"
            >
                <div className="mb-8">
                    <input
                        className="placeholder-black shadow appearance-none border rounded w-full py-4 px-6 leading-tight focus:outline-none focus:shadow-outline bg-searchbar border-none"
                        id="username"
                        type="text"
                        placeholder="Куда отправимся?"
                    />
                </div>
                <div className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque accusantium illum praesentium voluptatum neque a
                    hic, officiis harum animi expedita, corrupti ipsum iste
                    blanditiis ad facere fugit cumque ea sed.
                </div>
            </Dialog>
        </Fragment>
    );
}
