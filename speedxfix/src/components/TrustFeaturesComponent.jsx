// this component is use inside sign up page 
function TrustFeaturesComponent() {
  return (
    <div className="trust-features-component">

      <div className="trust-item-component">
        <div className="trust-icon-component">
          ✓
        </div>

        <div>
          <h3>Verified Professionals</h3>
          <p>
            All workers are verified
            <br />
            and reviewed.
          </p>
        </div>
      </div>


      <div className="trust-item-component">
        <div className="trust-icon-component">
          ◷
        </div>

        <div>
          <h3>Fast & Reliable</h3>
          <p>
            Quick booking,
            <br />
            on-time service.
          </p>
        </div>
      </div>


      <div className="trust-item-component">
        <div className="trust-icon-component">
          🔒
        </div>

        <div>
          <h3>Secure Payments</h3>
          <p>
            Pay safely through
            <br />
            SpeedXFix.
          </p>
        </div>
      </div>

    </div>
  );
}

export default TrustFeaturesComponent;