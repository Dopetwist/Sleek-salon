import { useNavigate } from "react-router";

function OrderConfirmation() {

  const navigate = useNavigate();
    
  return (

    <div id="order-confirmation-page">
      <div className="order-success">
        <div className="order-container">
          <p className="payment-header heading-text">Payment Successful!</p>

          <div className="checkmark">
            <p>✓</p>
          </div>

          <div className="payment-description">
            <p id="thank-you-text">Thank you for your Order!</p>

            <p className="payment-sub-text">Your order has been received and is being processed. You'll receive a confirmation email shortly.</p>

            <p className="order-id"><strong>Order ID:</strong> #SLK654709</p>
          </div>

          <button
          className="back-btn"
          onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation;