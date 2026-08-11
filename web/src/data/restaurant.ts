/**
 * EDIT THIS FILE to update restaurant details in one place.
 * Fields marked with [EDIT] need your real information.
 */

export const restaurant = {
  name: 'Namche Thakali',
  tagline: 'Kitchen & Inn',
  welcome:
    'Authentic Thakali flavours and warm Himalayan hospitality in the heart of Kathmandu.',

  about: [
    'Welcome to Namche Thakali Kitchen & Inn — a place for authentic Thakali meals, comforting plates, and genuine Nepali hospitality.',
    'Join us in Jhochhen for flavour, comfort, and a welcoming table — whether you are stopping by for a set meal or staying a while.',
    /* [EDIT] Add more about your story, history, or rooms when ready. */
  ],

  contact: {
    address: 'Jhochhen, Kathmandu, Nepal',
    phone: '+977 985-1004974',
    phoneHref: 'tel:+9779851004974',
    whatsapp: '+977 985-1004974',
    whatsappHref: 'https://wa.me/9779851004974',
    /** Correct Google Maps listing for Namche Thakali */
    directionsHref:
      'https://www.google.com/maps/place/namche+thakali/data=!4m2!3m1!1s0x39eb19579a07b5c5:0x5ac7afe74422a1c3',
    mapsEmbedUrl:
      'https://maps.google.com/maps?cid=6541390391594361283&z=17&hl=en&output=embed',
    hours: [
      { day: 'Sunday – Saturday', time: '10:00 AM – 9:00 PM' },
    ],
  },

  social: {
    instagram: 'https://www.instagram.com/namchethakali/',
    facebook: 'https://www.facebook.com/profile.php?id=100082598052033',
    tiktok: 'https://www.tiktok.com/@namche.thakali',
  },

  /**
   * Opens the Google Maps listing so guests can leave a review.
   * Prefer your Google Business “Get more reviews” link if you have one
   * (looks like https://g.page/r/XXXX/review).
   */
  googleReviewUrl:
    'https://www.google.com/maps?cid=6541390391594361283',

  /**
   * After you deploy the website, put the live domain here
   * (example: https://namchethakali.com) so printable QR codes stay correct.
   * Leave empty to use the current browser address when generating QR.
   */
  siteUrl: '',

  linksBio:
    'Welcome to Namche Thakali Kitchen & Inn — Restaurant | Food & Beverage | Rooms. Join us on a journey of flavor, comfort, and hospitality!',

  /**
   * Menu categories & dishes seen on your promotions.
   * [EDIT] Replace prices and add / remove items as needed.
   * Do not publish invented prices without checking your actual menu.
   */
  menu: [
    {
      category: 'Thakali Favourites',
      items: [
        {
          name: 'Signature Thakali Set',
          description: 'Rice, dal, curry, greens, achar & papad',
          price: '[EDIT: price]',
        },
        {
          name: 'Phapar Set',
          description: 'Buckwheat set with traditional sides',
          price: '[EDIT: price]',
        },
        {
          name: 'Thakali Thali',
          description: 'A balanced plate of tradition and comfort',
          price: '[EDIT: price]',
        },
      ],
    },
    {
      category: 'Snacks & Bites',
      items: [
        {
          name: 'Momos',
          description: 'Steamed or fried — ask your server',
          price: '[EDIT: price]',
        },
        {
          name: 'Spring Roll + Veg Momo Combo',
          description: 'Crisp roll with soft veg momos',
          price: '[EDIT: price]',
        },
        {
          name: 'Thukpa',
          description: 'Comforting Himalayan noodle soup',
          price: '[EDIT: price]',
        },
      ],
    },
    {
      category: 'Drinks',
      items: [
        {
          name: 'Fresh Mocktails',
          description: 'Ask for today’s seasonal flavours',
          price: '[EDIT: price]',
        },
        {
          name: 'Americano',
          description: 'Simple, strong, satisfying',
          price: '[EDIT: price]',
        },
      ],
    },
  ],
} as const

export const heroImage = '/images/namchethakali-image-2026-08-11-060.jpg'
export const aboutImage = '/images/namchethakali-image-2026-08-11-081.jpg'
export const logoSrc = '/images/logo.jpg'

export const galleryImages = [
  {
    src: '/images/namchethakali-image-2026-08-11-022.jpg',
    alt: 'Signature Thakali set at Namche Thakali',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-055.jpg',
    alt: 'Phaphar buckwheat meal with curry',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-003.jpg',
    alt: 'Momos, thukpa and snacks spread',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-009.jpg',
    alt: 'Lunch table with momo, grilled chicken and thukpa',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-048.jpg',
    alt: 'Grilled chicken plate',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-040.jpg',
    alt: 'Traditional Thakali thali',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-041.jpg',
    alt: 'Veg momo and spring roll combo',
  },
  {
    src: '/images/namchethakali-image-2026-08-11-036.jpg',
    alt: 'Fresh mocktails at Namche Thakali',
  },
] as const

/** Stills from uploaded Instagram Reels (no .mp4 was provided in the project). */
export const reelStills = [
  {
    src: '/videos/namchethakali-video-2026-08-11-001.jpg',
    alt: 'Welcome to Namche Thakali exterior',
  },
  {
    src: '/videos/namchethakali-video-2026-08-11-111.jpg',
    alt: 'Thali, momos and grilled fish spread',
  },
  {
    src: '/videos/namchethakali-video-2026-08-11-080.jpg',
    alt: 'Phapar thali from our reels',
  },
  {
    src: '/videos/namchethakali-video-2026-08-11-094.jpg',
    alt: 'Momo platter assortment',
  },
] as const

/**
 * When you add a real video file, place it at public/videos/reel.mp4
 * and set reelVideoSrc to '/videos/reel.mp4'.
 */
export const reelVideoSrc: string | null = null
