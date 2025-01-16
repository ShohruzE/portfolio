export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Shohruz Ernazarov
        </p>
      </div>
    </footer>
  );
}
