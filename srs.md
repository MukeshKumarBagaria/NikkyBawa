# Software Requirement Specification (SRS)

# Website Redesign – Nikky Bawa Salon

---

# 1. Project Overview

## 1.1 Purpose

The purpose of this project is to **redesign the existing website** while preserving the current URL structure to ensure that the website’s **existing SEO rankings and indexed pages remain unaffected**.

The redesigned website will be built using **Next.js** and will focus on:

- Modern and visually appealing design
- Improved user experience
- Centralized content management
- Strong SEO implementation
- High performance and fast loading

---

# 2. Key Project Objectives

1. Recreate all existing pages with **identical URLs**.
2. Improve **design, responsiveness, and user experience**.
3. Implement **centralized content storage** so that a **non-technical user can update content easily**.
4. Maintain and enhance **SEO performance** using **next-seo**.
5. Ensure the redesigned website is **faster and more optimized than the existing one**.

---

# 3. URL Preservation Requirement (Critical for SEO)

The redesign must **not change any existing URL**.

Changing URLs may result in:

- Loss of Google rankings
- Broken backlinks
- Loss of search traffic

Therefore, the **exact same URL structure must be preserved**.

Example:

| Current URL | New Website URL |
| --- | --- |
| `/about/` | `/about/` |
| `/portfolio/` | `/portfolio/` |
| `/contact/` | `/contact/` |
| `/hair-cuts/` | `/hair-cuts/` |

---

# 4. Website Page Structure

The redesigned website must include the following pages.

---

# 4.1 Main Pages

| Page Name | URL |
| --- | --- |
| Home | `/` |
| About | `/about/` |
| Portfolio | `/portfolio/` |
| Contact | `/contact/` |

---

# 4.2 Services Pages

These pages represent the **primary service categories** offered by the salon.

| Service Page | URL |
| --- | --- |
| Makeup | `/makeup/` |
| Facial | `/facial/` |
| Nails | `/nails/` |
| Hair Removal | `/hair-removal/` |
| Skin Whitening | `/skin-whitening/` |

---

# 4.3 Hair Services Pages

These pages represent the **hair-related services** offered by the salon.

| Hair Service Page | URL |
| --- | --- |
| Hair Color Style | `/hair-color-style/` |
| Hair Straightening / Keratin | `/hair-straightening-keratin/` |
| Hair Cuts | `/hair-cuts/` |
| Hair Extension | `/hair-extension/` |

---

# 5. Total Page Count

The redesigned website will initially include **13 pages**.

### Page Breakdown

Main Pages

- Home
- About
- Portfolio
- Contact

Services Pages

- Makeup
- Facial
- Nails
- Hair Removal
- Skin Whitening

Hair Services Pages

- Hair Color Style
- Hair Straightening / Keratin
- Hair Cuts
- Hair Extension

**Total Pages = 13**

---

# 6. Centralized Content Management

## 6.1 Objective

All website content must be stored in **one centralized content location** so that it can be easily updated without modifying page code.

This allows **non-technical users** to update:

- Text
- Images
- SEO metadata
- Service descriptions

---

## 6.2 Content Structure

Content should be stored in a structured directory such as:

```
/content
   pages.json
   services.json
   hair-services.json
   portfolio.json
   contact.json
   seo.json
```

Each page will dynamically fetch content from these files.

Example:

```
services.json
```

```
{
 "makeup": {
   "title": "Professional Makeup Services",
   "description": "..."
 },
 "facial": {
   "title": "Facial Treatments",
   "description": "..."
 }
}
```

---

# 7. SEO Requirements

The website must be highly optimized for search engines.

SEO will be implemented using:

```
next-seo
```

---

## 7.1 Page-Level SEO

Each page must include:

- SEO Title
- Meta Description
- Canonical URL
- Open Graph metadata
- Twitter metadata

Example:

```
Hair Cuts – Nikky Bawa Salon | Professional Haircuts in Bhopal
```

---

## 7.2 Structured Data

The website should include structured data for:

- Beauty Salon
- Local Business
- Service

This improves:

- Google search visibility
- Local search ranking
- Rich results in Google

---

# 8. SEO Data Centralization

All SEO data will also be stored in a **single file**.

Example structure:

```
seo.json
```

Example:

```
{
 "home": {
   "title": "",
   "description": ""
 },
 "hair-cuts": {
   "title": "",
   "description": ""
 }
}
```

This ensures SEO can be managed easily.

---

# 9. Content Update Workflow

To update content:

1. Open the content file
2. Modify text or images
3. Save the file
4. Deploy the website

No coding knowledge required.

---

# 10. Non-Functional Requirements

### Performance

- Page load time under 1 **seconds**
- Optimized images
- Lazy loading

### SEO

- Lighthouse SEO score **95+**
- Proper heading hierarchy
- Image alt tags

### Responsiveness

- Mobile friendly
- Tablet optimized
- Desktop optimized

---

# 11. Technology Stack

Frontend

```
Next.js
React
Tailwind CSS
Framer Motion
Tailwind CSS
Aceternity UI
Shadcn UI
Framer Motion
Lenis
GSAP
Swiper
Lucide Icons

```

SEO

```
next-seo
```

Content Management

```
JSON based centralized content system
```

---

# 12. Success Criteria

The redesign will be considered successful if:

1. All **existing URLs remain unchanged**.
2. Website **SEO rankings remain stable or improve**.
3. The website design becomes **modern and visually appealing**.
4. Content updates become **simple and centralized**.
5. Website performance improves significantly.

---

If you want, I can also prepare the **developer-level architecture** for this project including:

- **Exact Next.js folder structure**
- **Dynamic page system for services**
- **Central content system used by big agencies**
- **Perfect SEO structure using next-seo**

This will make the website **extremely scalable and very easy to maintain.**