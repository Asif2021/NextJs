function LoginButton({onClick, text}) {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

export default LoginButton