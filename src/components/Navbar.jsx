import React, { useState } from 'react'
import Wrapper from './Wrapper'
import {useEffect} from 'react'
import { useNewsContext } from '../context/NewContext'
const Navbar = ({classname}) => {


    const [searchvalue,setsearchvalue]=useState("")
    const{setnews,news,fetchNews}=useNewsContext()

    
    const getdata=async()=>{
        const res=await fetchNews(`/everything?q=${searchvalue}`)
        console.log(res.articles)
        setnews(res.articles)
    }

    useEffect(()=>{
        const timer=setTimeout(()=>{
            getdata()

        },1000)

     
        return ()=>(
            clearTimeout(timer)
            
        )
    },[searchvalue])

    return (
  <div className={`max-w-full  bg-base-300 ${classname}`}>

     <Wrapper>

     <div>
      <div className="navbar  shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">News</a>
  </div>
  <div className="flex gap-2 ">
    <input value={searchvalue} onChange={(e)=>{
        setsearchvalue(e.target.value)
    }}  type="text" placeholder="Search" className="input input-bordered w-58 md:w-auto" />
   </div>
     
    </div>
  </div>

   </Wrapper>
    
  </div>
  )
}

export default Navbar
