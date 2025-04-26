import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import {motion} from 'framer-motion'
import * as ReactScroll from 'react-scroll';

export default function NavBar(){
    const [open, setOpen] = useState(false)
    const Link = ReactScroll.Link as any;


    const content = 
    <div className="z-50 pt-20 top-14 right-0 left-0 bottom-0 h-screen bg-amber-500 w-full flex flex-col space-y-10 items-center text-gray-100 text-xl"> 
        <Link to="collections" smooth={true} duration={500}>Collection</Link>
        <Link to="recommendations" smooth={true} duration={500}>Recommendation</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="Testimonials" smooth={true} duration={500}>Testimonial</Link>
    </div>

    return <div className={`z-50 top-0 absolute w-full h-14 ${open ? 'bg-amber-500' : 'bg-transparent'} `}>
        <div className="w-[85%] h-full mx-auto flex items-center justify-between">
            <motion.div variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.25}}
             className="text-2xl text-gray-100">LOGO.</motion.div>     
            <div className="hidden md:flex text-gray-100 space-x-10">
                <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.3}} className="cursor-pointer"><Link to="collection" smooth={true} duration={500}>Collection</Link></motion.p>
                <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.35}} className="cursor-pointer"><Link to="recommendation" smooth={true} duration={500}>Recommendation</Link></motion.p>
                <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.45}} className="cursor-pointer"><Link to="about" smooth={true} duration={500}>About</Link></motion.p>
                             <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.45}} className="cursor-pointer" ><Link to="testimonial" smooth={true} duration={500}>Testimonial</Link></motion.p>
                </div>   
            <div className="hidden md:flex">
                <motion.button variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, delay: 0.5}} className="text-gray-100 bg-amber-500 px-3 py-1 rounded">Contact Us</motion.button>
            </div>    
            <button className="flex md:hidden text-gray-100 cursor-pointer" onClick={() => setOpen(!open)}>{!open ? <CiMenuBurger size={25} /> : <RiCloseLargeLine size={25} />}</button>
        </div>
        {open && content}
    </div>
}