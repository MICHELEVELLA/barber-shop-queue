import { useState } from 'react';
import { CreditCard, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PaymentModalProps {
  onConfirm: () => void;
  onClose: () => void;
  amount: number;
}

export default function PaymentModal({ onConfirm, onClose, amount }: PaymentModalProps) {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConfirm = () => {
    console.log('Processing payment...');
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      console.log('Payment successful!');
      
      setTimeout(() => {
        onConfirm();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          {!success ? (
            <>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Confirm Payment</CardTitle>
              <CardDescription>Complete your payment to secure your spot</CardDescription>
            </>
          ) : (
            <>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">Payment Successful!</CardTitle>
              <CardDescription>Your spot is confirmed</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          {!success ? (
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Amount Due</span>
                  <span className="text-2xl font-accent" data-testid="text-amount">${amount}</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={onClose}
                  disabled={processing}
                  data-testid="button-cancel-payment"
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleConfirm}
                  disabled={processing}
                  data-testid="button-confirm-payment"
                >
                  {processing ? 'Processing...' : 'Confirm Payment'}
                </Button>
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
