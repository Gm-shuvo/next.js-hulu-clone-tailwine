import Image from "next/image";
import { BiLike } from 'react-icons/bi'

const MoviCard = ({ data }) => {
  console.log(data);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" group transition duration-200 transform hover:scale-105 overflow-hidden">
       
            <Image
                    className='Relative overflow-hidden'
                    layout="responsive"
                    src={
                    `${base_url}${data.backdrop_path} ` ||
                    `${base_url}${data.poster_path} `
                    }
                    objectFit='cover'
                    height={1080}
                    width={1920}
                />
        
            <div className='absolute bg-black bg-opacity-30 opacity-0 w-full h-5/6 top-0 transition delay-100 ease-in transform group-hover:opacity-100 overflow-hidden'>
            <p className="p-4 text-sm ">{data.overview}</p>
            </div>
      
            

      <div className=" overflow-hidden">
        <h2 className="text-xl group1-hover:text-white group-hover:text-bold ">{data.original_title || data.title || data.original_name}</h2>
        <div className='flex items-center mt-1 space-x-1'>
            <span><BiLike/></span>
           <h2>popularity: {data.popularity}</h2>         
        </div>
      </div>
    </div>
  );
};

export default MoviCard;
