import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react";

const ToggleTheme = () =>{
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const pageClasses = document.documentElement.classList;

    useEffect(() =>{
        systemPreference && pageClasses.add('dark');
    })  

    const toggle = () =>{
        pageClasses.toggle('dark');
    }

    return(
        <div className="hidden sm:block">
            <MoonIcon className="h-8  text-pormade-200 block dark:hidden" onClick={toggle} />
            <SunIcon className="h-8  text-gray-100 hidden dark:block" onClick={toggle} />
        </div>
    )
}

export default ToggleTheme;