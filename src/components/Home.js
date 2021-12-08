const Home = () => {
  const buttonClickHandler = (event) => {
    console.log('Home :: buttonClickHandler : className :', event.target.className);
  }
  return (
    <div id="home">
      <div className="content">
        <h2>Home</h2>
        <button className='button' onClick={buttonClickHandler}>Sign out</button>
      </div>
    </div>
  );
}
export default Home;