const Home = () => {
    const buttonClickHandler = (event) => {
    // const buttonClass = event.target.className.split(' ')[1];
    console.log('Home :: buttonClickHandler : className :', event.target.className);
    }
    return (
      <div id="home">
         <h1>Home Page</h1>
         <button className='button' onClick={ buttonClickHandler }>Sign out</button>
      </div>
      );
    }
export default Home;