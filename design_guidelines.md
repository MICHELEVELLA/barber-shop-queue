# Barber Shop Live Queue System - Design Guidelines

## Design Approach
**Reference-Based with Custom Aesthetic**: Modern barber shop theme combining Linear's clean utility interface with a sophisticated dark aesthetic. Draw from Stripe's clarity for data display and authentication flows.

**Core Theme**: Professional barbershop - dark, masculine, premium feel with metallic accents suggesting quality craftsmanship.

---

## Typography

**Font Stack** (via Google Fonts CDN):
- **Primary**: 'Inter' - for UI elements, queue display, service info
- **Accent**: 'Bebas Neue' - for large numbers, position indicators, dramatic headers

**Hierarchy**:
- Queue Position Number: text-6xl to text-8xl (Bebas Neue, bold)
- Section Headers: text-2xl to text-3xl (Inter, semibold)
- Service Names: text-xl (Inter, medium)
- Body/Details: text-base (Inter, regular)
- Small Text/Metadata: text-sm (Inter, regular)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, and 8** consistently
- Component padding: p-6 or p-8
- Section spacing: space-y-6 or space-y-8
- Card gaps: gap-4 or gap-6
- Button padding: px-6 py-3 or px-8 py-4

**Container Strategy**:
- Main content: max-w-4xl mx-auto
- Modals/Cards: max-w-md mx-auto
- Full-width sections for queue board feel

---

## Component Library

### 1. Authentication Modal
**Layout**: Centered card on semi-transparent dark overlay
- Single-column form with phone input
- Large "Enter Shop Queue" button at bottom
- Clean, minimal - focus on quick entry
- Icon: Phone or scissors icon above input

### 2. Service Selection Cards
**Grid Layout**: grid-cols-1 md:grid-cols-2 gap-6
- Each card displays: service name, duration badge, price
- Hover state: subtle lift effect with shadow
- "Join Queue" button per card
- Icon library: Use Heroicons for service icons (scissors, clock, etc.)

### 3. Live Queue Dashboard (Primary View)
**Hero Section**: 
- Massive queue position number (center, Bebas Neue, text-8xl)
- "You are customer #X" subheading
- Estimated wait time prominently displayed with clock icon

**Queue Stats Panel**:
- Two-column grid for stats: total waiting, your estimated time
- Use bordered cards with subtle glow effect for premium feel

**Action Buttons**:
- Full-width or side-by-side layout
- "Cancel My Spot" (secondary, outline style)
- "Pay Now" (primary, solid with metallic accent treatment)

### 4. Payment Modal
**Layout**: Centered overlay card
- Simple confirmation message
- Payment status indicator
- Large "Confirm Payment" button
- Success state with checkmark animation

### 5. Queue List View (Optional Secondary View)
**Table/Card Hybrid**:
- Scrollable list showing all customers
- Each entry: position number, service type, status badge
- Current user's entry highlighted with accent border

---

## Visual System

### Iconography
**Heroicons via CDN** - use outline style for consistency
- Phone icon (authentication)
- Scissors icon (haircut services)
- Clock icon (wait times)
- User icon (queue position)
- X mark (cancel)
- Check mark (payment success)

### Spacing & Rhythm
- Consistent vertical rhythm: sections spaced with py-8 to py-12
- Card internal padding: p-6 to p-8
- Button groups: space-x-4
- Form elements: space-y-4

### Shadows & Depth
- Elevated cards: shadow-2xl for modals
- Interactive elements: shadow-lg
- Hover states: increase shadow intensity
- Premium glow effect on primary actions

### Borders & Corners
- Standard radius: rounded-lg for cards
- Buttons: rounded-md
- Input fields: rounded-md
- Accent borders: 2px width for highlights

---

## Responsive Behavior

**Mobile First (base)**:
- Single column layouts
- Full-width buttons
- Stack queue stats vertically
- Larger touch targets (min 44px height)

**Tablet (md:)**:
- Service cards: 2 columns
- Side-by-side action buttons
- Larger queue position numbers

**Desktop (lg:)**:
- Maintain max-w-4xl for readability
- Enhanced spacing and breathing room
- Larger typography scale

---

## Interactive States

**Buttons**:
- Primary: Solid background with subtle gradient treatment
- Secondary: Outline style
- Hover: Increase brightness/opacity
- Active: Slight scale down
- Disabled: Reduce opacity to 50%

**Cards**:
- Hover: Subtle lift (transform translateY(-2px))
- Selected service: Accent border glow
- Current user in queue: Distinct highlight treatment

**Real-time Updates**:
- Smooth transitions when queue position changes
- Fade in/out for new/removed entries
- Pulse effect on wait time updates

---

## Images

**No Hero Image Required** - This is a utility application focused on queue management. The large queue position number serves as the visual anchor.

**Optional Branding**: Small barbershop logo in header if available (placeholder: barber pole icon from Heroicons)

---

## Key UX Principles

1. **Instant Clarity**: Queue position and wait time immediately visible upon login
2. **Minimal Friction**: One-tap service selection, quick phone auth
3. **Real-time Confidence**: Visual indicators that data is live-updating
4. **Action Hierarchy**: Primary actions (Join/Pay) always prominent
5. **Status Transparency**: Clear queue status badges (Waiting/In Progress/Completed)

This creates a professional, sophisticated barber shop experience that feels premium while maintaining utility-first clarity for queue management.