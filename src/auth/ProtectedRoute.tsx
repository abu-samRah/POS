import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from './auth'

interface CustomizedRouteProps extends RouteProps{
    component: new() => React.Component<any, any>
}

const ProtectedRoute: React.FC<CustomizedRouteProps> = ({component: Component,...rest}) => {
  return (
      <Route {...rest} render={(props) => {
          
          if (auth.isAuthenticated()) {
              return <Component {...props}/>
          } else {
              return <Redirect to={{
                  pathname: '/login', state: {
                  from : props.location
              } }} />
          }
          
      }}/>
    )
}
export default ProtectedRoute
