import arinPhoto from "../assets/arin_photo.jpg";
function Hero() {
  const name = "Arin Singh";
  const path = arinPhoto;
  let x = 10;
  let y = 30;

  function operation(a, b) {
    return a * b;
  }

  const accountobj = {
    AccountNumber: "89238983928",
    IFSC_Code: "732938234872"
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <img src={path} alt="" />
      <h2>Your total is Rs {x + y}</h2>
      <h3>Net balance remaining is Rs {operation(1000, 100000) - (x + y)}</h3>
      <h3>Account Number is {accountobj.AccountNumber}</h3>
      <h3>IFSC Code is {accountobj.IFSC_Code}</h3>
    </div>
  );
}
export default Hero
