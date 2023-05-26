import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({user}) => {
    return(
        <div className="flex h-20 bg-pormade-100 justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-pormade-200">Olá, { user?.name || "Usuário"}</span>
            <h1 className="text-pormade-200 text-xl">Pormade, Newsletter</h1>
            <ToggleTheme />
        </div>
    )
}

export default Header;