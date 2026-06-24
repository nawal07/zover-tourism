"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/rtl";

const TRIP_TYPE_LABELS: Record<string, string> = {
  leisure: "Leisure",
  business: "Business",
  luxury: "Luxury",
  family: "Family",
  mice: "MICE / Events",
  other: "Other",
};

export function InquiryForm() {
  const t = useTranslations("forms.inquiry");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    const data = new FormData(e.currentTarget);

    const name = (data.get("name") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const email = (data.get("email") as string) || "";
    const tripType = (data.get("tripType") as string) || "";
    const travelers = (data.get("travelers") as string) || "";
    const destination = (data.get("destination") as string) || "";
    const dates = (data.get("dates") as string) || "";
    const message = (data.get("message") as string) || "";

    const lines = [
      "Hello Zover International Travel & Tourism! 👋",
      "",
      "✈️ *Travel Enquiry*",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Trip Type:* ${TRIP_TYPE_LABELS[tripType] ?? tripType}`,
    ];
    if (travelers) lines.push(`*No. of Travelers:* ${travelers}`);
    lines.push(`*Destination:* ${destination}`);
    if (dates) lines.push(`*Preferred Dates:* ${dates}`);
    if (message) lines.push("", "*Additional Details:*", message);

    const url = getWhatsAppUrl(SITE_CONFIG.contact.whatsapp, lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
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
            required
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
          <Input id="inquiry-dates" name="dates" placeholder={t("datesPlaceholder")} required />
        </div>
      </div>
      <div>
        <Label htmlFor="inquiry-message">{t("message")}</Label>
        <Textarea
          id="inquiry-message"
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          required
        />
      </div>
      <p className="text-xs text-muted">{t("disclaimer")}</p>
      <Button type="submit" size="lg" className={cn("w-full sm:w-auto")}>
        {t("submit")}
      </Button>
    </form>
  );
}
