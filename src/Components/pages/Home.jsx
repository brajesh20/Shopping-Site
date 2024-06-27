import { useState, useEffect } from 'react'
import Product from '../Product'
import Spinner from '../Spinner'

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products'
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchData () {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      setPosts(data)
    } catch (error) {
      console.log('ERROR!!')
      setPosts([])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <Spinner />) : posts.length === 0 ? (
        <div>NO DATA</div>) : 
        (
          <div style={{display:"flex", flexWrap:"wrap", maxWidth:"75%", margin:"auto", marginTop:"60px", gap:"14px"}}>
            {posts.map(post => (
              <Product key={posts.id} post={post} />
            ))}
          </div>
        )
      }
    </div>
  )
}

export default Home
