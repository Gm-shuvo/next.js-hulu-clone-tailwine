import MoviCard from './MoviCard'
const MainContent = ({requestData}) => {
   
    return (
        <div className='grid grid-cols-1 gap-5 px-3 sm:grid-cols-2 md:grid-cols-3 mt-8'>
            {
                requestData.map((data, key) =>{
                    return (
                        <MoviCard key={key} data={data}/>
                    )   
                })
            }
        </div>
    )
}

export default MainContent
