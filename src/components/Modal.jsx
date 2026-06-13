import { useNavigate } from "react-router";
import { X, CircleCheckBig, ArrowLeft } from "lucide-react";

function Modal({ isOpen, type, total, title, setCart, onCancel, onConfirm, confirmText = "Pay Now", isLoading = false }) {

    const navigate = useNavigate();
        
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {type === "Card" && (
                    <div className="card-container">
                        <div className="title-box">
                            <h2>{title}</h2>

                            <div 
                            className="close"
                            onClick={onCancel}
                            >
                                <X />
                            </div>
                        </div>

                        <figure>
                            <img src="/images/CREDITCARD.png" alt="Credit Card Image" />
                        </figure>

                        <div className="card-inputs-box">
                            <form>
                                <div className="card-details-box">
                                    <label htmlFor="card-num">Card Number</label>
                                    <input type="number" id="card-num" placeholder="5191 2312 3456 7890" required />
                                </div>
                                <div className="card-details-box">
                                    <label htmlFor="holder-name">Card holder name</label>
                                    <input type="text" id="holder-name" placeholder="J R Roy" required />
                                </div>
                                <div className="expiration-container">
                                    <div className="expiry form-smaller-box">
                                        <label htmlFor="expiry-date">Expiry Date</label>
                                        <input type="text" id="expiry-date" placeholder="00/00" required />
                                    </div>

                                    <div className="cvv form-smaller-box">
                                        <label htmlFor="cvv-number">CVV</label>
                                        <input type="number" id="cvv-number" placeholder="345" maxLength={3} required />
                                    </div>
                                </div>
                            </form>

                            <div className="card-bottom-section modal-actions">
                                <div className="card-total">
                                    <p><span>Total:</span> ${total}</p>
                                </div>
                                <button
                                type="submit"
                                id="pay-btn"
                                onClick={onConfirm}
                                disabled={isLoading}
                                >
                                    {isLoading ? "Processing..." : confirmText}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {type === "Transfer" && (
                    <div className="transfer-container">
                        <h2 className="heading-text">Bank Transfer</h2>
                        <p>Please transfer the total amount of <span><strong>${total}</strong></span> to the below account!</p>

                        <div className="company-account">
                            <p><strong>Account Number:</strong> 4885050437</p>
                            <p><strong>Bank:</strong> Union Bank</p>
                            <p><strong>Account Name:</strong> Sleek Salon </p>
                        </div>

                        <p className="paid-paragraph">After a successful transfer, click the <strong>"Paid"</strong> button.</p>

                        <button 
                        id="paid-btn"
                        onClick={onConfirm}
                        >
                            Paid
                        </button>
                    </div>
                )}

                {type === "Cash" && (
                    <div className="cash-container">
                        <h2 className="heading-text">Cash Payment on Delivery!</h2>

                        <p className="received-text"><CircleCheckBig size={35} id="verified" color="#029a02" /> Your Order has been received!</p>
                        <p>Please ensure to have the cash total amount of <span><strong>${total}</strong></span> ready on delivery.</p>

                        <button
                        className="cash-back-btn"
                        onClick={() => {
                            navigate("/");
                            setCart([]);
                        }}
                        > 
                            <ArrowLeft size={20} />
                            Back to Home 
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;