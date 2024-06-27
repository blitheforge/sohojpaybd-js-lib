import axios from "axios";

interface PaymentParams {
  cus_name: string;
  cus_email: string;
  cus_phone?: string;
  metadata?: object;
  success_url: string;
  cancel_url: string;
  webhook_url?: string;
  amount: string;
}

export default class SohojpayApi {
  private apiUrl: string;
  private apiKey: string;
  private headers: any;

  constructor(apiUrl: string = "https://secure.sohojpaybd.com/api/") {
    this.apiUrl = apiUrl;
    this.headers = {
      "Content-Type": "application/json",
      "SOHOJPAY-API-KEY": "",
    };
  }

  public setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
    this.headers["SOHOJPAY-API-KEY"] = apiKey;
  }

  public async createPayment(params: PaymentParams): Promise<any> {
    try {
      const response = await axios.post(
        `${this.apiUrl}payment/create`,
        params,
        {
          headers: this.headers,
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error creating payment: ${(error as any).message}`);
    }
  }

  public async verifyPayment(transactionId: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.apiUrl}payment/verify`,
        { transaction_id: transactionId },
        {
          headers: this.headers,
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error verifying payment: ${(error as any).message}`);
    }
  }
}
