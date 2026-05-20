"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const t = useTranslations("forms.contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-brand-green/30 bg-brand-green/10 px-6 py-8 text-center"
      >
        <p className="font-heading text-lg text-midnight">{t("successTitle")}</p>
        <p className="mt-2 text-sm text-muted">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">{t("name")}</Label>
          <Input id="contact-name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="contact-phone">{t("phone")}</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            dir="ltr"
            className="unicode-bidi-plaintext"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="contact-email">{t("email")}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
        />
      </div>
      <div>
        <Label htmlFor="contact-subject">{t("subject")}</Label>
        <Input id="contact-subject" name="subject" required />
      </div>
      <div>
        <Label htmlFor="contact-message">{t("message")}</Label>
        <Textarea id="contact-message" name="message" required rows={5} />
      </div>
      <p className="text-xs text-muted">{t("disclaimer")}</p>
      <Button type="submit" size="lg" className={cn("w-full sm:w-auto")}>
        {t("submit")}
      </Button>
    </form>
  );
}
