const Footer = () => {
  return (<footer className="relative z-10 max-w-5xl w-full mx-auto px-6 py-8 border-t border-neutral-900/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500">
    <p>© {new Date().getFullYear()} Paper Press Mono. Tactical Print Aesthetic.</p>
    <div className="flex items-center gap-6">
      <span className="hover:text-neutral-900 cursor-pointer transition-colors">Documentation</span>
      <span className="hover:text-neutral-900 cursor-pointer transition-colors">High-Res Print</span>
      <span className="hover:text-neutral-900 cursor-pointer transition-colors">Privacy</span>
    </div>
  </footer>);
}

export default Footer;
