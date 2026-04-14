"use client";

import { sendGTMEvent } from "@next/third-parties/google";

// ──────────────────────────────────────────────
// GTM Event Tracking Utilities
// Industry-standard dataLayer push wrappers for
// Google Tag Manager on a Next.js application.
// ──────────────────────────────────────────────

/**
 * Track a custom event via GTM dataLayer.
 *
 * @example
 * trackEvent("cta_click", { cta_label: "Book Appointment", location: "hero" });
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  sendGTMEvent({ event: eventName, ...params });
}

/**
 * Track a virtual page view (useful for SPA-style navigation).
 * GTM's built-in History Change trigger handles most cases,
 * but this provides an explicit push for custom needs.
 */
export function trackPageView(url: string, title?: string) {
  sendGTMEvent({
    event: "page_view",
    page_path: url,
    page_title: title ?? document.title,
  });
}

/**
 * Track a phone call click (tel: links).
 */
export function trackPhoneClick(phoneNumber: string) {
  sendGTMEvent({
    event: "phone_click",
    phone_number: phoneNumber,
  });
}

/**
 * Track a WhatsApp button click.
 */
export function trackWhatsAppClick(source: string) {
  sendGTMEvent({
    event: "whatsapp_click",
    click_source: source,
  });
}

/**
 * Track a form submission.
 */
export function trackFormSubmission(
  formName: string,
  success: boolean,
  extra?: Record<string, string | number | boolean>
) {
  sendGTMEvent({
    event: "form_submission",
    form_name: formName,
    form_success: success,
    ...extra,
  });
}

/**
 * Track a CTA button click.
 */
export function trackCTAClick(
  ctaLabel: string,
  location: string,
  extra?: Record<string, string | number | boolean>
) {
  sendGTMEvent({
    event: "cta_click",
    cta_label: ctaLabel,
    cta_location: location,
    ...extra,
  });
}

/**
 * Track scroll depth milestones.
 */
export function trackScrollDepth(percentage: number) {
  sendGTMEvent({
    event: "scroll_depth",
    scroll_percentage: percentage,
  });
}

/**
 * Track a service card view / click.
 */
export function trackServiceInteraction(
  action: "view" | "click",
  serviceName: string
) {
  sendGTMEvent({
    event: `service_${action}`,
    service_name: serviceName,
  });
}
