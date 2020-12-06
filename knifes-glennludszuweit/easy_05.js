// Create a function called VAT
//   that adds the current VAT (16 percent) to the firs argument
//   return the result

function VAT(price) {
  let priceWithVAT = price * 1.16;
  console.log(priceWithVAT);
  return priceWithVAT;
}

VAT(25);
