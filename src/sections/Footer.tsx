import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


export default function Footer() {
    return <div className="w-full min-h-80 bg-amber-700 text-gray-100 pb-20">
        <div className="w-[85%] h-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="h-full  flex flex-col items-center mt-14"><p className="text-2xl font-semibold">LOGO.</p></div>
            <div className="flex flex-col items-center mt-14 space-y-2">
                <p className="font-bold">Help</p>
                <p className="text-xs">FQA</p>
                <p className="text-xs">About us</p>
            </div>
            <div className="flex flex-col items-center mt-14 space-y-2">
                <p className="font-bold">Our products</p>
                <p className="text-xs">Red Velvet</p>
                <p className="text-xs">Choco Ganache</p>
                <p className="text-xs">Berry Cream</p>
            </div>
            <div className="flex flex-col items-center mt-14 space-y-2">
                <p className="font-bold">Contact us</p>
                <p className="text-xs">Email</p>
                <p className="text-xs">Social media</p>
            </div>
            <div className="flex flex-col items-center mt-14 space-y-2">
                <p className="font-bold">Shop online</p>
            </div>
            <div className="flex flex-col items-center mt-14 space-y-2">
                <p className="font-bold">Connect with us</p>
                <div className="flex space-x-2">
                    <FaFacebookSquare size={20} />
                    <FaInstagramSquare size={20} />
                    <AiFillTikTok size={20} />
                </div>
            </div>
        </div>
    </div>
}