# Client Observations Log

Internal notes on client-mandated changes that go against UX best practice. Implemented as requested for review/demo purposes — kept here for reference if questioned later.

---

## 1. Three CTAs in navbar (Call Now + WhatsApp + Book Appointment)

**Change requested:** Add all three CTAs from the original "locked CTA hierarchy" (Call, WhatsApp, Book Appointment) back into the navbar, on top of the existing Announcement Bar (which already shows both phone numbers) and the floating WhatsApp button.

**Observation:**
- Too many competing CTAs confuses the audience — three different "contact us" actions sitting side-by-side in the header dilutes the priority of all of them.
- Call is already prominently available in the Announcement Bar (desktop) and as a tap-to-call icon (mobile).
- WhatsApp is already available as a floating button on every page (desktop circle, mobile bottom bar).
- Result: the navbar now repeats two CTAs that are already accessible elsewhere on the page, adding visual clutter and reducing the visual weight of "Book Appointment" (the actual conversion goal).

**Recommendation (not implemented per client request):** Keep a single primary CTA in the navbar ("Book Appointment"), let the Announcement Bar + floating WhatsApp button cover Call/WhatsApp.

---

## 2. Floating WhatsApp button now also shown on mobile

**Change requested:** Show the floating WhatsApp circle (bottom-right) on mobile as well as desktop, in addition to the existing mobile sticky bottom bar (which already has its own WhatsApp button).

**Observation:**
- As the client themselves noted: "whatsapp is already there in sticky navbar, whatsapp over whatsapp wont look good."
- On mobile, users now see TWO WhatsApp entry points simultaneously: the floating circle (bottom-right) and the WhatsApp icon in the sticky bottom bar (right slot).
- The floating circle can visually overlap/crowd the bottom bar's WhatsApp button depending on page scroll position and content, since both sit in the bottom-right region of the viewport.
- Redundant CTAs for the same action (WhatsApp chat) reduce the perceived value of each and add visual clutter to an already busy mobile viewport (bottom bar + floating button).

**Recommendation (not implemented per client request):** On mobile, rely solely on the sticky bottom bar's WhatsApp button and hide the floating circle (`hidden lg:flex` instead of showing on all breakpoints) — desktop keeps the floating circle since it has no equivalent bottom bar.

---

## 3. Hero sub-paragraph is too long

**Content source:** `UniCare_Hospitals_Website_Content_Version-2 .md` — Page 01 Hero, body copy verbatim.

**Observation:**
- The hero sub-paragraph ("Unicare Hospitals is a doctor-founded multispecialty hospital in the heart of Kokapet, built so the families of West Hyderabad never have to choose between quality care and a long drive. From maternity to pediatrics, surgery to diabetes care, your specialists are now minutes away.") is 2 full sentences, ~48 words — unusually long for a hero descriptor.
- Hero paragraphs work best at 15–20 words. At 48 words, the text competes visually with the H1 and buries the CTAs below the fold on smaller screens.
- Users in the hero section are decision-makers scanning in seconds, not readers. A long paragraph reduces the chance of reaching the CTA row before they scroll or bounce.

**Recommendation (not implemented — content locked to source doc):** Trim to one punchy line, e.g. "Doctor-founded multispecialty care in Kokapet — maternity, surgery, paediatrics and more, minutes from your door." Keep the full copy further down the page where users are in reading mode.
