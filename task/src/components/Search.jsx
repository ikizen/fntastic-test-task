import { Fragment, useState } from "react";
import { Dialog } from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>
            <div className="flex">
                <button
                    onClick={handleOpen}
                    className="text-[#96989d] text-[7px] bg-[#202225] rounded-[3px] px-[6px] flex-1 m-1 grow"
                >
                    <div className="flex flex-start">
                        Найти или начать беседу
                    </div>
                </button>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                size="sm"
                className="bg-[#2f3136] text-xs rounded-[5px] p-2"
            >
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#202225] border-none"
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
