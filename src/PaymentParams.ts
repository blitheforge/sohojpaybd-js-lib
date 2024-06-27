export interface PaymentParams {
  cus_name: string;
  cus_email: string;
  cus_phone?: string;
  metadata?: object;
  success_url: string;
  cancel_url: string;
  webhook_url?: string;
  amount: string;
}
