import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";

import { useNewsContext } from "../context/NewContext";
const News = ({ classname }) => {
  const {news,setnews,fetchNews}= useNewsContext();
//   console.log(news)
  
    const getnews=async()=>{
        const response=await fetchNews()
      setnews(response.articles)
    }



useEffect(()=>{
  getnews()
},[])

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-5 ${classname}`}>
        {news.map((item,index)=>{
                if(!item.urlToImage){
                    return null
                   }
           
           return (
                
                
                  <NewsCard key={index} details={item}/>       
                

            )
        })}
      
      </div>
    </Wrapper>
  );
};

const NewsCard = ({details}) => {
    // console.log(details)
  return (
    <>
      <div className="card bg-base-200  shadow-sm">
        <figure>
          <img
          className="aspect-video object-contain w-full"
            src={details?.urlToImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{details?.title}</h2>
          <p className="line-clamp-3">
           {details.description}
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=>{window.open( details.url)
               
            }} className=" btn badge-outline mt-5 ">Readmore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
