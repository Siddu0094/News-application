import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewContext'

const Category = ({classname}) => {
    const {setnews,fetchNews}=useNewsContext()
    const categories=["business","entertainment","general","health","science","sports","technology"]

    const handleclick=async(e)=>{
        const cat=e.target.value
        const response=await fetchNews(`/everything?q=${cat}`)
        // console.log(response.articles)
        setnews(response.articles)


    }
   

    return (
   <div className={`${classname}`}>
     <Wrapper>
      <div className={`max-w-full w-fit m-auto flex overflow-x-auto gap-8 scrollbar-none ${classname}`}>
         {categories.map((Category)=>{
        return (
             <button value={Category} onClick={(e)=>{
                handleclick(e)
             }} key={Category} className="btn btn-primary ">{Category}</button>
      
        )
       })}
      </div>

    
    </Wrapper>
   </div>
  )
}

export default Category

// <button className="btn btn-primary">Primary</button>
     //    <button className="btn btn-primary">Primary</button>
       //  <button className="btn btn-primary">Primary</button>