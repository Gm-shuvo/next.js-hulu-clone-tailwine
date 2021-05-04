import Image from "next/image";

const MoviCard = ({ data }) => {
  console.log(data);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" ">
      <Image
        className=""
        layout="responsive"
        src={
          `${base_url}${data.backdrop_path} ` ||
          `${base_url}${data.poster_path} `
        }
        objectFit='cover'
        height={1080}
        width={1920}
      />

      <div className="mt-1">
        <h2 className="text-2xl text-white text-bold ">{data.original_title || data.title || data.original_name}</h2>
        <div>
          <p className="truncate  ">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviCard;
