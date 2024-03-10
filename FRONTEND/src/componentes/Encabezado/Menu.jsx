import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export function Menu({menu, setMenu}) {
    return(<>
        <AnimatePresence>
        {
            menu ?
                <>
                    <motion.div className="bg-white md:hidden flex flex-col items-center absolute top-20 right-0 z-10 w-full border-t border-b border-gray-200" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{opacity: 0, y: -10 }}>
                        <nav className="py-6 px-10 w-full">
                            <ul className="flex flex-col gap-3 align-center">
                                <li className="text-lg font-textos">
                                    <Link to={`/inicio`} className="no-underline text-black">Inicio</Link>
                                </li>
                                <li className="text-lg font-textos">
                                    <Link to={`/acceder`} className="no-underline text-black">Acceder</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="border-t border-gray-200 w-4/5 p-4">
                            <h3 className="text-center font-textos text-sm font-semibold">+58 412 4657234 - Hazbin<span className="font-titulos text-base">Hotel</span></h3>
                        </div>
                    </motion.div>
                </> 
            : null
        }
        </AnimatePresence>
    </>)
}