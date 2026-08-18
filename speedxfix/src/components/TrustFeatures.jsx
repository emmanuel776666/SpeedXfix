// this is component is imported inside Hero component
function TrustFeatures() {
  return (
    <div className="trust-features">

      <div className="trust-item">
        <div className="trust-icon">
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


      <div className="trust-item">
        <div className="trust-icon">
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


      <div className="trust-item">
        <div className="trust-icon">
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

export default TrustFeatures;