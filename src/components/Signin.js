const Signin = () => {
    const buttonClickHandler = (event) => {
        // const buttonClass = event.target.className.split(' ')[1];
        console.log('Signin :: buttonClickHandler : className :', event.target.className);
    }
    return (
      <div id="login">
         <h1>Signin Page</h1>
         <button className='button' onClick={ buttonClickHandler }>Sign in</button>
      </div>
      );
    }
export default Signin;