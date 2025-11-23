import ServiceSelection from '../ServiceSelection';

const mockServices = [
  { id: '1', name: 'Standard Cut', duration: 30, price: 25 },
  { id: '2', name: 'Premium Cut & Style', duration: 45, price: 40 },
  { id: '3', name: 'Beard Trim', duration: 20, price: 15 },
  { id: '4', name: 'Full Service', duration: 60, price: 55 },
];

export default function ServiceSelectionExample() {
  return (
    <ServiceSelection
      services={mockServices}
      onSelectService={(service) => console.log('Selected:', service)}
    />
  );
}
