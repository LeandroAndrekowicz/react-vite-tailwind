const Input = props =>{
    return(
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            className="py-1 pl-5 w-full max-w-lg bg-zinc-600 dark:bg-zinc-300 text-pormade-200 dark:text-pormade-200 rounded-full outline-none">
        </input>
    )
}

export default Input;