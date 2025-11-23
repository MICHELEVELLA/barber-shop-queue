import PaymentModal from '../PaymentModal';

export default function PaymentModalExample() {
  return (
    <PaymentModal
      amount={40}
      onConfirm={() => console.log('Payment confirmed')}
      onClose={() => console.log('Payment cancelled')}
    />
  );
}
