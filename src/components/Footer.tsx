export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} Suhas Kolhe. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
