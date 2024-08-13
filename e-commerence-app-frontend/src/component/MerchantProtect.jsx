import { Navigate } from "react-router-dom";

function MerchantProtect({ Child }) {
  let x = localStorage.getItem("Merchant");
  let verifyProtect = () => {
    if (x == null) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="protect">
      {verifyProtect() ? <Child /> : <Navigate to="/merchant" />}
    </div>
  );
}

export default MerchantProtect;
