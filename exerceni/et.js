async function executeTransfer(client, destinationWallet, amount, currency) {
  const wallet = await client.getWallet();
  const transaction = {
    actions: [{
      type: 'TRANSFER_FUNDS',
      data: {
        amount: {
          units: amount,
          currency: currency,
        },
        destination: destinationWallet,
      },
    }],
  };
  return constructTransaction(wallet, transaction);
}

// Usage
const amountToTransfer = 100000;
const currencyType = 'USD';
const destinationWallet = 'some-other-wallet';

executeTransfer(client, destinationWallet, amountToTransfer, currencyType)
  .then(transaction => console.log('Transaction successful:', transaction))
  .catch(error => console.error('Transaction failed:', error));
