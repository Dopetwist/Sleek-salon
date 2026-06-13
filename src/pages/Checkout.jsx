import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { CreditCard, Landmark, HandCoins } from "lucide-react";
import Modal from "../components/Modal";

function Checkout ({ setCart }) {

    const location = useLocation();
    const { total } = location.state || { total: 0 };

    const [ showModal, setShowModal ] = useState(false);
    const [ isPaying, setIsPaying ] = useState(false);
    const [ optionType, setOptionType ] = useState("");

    const navigate = useNavigate();

    /* Effect to disable background scrolling when Modal is open and re-enable it when Modal is closed or component unmounts */
    useEffect(() => {
        document.body.style.overflow = showModal ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    /* Function to handle payment */
    const handlePayment = () => {
        navigate("/orderSuccess", { state: total });
        setCart([]);
    }

    /* Function to open Modal for Credit Card payment option */
    const openCardModal = () => {
        setOptionType("Card");
        setShowModal(true);
    }

    /* Function to open Modal for Bank Transfer payment option */
    const openTransferModal = () => {
        setOptionType("Transfer");
        setShowModal(true);
    }

    /* Function to open Modal for Cash on Delivery payment option */
    const openCashModal = () => {
        setOptionType("Cash");
        setShowModal(true);
    }

    return (
        <div>
            <div className="checkout-box">

                <form className="checkout-form top">
                    <p className="billing-header box-header">Billing Details</p>

                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"  placeholder="Your email address" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="address">Shipping Address</label>
                        <input type="text" id="address" placeholder="Enter your address" />
                    </div>
                </form>

                <div className="payment top">
                    <p className="payment-method box-header">Payment Method</p>

                    <div className="payment-options">
                        <button
                        className="pay-card payment-choice"
                        onClick={openCardModal}
                        >
                            <CreditCard size={24} />
                            Pay with Card
                        </button>

                        <button 
                        className="bank-transfer payment-choice"
                        onClick={openTransferModal}
                        >
                            <Landmark size={24} />
                            Bank Transfer
                        </button>

                        <button 
                        className="pay-on-delivery payment-choice"
                        onClick={openCashModal}
                        >
                            <HandCoins size={24} />
                            Cash on Delivery
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                type={optionType}
                total={total}
                title="Checkout"
                onConfirm={handlePayment}
                onCancel={() => setShowModal(false)}
                isLoading={isPaying}
                setCart={setCart}
            />
        </div>
    )
}

export default Checkout;