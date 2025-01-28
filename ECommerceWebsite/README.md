# E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. This project uses Vite for fast development and building.

## 🚀 Features

- **Product Catalog**: Browse through a wide range of products with detailed information
- **Category Management**: Products organized by categories for easy navigation
- **User Management**: View and manage user profiles
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Type Safety**: Built with TypeScript for better development experience and code reliability

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ECommerceWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
ECommerceWebsite/
├── src/
│   ├── assets/         # Static assets (images, etc.)
│   ├── components/     # Reusable React components
│   │   ├── Categories.tsx
│   │   ├── Navbar.tsx
│   │   ├── Products.tsx
│   │   ├── Users.tsx
│   │   └── ...
│   ├── pages/         # Page components
│   │   └── Home.tsx
│   ├── services/      # API services
│   │   └── api.ts
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Public assets
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 API Integration

The application integrates with the Platzi Fake Store API (https://api.escuelajs.co/api/v1) for:
- Product listings
- Category management
- User profiles

## 💻 Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Code Style
- The project uses ESLint for code linting
- TypeScript for type checking
- Follows React best practices and conventions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
