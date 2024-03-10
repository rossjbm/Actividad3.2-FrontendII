import { NavLink , Link} from "react-router-dom"

export function BotonReservar() {
    return(<>
        <div className="flex md:hidden">
            <Link to={`/reservar`} className="no-underline text-black">
                <button className="hover:bg-blue-200 fixed bottom-0 w-full h-20 border-black border-y-2 bg-white font-textos text-2xl font-semibold  tracking-widest hover:border-4">Reservar</button>
            </Link>
        </div>
    </>)
}