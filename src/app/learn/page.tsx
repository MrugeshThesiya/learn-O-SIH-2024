"use client"
import React,{useEffect, useState} from 'react'
import DBService from '@/backend/Database'
import { videoData } from '@/constants'

export default function Learn() {
  const [data,setData] = useState<videoData[]>()
  useEffect(() => {
    DBService.getData().then((data) => {
      if (data) {
        console.log(data);
        setData(data.documents.map((item) => ({id:item.$id,Text:item.Text,videoId:item.videoId})))
      }
    })
  }, [])
  return (
    <>
    {
      data && data.map((item,index)=>(  
        <div key={index}>
          {item.Text}
        </div>
      ))
    }
    </>
  )
}
