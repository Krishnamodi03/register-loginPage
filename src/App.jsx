import { useState } from 'react'
import Login from './Login'

function App() {
  const [register, setRegister] = useState({
    userName : '',
    Email : '',
    Password : ''
  })
  let handleChange = (e)=>{
    let{name,value} = e.target;
    setRegister({...register,[name]:value});
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    window.alert(`User registerd successfully. Now ${register.userName}, You Can Login.`)
    // console.log(register);
  }
  return (
    <>
      <div className='left'>
        <h1 id='registerhead'>Register Page</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='userName' placeholder='userName' value={register.userName} onChange={handleChange}/>
          <input type="email" name='Email' placeholder='Email' value={register.Email} onChange={handleChange}/>
          <input type="password" name="Password" placeholder='Password' value={register.Password} onChange={handleChange} autoComplete='true'/>
          <input type="submit" value="Register" className='btn' />
        </form>
      </div>
      <Login register={register}/>
    </>
  )
}

export default App
