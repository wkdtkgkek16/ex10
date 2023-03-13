import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Join from './components/Join'
import Products from './components/Products'
import MyPage from './components/MyPage'
import Users from './components/Users'



const Menu = ({history}) => {
  let email = sessionStorage.getItem("email")

  const onLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('email');
    history.push('/')
  }
  return (
    <div>
    <div className='menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>회원목록</NavLink>
        {email ?
          <NavLink to='#' onClick={onLogout}>로그아웃</NavLink>
          :
          <NavLink to='/login'>로그인</NavLink>
        }
        {sessionStorage.getItem('email')
        && <NavLink to="/mypage">마이페이지</NavLink>}
        {sessionStorage.getItem('email')
        && <span>{sessionStorage.getItem('email')}</span>}
        
    </div>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/products" component={Products}/>
        <Route path="/login" component={Login}/>
        <Route path="/join" component={Join}/>
        <Route path="/myPage" component={MyPage}/>
        <Route path="/users" component={Users}/>
        

    </Switch>
    </div>
  )
}

export default withRouter(Menu)