import { useState, useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import ServiceSelection, { type Service } from '@/components/ServiceSelection';
import QueueDashboard from '@/components/QueueDashboard';
import PaymentModal from '@/components/PaymentModal';
import { useAuth } from '@/hooks/useAuth';

interface UserProfile {
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
}

const mockServices: Service[] = [
  { id: '1', name: 'Standard Cut', duration: 30, price: 25 },
  { id: '2', name: 'Premium Cut & Style', duration: 45, price: 40 },
  { id: '3', name: 'Beard Trim', duration: 20, price: 15 },
  { id: '4', name: 'Full Service', duration: 60, price: 55 },
];

type AppState = 'auth' | 'service-selection' | 'in-queue';

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const [appState, setAppState] = useState<AppState>('auth');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'Pending' | 'Paid'>('Pending');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    if (user && userProfile && appState === 'auth') {
      setAppState('service-selection');
    }
  }, [user, userProfile, appState]);

  const handleAuth = (profile: UserProfile, userId: string) => {
    setUserProfile(profile);
    setAppState('service-selection');
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setAppState('in-queue');
  };

  const handleCancelSpot = () => {
    setAppState('service-selection');
    setSelectedService(null);
    setPaymentStatus('Pending');
  };

  const handlePaymentConfirm = () => {
    setPaymentStatus('Paid');
    setShowPaymentModal(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!user && <AuthModal onAuth={handleAuth} />}
      
      {user && appState === 'service-selection' && (
        <ServiceSelection services={mockServices} onSelectService={handleSelectService} />
      )}
      
      {user && appState === 'in-queue' && selectedService && userProfile && (
        <QueueDashboard
          position={3}
          estimatedWaitMinutes={45}
          totalWaiting={2}
          serviceName={selectedService.name}
          paymentStatus={paymentStatus}
          onCancelSpot={handleCancelSpot}
          onPayNow={() => setShowPaymentModal(true)}
        />
      )}

      {showPaymentModal && selectedService && (
        <PaymentModal
          amount={selectedService.price}
          onConfirm={handlePaymentConfirm}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </>
  );
}
