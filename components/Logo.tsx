export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/ibeju-lekki-logo-sm.webp"
      alt="Ibeju-Lekki Local Government"
      className={className}
      loading="eager"
    />
  );
}
