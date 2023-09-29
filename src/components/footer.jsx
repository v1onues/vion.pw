import { AiOutlineHeart } from "react-icons/ai"
import { MainContext as data, useContext as useData } from "../context/userData"

export default function Footer(){

    const { user, github } = useData(data)

    return (
        <div align="center">
            <div className="divider"/>
            <div className="flex flex-col sm:flex-row max-w-8xl justify-between items-center py-8 w-11/12 sm:w-10/12 mx-auto">
                <h1 className="font-sans text-white text-2xl font-semibold flex gap-2 items-end">V1onuess.
                <div className="bg-primary-100 text-sm px-2 py-2 font-sans text-gray-400 rounded-lg">v1.0</div></h1>
                <h1 className="font-sans text-white text-base flex items-center gap-3">{(user == null) ? (<div className="w-3 h-3 rounded-full bg-red-600"/>) : (<div className="w-3 h-3 rounded-full bg-green-600"/>)} Data fetching</h1>
                <h1 className="font-sans text-white text-base flex items-center gap-1">Created with <AiOutlineHeart className="text-rose-600"/> by <span className="text-primary">V1onuess.</span></h1>
            </div>
        </div>
    )

}
