import QueueDashboard from '../QueueDashboard';

export default function QueueDashboardExample() {
  return (
    <QueueDashboard
      position={3}
      estimatedWaitMinutes={45}
      totalWaiting={2}
      serviceName="Premium Cut & Style"
      paymentStatus="Pending"
      onCancelSpot={() => console.log('Cancelled')}
      onPayNow={() => console.log('Pay now')}
    />
  );
}
