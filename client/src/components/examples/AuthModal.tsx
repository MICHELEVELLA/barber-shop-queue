import AuthModal from '../AuthModal';

export default function AuthModalExample() {
  return (
    <AuthModal
      onAuth={(profile, userId) => console.log('Authenticated:', profile, userId)}
    />
  );
}
