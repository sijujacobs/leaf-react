const Dashboard = () => {
  const buttonClickHandler = (event) => {
    console.log('Dashboard :: buttonClickHandler : className :', event.target.className);
  }
  return (
    <div id="dashboard">
      <div className="content">
        <h2>Dashboard</h2>
        <button className='button' onClick={buttonClickHandler}>Sign out</button>
      </div>
    </div>
  );
}
export default Dashboard;
