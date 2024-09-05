"use client"

import React, { useEffect } from 'react'
import DBService from '@/backend/Database'


export default function Class() {
  useEffect(() => {
    DBService.getData().then((data) => {
      if (data) {
        console.log(data);
      }
    })
  }, [])
  return (
    <div>Class</div>
  )
}
