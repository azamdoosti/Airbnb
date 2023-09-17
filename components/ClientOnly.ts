"use client"
import React, { ReactNode, useEffect, useState } from 'react'
interface ClientOnly {
    children : ReactNode
}
const ClientOnly = () => {
    const [hasMounted,setHasMounted]=useState(false)
    useEffect (()=>{
     setHasMounted(true)
    },[])

    if(!hasMounted) {
     return    
    }
  return (
    <>
    {children}
    </>
  )
}

export default ClientOnly
