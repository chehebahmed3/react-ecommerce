import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div class="login-container">
  <h2>Login</h2>
  <form class="login-form" action="#" method="post">
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required/>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
    </div>

    <div class="form-group">
      <Link className='button_login' to='/cart'>
      login
      </Link>
    </div>
  </form>
</div>
  )
}

export default Login