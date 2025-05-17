# Travel Language Cheatsheet Generator

A web application that generates language cheatsheets for travelers based on their travel type (hackathon project).

## Description

The Travel Language Cheatsheet Generator allows users to create personalized language guides with essential phrases based on their specific travel type. Whether you're going on a beach vacation, business trip, adventure travel, or culinary tour, this app will provide you with relevant phrases in multiple languages.

## Features

- **Travel Type Selection**: Choose from various travel types (Beach Vacation, Business Trip, Adventure Travel, etc.)
- **Multiple Languages**: Support for Spanish, French, Italian, German, Japanese, and Mandarin
- **Categorized Phrases**: Phrases organized by relevant categories for each travel type
- **Print & Download**: Options to print or download the cheatsheet as a PDF
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- Next.js 14.2.28
- React 18
- TypeScript
- Tailwind CSS 3.3.0
- React Icons 5.0.1
- GitHub Actions for CI/CD
- GitHub Pages for deployment

## Getting Started

### Prerequisites

- Node.js (v20 or newer)
- npm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/language-cheatsheet.git
   cd language-cheatsheet
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Building for Production

1. Build the application
   ```
   npm run build
   ```

2. The static files will be generated in the `out` directory

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on push to main branch
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the Next.js application
5. Deploys to GitHub Pages

Visit the live site at: [https://alxmassy.github.io/language-cheatsheet](https://alxmassy.github.io/language-cheatsheet)

## How It Works

1. **Select Your Travel Type**: Choose the type of travel that matches your upcoming trip
2. **Choose a Language**: Select from our range of available languages
3. **Get Your Cheatsheet**: View your customized cheatsheet with relevant phrases

## Future Enhancements

- Add more travel types and languages
- Implement text-to-speech for pronunciation
- Create a user account system to save favorite phrases
- Add a quiz feature to practice phrases
- Enable offline access for travelers without internet

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
