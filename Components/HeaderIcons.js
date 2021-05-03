export const HeaderIcons = ({title,Icon}) => {
    return (
        <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
           <Icon className="h-6 mb-3 group-hover:animate-bounce"/>
           <h2 className="opacity-0 tracking-widest group-hover:opacity-100 ">{title}</h2>
        </div>
    )
}
