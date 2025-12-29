export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12border-t border-black/10 bg-white">
      <div className="flex flex-col">
        <div className="mb-4 mt-4 border-t border-black/10 pt-4 text-xs text-black/50">
          © {new Date().getFullYear()} PPPT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
