const Article = ({title, text, tags, image, alt}) => {
    return(
        <div className="p-5 bg-zinc-800 dark:bg-zinc-200 sm:rounded-lg sm:shadow-lg flex gap-2 flex-col items-center">
            <h3 className="text-xl text-zinc-200 dark:text-zinc-800 font-bold">{title}</h3>
            <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
                {
                    tags.map(tag => 
                        <span 
                            key={tag} 
                            className="bg-pormade-100 dark:bg-pormade-100 px-4 py-1 rounded-full text-gray-200 dark:text-pormade-400 text-xs uppercase font-bold">
                                {tag}
                        </span>
                )}
            </div>
            <div className="grid gap-2">
                {text.map((content, index) => 
                    <p 
                        key={index} 
                        className="text-zinc-200 dark:text-zinc-800">
                            {content}
                    </p>
                )}
            </div>
            {image && <img className="sm:p-4" src={image}/>}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>
    )
}

export default Article; 