import React, { Suspense, lazy } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import LoadRoute from '../../utils/loadRoute'

const Login = lazy(() => import('../../pages/Login'))
const Home = lazy(() => import('../../pages/Home'))

export default function Routes () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <LoadRoute exact name='login' path='/login' component={Login} />
        <LoadRoute name='home' path='/home' component={Home} />
        <Redirect exact from='/' to='/login'/>
      </Switch>
    </Suspense>
  )
}
