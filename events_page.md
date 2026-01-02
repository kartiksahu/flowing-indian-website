# Website Copy – Events Page (Flowing Indian)

## **Workshops & Events**
Move with us across India. Flow Arts, Rope Flow, Ground Flow, and Ancient Clubs — all brought to different cities so you can learn, train, and transform.

---

## **Upcoming Events**
Below are all our current workshops. Click on any event to view full details and register.

### **1. Rope Flow Workshop – Bangalore**
**📅 Date:** 27 February 2025  
**🕒 Time:** 7:00 AM – 9:00 AM  
**📍 Venue:** Cubbon Park (Exact location shared upon registration)

Learn rhythm, mobility, and rotational movement with our signature Rope Flow training.

**➡️ View Details**

---

### **2. Ground Flow Fundamentals – Mumbai**
**📅 Date:** 15 March 2025  
**🕒 Time:** 6:30 AM – 9:00 AM  
**📍 Venue:** Marine Drive Yoga Deck

Explore primal movement patterns for strength, flexibility, and control.

**➡️ View Details**

---

### **3. Ancient Clubs Flow – Delhi**
**📅 Date:** 20 April 2025  
**🕒 Time:** 7:30 AM – 10:00 AM  
**📍 Venue:** Lodhi Gardens

Train with Mudgar and ancient clubs to build shoulder strength, rotational power, and resilience.

**➡️ View Details**

---

## **How to Register**
Every workshop includes a form to collect your details followed by a Razorpay payment link.

**Secure your spot in 3 steps:**
1. Fill out the registration form on the event page.  
2. Click **Proceed to Payment**.  
3. Complete registration using Razorpay.  

After payment, you will be redirected to our **Thank You Page**.

---

## **Why Attend a Flowing Indian Workshop?**
- Learn from experienced instructors.  
- Beginner-friendly, community-based sessions.  
- Improve mobility, flow, rhythm, and strength.  
- Access follow-along videos after the session.  

---

## **Stay Updated**
Follow us on Instagram **@flowingindian** to get updates on new workshops, city tours, and retreats.

---

# Instructions for AI Coding Agent (Build Events System)

## **Objective**
Create a functional Events System on the Flowing Indian website where users can:
- View all upcoming events (/events page)
- Open individual event pages with full details
- Fill out a registration form
- Proceed to pay using a Razorpay payment link
- Get redirected to a thank-you page after payment

---

## **Pages to Create**

### **1. /events (Events Listing Page)**
**Requirements:**
- Fetch event data from a static JSON or hardcoded object for now.
- Display all upcoming workshops in a responsive grid/list.
- Each event card should show:
  - Title
  - Date, Time
  - Venue
  - Short description
  - "View Details" button linking to individual event page
- Follow the website branding: clean, bold, minimal.

---

### **2. Individual Event Page Template (Dynamic)**
**URL structure:** `/events/[event-slug]`

**Page sections to build:**
- Hero title (Event Name)
- Date, Time, Venue
- Workshop description
- What participants will learn (bullet list)
- Who it’s for
- Price
- Registration Form:
  - Name
  - Email
  - Phone
  - Age
  - Experience (Yes/No)
- CTA Button: **Proceed to Payment**
  - Opens Razorpay payment link in new tab or embedded
- FAQ section
- Contact info: email + Instagram

**Additional requirements:**
- Each event page pulls data from an events array/object.
- Razorpay link fetched from event object: `event.paymentLink`.

---

## **3. Thank You Page**
**URL:** `/thank-you`

**Requirements:**
- Simple confirmation text: "Thank you for registering! Your spot is confirmed. Check your email for event details."
- Style consistent with the site.

---

## **4. Data Structure for Events**
Use the following sample object:

```
{
  "events": [
    {
      "title": "Rope Flow Workshop – Bangalore",
      "slug": "rope-flow-bangalore",
      "date": "27 February 2025",
      "time": "7:00 AM – 9:00 AM",
      "venue": "Cubbon Park",
      "description": "Learn rhythm, mobility, and rotational movement with Rope Flow.",
      "learn": ["Rope Flow Basics", "Rhythm Drills", "Shoulder Mobility", "Footwork Patterns"],
      "price": "499",
      "paymentLink": "https://rzp.io/l/YOUR-LINK",
      "faq": [
        {"q": "Do I need a rope?", "a": "We will provide ropes."},
        {"q": "Is this beginner friendly?", "a": "Yes, open to all levels."}
      ]
    }
  ]
}
```

---

## **5. Registration Form Behavior**
- Form submission should optionally send data to your email using a simple backend endpoint or a no-code form handler.
- After clicking "Proceed to Payment", user goes to Razorpay payment link.
- After payment, Razorpay redirects user to `/thank-you`.

---

## **6. Instagram → Website Optimization**
- Add an easy short link: `flowingindian.com/events`
- Ensure pages are mobile-friendly
- Add Open Graph tags (title, description) for event preview when shared

---

## **7. Deliverables from the Agent**
- Fully functional /events page
- Dynamic event detail pages
- Integrated Razorpay link flow
- Working registration forms
- Mobile responsive
- Matching Flowing Indian brand style

