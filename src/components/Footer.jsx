function Footer({ navigation, social }) {
  return (
    <footer className="relative z-10 border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between dark:text-slate-400">
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100">© 2026 Aditya Chauhan</p>
          <p className="mt-1">Frontend portfolio focused on clean UI, motion, and responsive execution.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {navigation.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-600 dark:hover:text-brand-300">
              {item.label}
            </a>
          ))}
          <a href={social.github} target="_blank" rel="noreferrer" className="transition hover:text-brand-600 dark:hover:text-brand-300">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-brand-600 dark:hover:text-brand-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
