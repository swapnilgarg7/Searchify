import User from "./User"

export default function Header() {
    return (
        <header className="flex justify-between p-5 items-cente text-blue-700 ">
            <div className="left flex">
                <p className="text-3xl ">Searchify</p>
            </div>
            <div className="right flex items-center space-x-2">
                <p className="text-xl hover:text-blue-900 cursor-pointer"> About </p>
                <User />
            </div>
        </header>

    )
}
