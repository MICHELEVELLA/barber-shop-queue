import { Scissors, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface ServiceSelectionProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

export default function ServiceSelection({ services, onSelectService }: ServiceSelectionProps) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Select Your Service</h1>
          <p className="text-muted-foreground text-lg">Choose a service to join the queue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover-elevate transition-all"
              data-testid={`card-service-${service.id}`}
            >
              <CardHeader className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Scissors className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-1 text-sm">
                    <Clock className="w-4 h-4" />
                    {service.duration} min
                  </span>
                  <Badge variant="secondary" className="font-accent text-lg">
                    ${service.price}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full"
                  onClick={() => {
                    console.log('Selected service:', service.name);
                    onSelectService(service);
                  }}
                  data-testid={`button-join-${service.id}`}
                >
                  Join Queue
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
