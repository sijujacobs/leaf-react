const Contact = () => {
  const buttonClickHandler = (event) => {
    console.log('Contact :: buttonClickHandler : className :', event.target.className);
  }
  return (
    <div id="contact">
      <div className="content">
        <h2>Contact</h2>
        <button className='button' onClick={buttonClickHandler}>Sign out</button>
      </div>
    </div>
  );
}
export default Contact;