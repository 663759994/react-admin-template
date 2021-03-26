import React from 'react'
import { Route } from 'react-router-dom'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'

const LoadRoute = props => {
  /* useEffect(() => {
    nprogress.done()
    return () => nprogress.start()
  }, []) */
  return <Route {...props}/>
}

export default LoadRoute
