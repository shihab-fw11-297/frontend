import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Save time, save money!</h2>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <span className="texts">Send me a link to get the FREE Booking.com app!</span>
    </div>
  )
}

export default MailList