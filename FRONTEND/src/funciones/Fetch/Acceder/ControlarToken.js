import {jwtDecode} from 'jwt-decode';

export function NuevoToken(Token) {
    localStorage.setItem("Sesion",Token)
}
export function DecodificarToken(){
    if (!localStorage.getItem("Sesion")) {
        return 0
    }
    const Token = localStorage.getItem("Sesion");
    const TokenDecodificado = jwtDecode(Token);
    const Actual = Math.floor(Date.now() / 1000);
    if (TokenDecodificado.exp < Actual) {
        console.error('El token ha caducado');
        return 0
    } else {
        switch (TokenDecodificado.Rol) {
            case 'cliente':
                return 1;
            case 'admin':
                return 2;
            default:
                return 0;
        }
    }
}
export function BorrarToken() {
    localStorage.clear("Sesion")
}