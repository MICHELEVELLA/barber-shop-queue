import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface PhoneAuthModalProps {
  onAuth: (phoneNumber: string, userId: string) => void;
}

export default function PhoneAuthModal({ onAuth }: PhoneAuthModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: 'Phone number required',
        description: 'Please enter your phone number to continue.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      // Sign in anonymously with Firebase
      const result = await signInAnonymously(auth);
      const user = result.user;
      
      console.log('Anonymous auth successful:', user.uid);
      
      // Store phone number in session storage for queue management
      sessionStorage.setItem('userPhone', phoneNumber);
      
      onAuth(phoneNumber, user.uid);
    } catch (error: any) {
      console.error('Error signing in:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign in. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Enter Shop Queue</CardTitle>
          <CardDescription>Enter your phone number to join the queue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-lg"
                data-testid="input-phone"
              />
              <p className="text-xs text-muted-foreground">
                We'll use this to notify you when it's your turn
              </p>
            </div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
              data-testid="button-enter-queue"
            >
              {loading ? 'Joining...' : 'Enter Shop Queue'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
