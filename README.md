# Project made by

Meshal Alghamdi 2139349
Abdulelah Khoj 2138020
Yazeed Alharbi 2139183
Abdulkarim Alsahli 2135123

# Saudia Gym

Saudia Gym is a state-of-the-art fitness facility web application designed exclusively for Saudia Airlines employees and stakeholders. This React-based app promotes wellness and health by showcasing gym features, group fitness classes, and contact forms for inquiries. With a modern, responsive design, the app ensures a seamless user experience across all devices.

---

## **Features**

- **Home Page**:
  - Welcoming hero section with gym details and motivational content.
- **About Page**:
  - Overview of Saudia Gym's mission and offerings.
- **Classes Page**:
  - Display of available gym classes with dynamic content.
  - "Read More" functionality for detailed information.
- **Contact Page**:
  - User-friendly form for inquiries.
  - Real-time validation for form fields.
  - API integration for form submission.
- **Header and Footer**:
  - Responsive navigation menu and footer with social media links.

---

## **Technologies Used**

- **Frontend**: React.js
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: CSS Modules with responsiveness
- **Routing**: React Router
- **API**: Axios for form submission
- **Build Tool**: Create React App

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**

Ensure you have the following installed on your system:

- Node.js (v16 or later)
- npm (v7 or later)

### **Installation**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/saudia-gym.git
   cd saudia-gym
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

### **Running the App**

1. **Start the Development Server:**

   ```bash
   npm start
   ```

   - This will run the app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. **Build the App for Production:**
   ```bash
   npm run build
   ```
   - Builds the app for production to the `build` folder.

### **Testing**

To run tests, use:

```bash
npm test
```

---

## **Project Structure**

```
saudia-gym/
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # App icon
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header/         # Header navigation
│   │   ├── Footer/         # Footer section
│   │   ├── Home/           # Home page content
│   │   ├── About/          # About page content
│   │   ├── Classes/        # Classes and Class components
│   │   ├── Contact/        # Contact form
│   ├── App.js              # Main app file
│   ├── index.js            # App entry point
│   ├── styles/             # Global and modular CSS files
├── package.json            # Project metadata and dependencies
```

---

## **Deployment**

The app can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

1. **Build the App:**

   ```bash
   npm run build
   ```

2. **Deploy:**
   - Follow the platform-specific instructions to deploy the contents of the `build` folder.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Acknowledgments**

Special thanks to Saudia Airlines for inspiring this project.
