import { useState, useEffect } from "react"
import axios from "axios"


const useGetProducts = (API) => {
  const [products, setProducts] = useState([])
  
  useEffect(async () => {
    try {
      const response = await axios(API)
      setProducts(response.data)
    } catch(err) {
      console.log(err)
    }
  }, [])

  return products
}

export default useGetProducts