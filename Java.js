function processCheckout() {
    // Get the user's input from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var shippingAddress = document.getElementById('shipping-address').value;
    var creditCard = document.getElementById('credit-card').value;
  
    // Validate the input
    if (!name || !email || !shippingAddress || !creditCard) {
      alert('Please fill out all fields');
      return;
    }
  
    // Send the input to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/checkout', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + name + '&email=' + email + '&shippingAddress=' + shippingAddress + '&creditCard=' + creditCard);
  
    // Display a success message
    alert('Your order has been placed successfully!');
  }
  