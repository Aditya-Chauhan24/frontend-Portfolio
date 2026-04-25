import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionShell from "./SectionShell";

function ContactSection({ contact }) {
  const [isCopied, setIsCopied] = useState(false);
  const emailHref = `${contact.social.email}?subject=${encodeURIComponent("Portfolio enquiry")}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      description={contact.description}
      className="mt-24 pb-24"
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {[
            { label: contact.email, href: contact.social.email, icon: Mail },
            { label: "GitHub Profile", href: contact.social.github, icon: Github },
            { label: "LinkedIn Profile", href: contact.social.linkedin, icon: Linkedin },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                whileHover={{ y: -6 }}
                className="glass-panel interactive-ring flex items-center gap-4 rounded-[2rem] p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Reach out</p>
                  <p className="mt-1 text-base font-semibold">{item.label}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-ring rounded-[2rem] p-6"
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Direct Email</p>
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                Open your mail app and send me a message directly.
              </h3>
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                If your browser does not open an email app for `mailto:` links, you can copy the address and send the email manually.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 dark:from-brand-500 dark:to-cyan-400 dark:text-white"
              >
                Send Email
                <Send className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center rounded-full border border-amber-200/80 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              >
                {isCopied ? "Email Copied" : "Copy Email"}
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">{contact.note}</p>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

export default ContactSection;
