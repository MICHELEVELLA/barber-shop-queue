import { Clock, Users, X, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface QueueDashboardProps {
  position: number;
  estimatedWaitMinutes: number;
  totalWaiting: number;
  serviceName: string;
  paymentStatus: 'Pending' | 'Paid';
  onCancelSpot: () => void;
  onPayNow: () => void;
}

export default function QueueDashboard({
  position,
  estimatedWaitMinutes,
  totalWaiting,
  serviceName,
  paymentStatus,
  onCancelSpot,
  onPayNow,
}: QueueDashboardProps) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg text-muted-foreground">You are customer</h2>
            <div className="font-accent text-8xl md:text-9xl text-primary leading-none" data-testid="text-position">
              #{position}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <p className="text-2xl">
              Estimated wait: <span className="font-semibold text-primary" data-testid="text-wait-time">{estimatedWaitMinutes} min</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Customers Ahead</span>
              </div>
              <p className="text-3xl font-bold" data-testid="text-customers-ahead">{totalWaiting}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-medium">Payment Status</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={paymentStatus === 'Paid' ? 'default' : 'secondary'}
                  data-testid="badge-payment-status"
                  className="text-base"
                >
                  {paymentStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1 mb-4">
              <p className="text-sm text-muted-foreground">Selected Service</p>
              <p className="text-xl font-semibold" data-testid="text-service-name">{serviceName}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => {
              console.log('Cancel spot clicked');
              onCancelSpot();
            }}
            data-testid="button-cancel"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel My Spot
          </Button>
          
          {paymentStatus === 'Pending' && (
            <Button
              size="lg"
              className="flex-1"
              onClick={() => {
                console.log('Pay now clicked');
                onPayNow();
              }}
              data-testid="button-pay"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pay Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
