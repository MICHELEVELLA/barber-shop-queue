import PhoneAuthModal from '../PhoneAuthModal';

export default function PhoneAuthModalExample() {
  return (
    <PhoneAuthModal
      onAuth={(phone) => console.log('Authenticated with:', phone)}
    />
  );
}
