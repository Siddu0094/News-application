import { createContext, useContext, useState } from "react";
import api from "../config/axios";

 const NewsContext=createContext()


const NewsContextProvider=({children})=>{
    const[news,setnews]=useState([])
    
    const fetchNews=async(url="/api/news?q=india")=>{
        try {
        const result=await api.get(url)
       return result.data
        } catch (error) {
            console.log(error)
        }
    }
    const value={
        news,
        setnews,
        fetchNews
    }


    return (
        <NewsContext.Provider value={value}>
          {children}
        </NewsContext.Provider>
    )
}




const useNewsContext=()=>{
     return useContext(NewsContext)
}



export {NewsContextProvider,useNewsContext}