import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    }, 4000)
  },[])
  return <div>
    <h1>Sorry The Page is Not Found</h1>
    <p>Back to <Link href="/">Home</Link></p>
  </div>
}

export default NotFound
