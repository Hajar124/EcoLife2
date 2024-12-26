document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.animate-product');
    
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations
    });
});


document.getElementById('contact-Form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

  // Generate a key pair (for demonstration purposes)
  const crypt = new JSEncrypt({ default_key_size: 512 });
  const publicKey = crypt.getPublicKey();
  const privateKey = crypt.getPrivateKey();

  // Encrypt a message with the public key
  crypt.setPublicKey(publicKey);
  const encryptedMessage = await crypt.encrypt(message);
  console.log("Encrypted Message:", encryptedMessage);

  // Decrypt the message with the private key
  crypt.setPrivateKey(privateKey);
  const decryptedMessage = await crypt.decrypt(encryptedMessage);
  console.log("Decrypted Message:", decryptedMessage);

   
});