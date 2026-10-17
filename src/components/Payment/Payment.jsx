import { useNavigate } from "react-router-dom";



const Payment = () => {
    const navigate = useNavigate();
    const handleFormSubmit = ()=>{
        return navigate("/");
    }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-1/2 bg-gray-300 rounded-2xl text-black text-center p-12">
        <h2 className="text-2xl font-bold">you have to pay: $5</h2>
        <p>enter demo card details payment will atuomatically approved</p>
        <form className="grid grid-cols-2 gap-4 mt-8" onSubmit={handleFormSubmit}>
          <span className="col-span-2">
            <label htmlFor="nameOnCard">name on card: </label>
            <input
              type="text"
              className="input"
              placeholder="jhon doe"
              required
              name="nameOnCard"
              id="nameOnCard"
            />
          </span>
          <span className="col-span-2">
            <label htmlFor="cardNumber">card number: </label>
            <input
              type="number"
              className="input"
              placeholder="4545 4545 4545 4545"
              maxLength={16}
              required
              name="cardNumber"
              id="cardNumber"
            />
          </span>

          <span>
            <label htmlFor="cvv">cvv: </label>
            <input
              type="number"
              className="input"
              placeholder="121"
              maxLength={3}
              required
              name="cvv"
              id="cvv"
            />
          </span>
          <span>
            <label htmlFor="dateOfExpiry">date of expiry: </label>
            <input
              type="date"
              className="input"
              placeholder="jhon doe"
              required
              name="dateOfExpiry"
              id="dateOfExpiry"
            />
          </span>
          <button className="btn btn-primary w-full col-span-2">Pay Now</button>
        </form>
      </div>
   
    </div>
  );
};

export default Payment;
