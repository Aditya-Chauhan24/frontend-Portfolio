import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionShell from "./SectionShell";

function ContactSection({ contact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || "-"}\nEmail: ${formData.email || "-"}\n\nMessage:\n${formData.message || ""}`
    );

    window.location.href = `${contact.social.email}?subject=${subject}&body=${body}`;
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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-ring rounded-[2rem] p-6"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Name</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-2xl border border-amber-200/80 bg-white px-4 py-3 text-slate-950 outline-none transition focus:-translate-y-0.5 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-2xl border border-amber-200/80 bg-white px-4 py-3 text-slate-950 outline-none transition focus:-translate-y-0.5 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Message</span>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the role, product, or collaboration."
                className="rounded-2xl border border-amber-200/80 bg-white px-4 py-3 text-slate-950 outline-none transition focus:-translate-y-0.5 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 dark:from-brand-500 dark:to-cyan-400 dark:text-white"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
            <p className="text-sm text-slate-600 dark:text-slate-400">{contact.note}</p>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}

export default ContactSection;
