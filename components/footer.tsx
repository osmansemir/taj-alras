export default function Footer() {
  return (
    <footer className="flex h-24 shrink-0 items-center justify-center border-t">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Taj Alras. All rights reserved.
      </p>
    </footer>
  );
}
