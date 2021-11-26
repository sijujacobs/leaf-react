const Dashboard = () => {
    const buttonClickHandler = (event) => {
    // const buttonClass = event.target.className.split(' ')[1];
    console.log('Dashboard :: buttonClickHandler : className :', event.target.className);
    }
    return (
      <div id="dashboard">
         <h1>Dashboard Page</h1>
         <button className='button' onClick={ buttonClickHandler }>Sign out</button>
      </div>
      );
    }
export default Dashboard;