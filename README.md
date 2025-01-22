# Sohojpay JavaScript Library

This README provides documentation for integrating the `sohojpay-js-lib` library into your JavaScript or TypeScript projects.

## Installation

Install the library using npm:

```bash
npm install sohojpay-js-lib
```

## Usage

Import and initialize the Sohojpay library in your project:

### Importing the Library

```javascript
import SohojpayApi from 'sohojpay-js-lib';
```

### Setting up the Sohojpay API Client

Create an instance of the `SohojpayApi` class and set your API key:

```javascript
const sohojpay = new SohojpayApi();
sohojpay.setApiKey('your-api-key');
```

### Creating a Payment

Use the `createPayment` method to initiate a payment session. Provide the necessary parameters:

```javascript
const paymentParams = {
  cus_name: 'John Doe',
  cus_email: 'john.doe@example.com',
  success_url: 'https://yourdomain.com/success',
  cancel_url: 'https://yourdomain.com/cancel',
  amount: '100.00',
};

sohojpay.createPayment(paymentParams)
  .then(response => console.log('Payment Created:', response))
  .catch(error => console.error('Error:', error));
```

### Verifying a Payment

Verify the status of a payment using its transaction ID:

```javascript
sohojpay.verifyPayment('transaction-id')
  .then(response => console.log('Payment Verified:', response))
  .catch(error => console.error('Error:', error));
```

## Methods

### 1. `setApiKey(apiKey: string): void`
Sets the API key required for authentication.

### 2. `createPayment(params: PaymentParams): Promise<any>`
Creates a new payment session. Parameters include:

| Parameter      | Type     | Required | Description                                |
|----------------|----------|----------|--------------------------------------------|
| `cus_name`     | `string` | Yes      | Customer's name                            |
| `cus_email`    | `string` | Yes      | Customer's email                           |
| `cus_phone`    | `string` | No       | Customer's phone number                    |
| `metadata`     | `object` | No       | Additional information                     |
| `success_url`  | `string` | Yes      | URL to redirect upon successful payment    |
| `cancel_url`   | `string` | Yes      | URL to redirect if payment is canceled     |
| `webhook_url`  | `string` | No       | Webhook URL for payment notifications      |
| `amount`       | `string` | Yes      | Payment amount                             |

### 3. `verifyPayment(transactionId: string): Promise<any>`
Verifies the status of a payment using the transaction ID.

## Error Handling

All methods throw an error if something goes wrong. You can handle these errors using `try-catch` blocks or `.catch` handlers.

**Example:**

```javascript
try {
  const response = await sohojpay.createPayment(paymentParams);
  console.log('Payment Created:', response);
} catch (error) {
  console.error('Error:', error.message);
}
```

## Example Integration

```javascript
import SohojpayApi from 'sohojpay-js-lib';

const sohojpay = new SohojpayApi();
sohojpay.setApiKey('your-api-key');

const paymentParams = {
  cus_name: 'Jane Doe',
  cus_email: 'jane.doe@example.com',
  success_url: 'https://yourdomain.com/success',
  cancel_url: 'https://yourdomain.com/cancel',
  amount: '500.00',
};

(async () => {
  try {
    const paymentResponse = await sohojpay.createPayment(paymentParams);
    console.log('Payment Created:', paymentResponse);

    const verifyResponse = await sohojpay.verifyPayment('transaction-id');
    console.log('Payment Verified:', verifyResponse);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Support

For support or inquiries, please contact [support@sohojpaybd.com](mailto:support@sohojpaybd.com).
