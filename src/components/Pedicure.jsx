
import { pedicurePhotos } from "../../index";

function Pedicure() {
    return (
        // Pedicure Section
        
        <div className="adjust-container">
            <h3>Pedicure & <span>Manicure</span></h3>
            
            <div className="gallery-content ped-margin">
                {pedicurePhotos.map((item) => (
                    <div className="gallery-box" key={item.id}>
                        <img src={item.img} alt="Pedicure Image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pedicure;