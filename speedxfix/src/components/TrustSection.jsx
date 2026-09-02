import customer1 from "../assets/customer-1.png";
import { ShieldCheck } from "lucide-react";
// import customer2 from "../assets/customer-2.png";
// import customer3 from "../assets/customer-3.png";
// import customer4 from "../assets/customer-4.png"; 

function TrustSection() {
  return (
    <section className="trust-section">

      <div className="trust-title">

        <div className="trust-sheild-icon">

                  <ShieldCheck
                    size={20}
                    strokeWidth={1.5}
                  />

                </div>

        <h2>Trusted by thousands of customers</h2>

      </div>


      <div className="trust-rating">

        <div className="customer-images">
          <img src={customer1} alt="Customer" />
          <img src={customer1} alt="Customer" />
          <img src={customer1} alt="Customer" />
          <img src={customer1} alt="Customer" />
        </div>

        <strong>4.8/5</strong>

        <div className="stars">
          ★★★★★
        </div>

      </div>

    </section>
  );
}

export default TrustSection;