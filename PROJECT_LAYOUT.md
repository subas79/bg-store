# BGStore Project Layout

## 📁 Directory Structure

```
bgstore/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (shop)/                   # Shop route group
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # Product detail page
│   │   │   └── page.tsx          # Products listing page
│   │   ├── cart/
│   │   │   └── page.tsx          # Shopping cart page
│   │   ├── checkout/
│   │   │   └── page.tsx          # Checkout page
│   │   └── page.tsx              # Home/Shop page
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── api/                      # API routes
│   │   ├── products/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   ├── cart/
│   │   │   └── route.ts
│   │   └── orders/
│   │       └── route.ts
│   ├── components/               # Shared components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
│
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Badge.tsx
│   ├── product/                  # Product-related components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductImage.tsx
│   │   ├── ProductDetails.tsx
│   │   └── ProductGallery.tsx
│   ├── cart/                     # Cart components
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── CartIcon.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Sidebar.tsx
│   └── forms/                    # Form components
│       ├── CheckoutForm.tsx
│       └── ContactForm.tsx
│
├── public/                       # Static assets (served at root)
│   ├── images/                   # Product images
│   │   ├── products/             # Product photos
│   │   │   ├── product-001.jpg
│   │   │   ├── product-002.jpg
│   │   │   └── ...
│   │   ├── gallery/              # Gallery images
│   │   │   └── ...
│   │   └── banners/              # Banner images
│   │       └── ...
│   ├── videos/                   # Product videos
│   │   ├── products/             # Product videos
│   │   │   ├── product-001.mp4
│   │   │   ├── product-002.mp4
│   │   │   └── ...
│   │   └── promotional/          # Promotional videos
│   │       └── ...
│   ├── icons/                    # Icon files
│   │   └── ...
│   └── ...                       # Other static files
│
├── lib/                          # Utility libraries
│   ├── api/                      # API client functions
│   │   ├── products.ts
│   │   ├── cart.ts
│   │   └── orders.ts
│   ├── utils/                    # Utility functions
│   │   ├── format.ts             # Formatting utilities
│   │   ├── validation.ts         # Validation utilities
│   │   └── helpers.ts            # General helpers
│   └── constants/                # Constants
│       ├── routes.ts
│       └── config.ts
│
├── hooks/                        # Custom React hooks
│   ├── useCart.ts
│   ├── useProducts.ts
│   └── useLocalStorage.ts
│
├── types/                        # TypeScript type definitions
│   ├── product.ts
│   ├── cart.ts
│   ├── order.ts
│   └── index.ts
│
├── context/                      # React Context providers
│   ├── CartContext.tsx
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── styles/                       # Additional styles
│   └── components.css
│
├── assets/                       # Source assets (before processing)
│   ├── images/                   # Original images
│   │   └── [WhatsApp images will be organized here]
│   └── videos/                   # Original videos
│       └── [WhatsApp videos will be organized here]
│
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Example env file
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 📦 Asset Organization

### Current Assets Location
- **Source**: `assets/` folder contains WhatsApp images and videos
- **Destination**: Assets should be organized in `public/` for Next.js to serve them

### Asset Categories

1. **Product Images** (`public/images/products/`)
   - Individual product photos
   - Multiple angles/views per product
   - High-resolution images for product pages

2. **Product Videos** (`public/videos/products/`)
   - Product demonstration videos
   - Usage tutorials
   - Promotional content

3. **Gallery Images** (`public/images/gallery/`)
   - General store images
   - Lifestyle/product in use images

4. **Banner Images** (`public/images/banners/`)
   - Homepage banners
   - Promotional banners
   - Category headers

## 🎯 Key Features Structure

### E-commerce Features
- **Product Catalog**: Browse and search products
- **Product Details**: Individual product pages with images/videos
- **Shopping Cart**: Add/remove items, quantity management
- **Checkout**: Order processing and payment
- **User Authentication**: Login/Register functionality
- **Order Management**: Order history and tracking

### Component Hierarchy
```
RootLayout
├── Header (Navigation, Cart Icon)
├── Main Content
│   ├── Home Page (Product Grid)
│   ├── Product Detail Page
│   ├── Cart Page
│   └── Checkout Page
└── Footer
```

## 🔧 Configuration Files

- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.ts`: Tailwind CSS configuration (if needed)
- `postcss.config.mjs`: PostCSS configuration
- `eslint.config.mjs`: ESLint configuration

## 📝 Next Steps

1. **Organize Assets**: Move and rename assets from `assets/` to `public/images/` and `public/videos/`
2. **Create Components**: Build reusable UI components
3. **Set Up Types**: Define TypeScript interfaces for products, cart, orders
4. **Implement Features**: Build product listing, cart, checkout functionality
5. **Add State Management**: Set up context providers for cart and auth
6. **Create API Routes**: Build backend API endpoints for products and orders

