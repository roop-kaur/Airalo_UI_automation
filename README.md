
# Airalo UI Automation Tests

This repository contains automated UI test cases for the Airalo website using **Cypress** and the **Page Object Model (POM)** design pattern. The tests cover functionality such as: launching the Airalo website, searching country, changing language and currency as per location, selecting an eSIM package, and verifying the package details.

---

## 📂 Folder Structure

```
cypress/
├── e2e/
│   ├── Airalo_UI_TestCases.spec.cy      # Test cases
├── Support/
│   ├── Pages/
│   │   ├── HomePage.js           # Page Object for Home Page
│   │   ├── LanguagePage.js       # Page Object for Language Selection
│   │   ├── CurrencyPage.js       # Page Object for Currency Selection
│   │   ├── PackagePage.js        # Page Object for eSIM Packages
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or later) installed on your system.
- **Cypress** installed globally or locally in your project.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/Airalo-UI-automation.git
   cd Airalo-UI-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```

---

## 🔧 How to Run Tests

To execute all test cases in headless mode, run:

```bash
npx cypress run
```

To open the Cypress Test Runner for debugging, use:

```bash
npx cypress open
```

---

## 🧪 Test Scenarios

### 1. **Visit Airalo Website**
- Open the Airalo homepage.
- Verify the page title.
- Accept cookies via the pop-up.

### 2. **Change Language**
- Change the language to English.

### 3. **Change Currency**
- Change the currency to USD.
- Update the settings.

### 4. **Search for a Country**
- Search for "Japan" using the search functionality.
- Select "Japan" from the autocomplete list.

### 5. **Select eSIM Package**
- Select an eSIM package.

### 6. **Verify eSIM Package Details**

- Verify the coverage, data, validity, and price details.



---

Notes: During the preparation of test cases, several edge cases were identified that could enhance the robustness and coverage of the tests. However, due to time constraints, these edge cases have not been addressed in the current implementation. Addressing them in the future would ensure a more comprehensive validation of the application.

## 📚 Technology Stack

- **Cypress**: JavaScript-based end-to-end testing framework.
- **Page Object Model (POM)**: A design pattern for test automation to improve reusability and maintainability.

---

## 🛠 Custom Commands & Utilities

### Page Objects
The repository uses page objects to separate test logic from UI element interactions. These are located in the `Support/Pages` directory.

### Custom Commands
You can define custom Cypress commands in `cypress/support/commands.js` to further streamline test development.

---

## 📞 Contact

For any queries or feedback, please contact:

- **Name**: Rupinder Kaur
- **Email**: rupinder.kaur270185@gmail.com 
- **GitHub**: https://github.com/roop-kaur

---
