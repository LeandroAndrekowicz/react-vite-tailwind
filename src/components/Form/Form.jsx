import Input from "../Input/Input";



const Form = ({onSubmit}) =>{
    const safeSubmit = event =>{
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name, email});
    }
    return(
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <Input type="text" required placeholder="Insira seu nome..." />
        <Input type="text"  required placeholder="Insira seu e-mail..." />
        <button type="submit" className="py-1 pl-5 w-full max-w-lg bg-pormade-100 dark:bg-pormade-100 rounded-full text-zinc-950 outline-none">Seguir</button>
    </form>
)}


export default Form;