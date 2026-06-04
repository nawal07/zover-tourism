"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function InquiryForm() {
  const t = useTranslations("forms.inquiry");
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
        <p className="font-heading text-lg text-pearl">{t("successTitle")}</p>
        <p className="mt-2 text-sm text-muted">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-name">{t("name")}</Label>
          <Input id="inquiry-name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="inquiry-phone">{t("phone")}</Label>
          <Input
            id="inquiry-phone"
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
        <Label htmlFor="inquiry-email">{t("email")}</Label>
        <Input
          id="inquiry-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-type">{t("tripType")}</Label>
          <Select id="inquiry-type" name="tripType" required defaultValue="">
            <option value="" disabled>
              {t("selectPlaceholder")}
            </option>
            <option value="leisure">{t("types.leisure")}</option>
            <option value="business">{t("types.business")}</option>
            <option value="luxury">{t("types.luxury")}</option>
            <option value="family">{t("types.family")}</option>
            <option value="mice">{t("types.mice")}</option>
            <option value="other">{t("types.other")}</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="inquiry-travelers">{t("travelers")}</Label>
          <Input
            id="inquiry-travelers"
            name="travelers"
            type="number"
            min={1}
            max={99}
            placeholder="2"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-destination">{t("destination")}</Label>
          <Input id="inquiry-destination" name="destination" required />
        </div>
        <div>
          <Label htmlFor="inquiry-dates">{t("dates")}</Label>
          <Input id="inquiry-dates" name="dates" placeholder={t("datesPlaceholder")} />
        </div>
      </div>
      <div>
        <Label htmlFor="inquiry-message">{t("message")}</Label>
        <Textarea
          id="inquiry-message"
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
        />
      </div>
      <p className="text-xs text-muted">{t("disclaimer")}</p>
      <Button type="submit" size="lg" className={cn("w-full sm:w-auto")}>
        {t("submit")}
      </Button>
    </form>
  );
}
