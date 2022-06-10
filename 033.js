// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    let res = pin.split("")
    for(let i = 0; i < res.length; i++) {
			if(isNaN(res[i]) === true) {
				return false
			} 
		}
		return true
  } else return false
}
console.log(validatePIN(`123`));

