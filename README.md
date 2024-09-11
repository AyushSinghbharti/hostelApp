# Hostel Allotment App

## Description

The Hostel Allotment App is designed to streamline the process of hostel allotment for students. It features two distinct interfaces: one for administrators and one for students. This app integrates Firebase for authentication and backend management, enabling efficient hostel management and student profile management.

### Key Features

- **Admin Interface**:
  - Manage hostels, including adding and modifying hostel information.
  - Set and update criteria for hostel allotment.
  - Post and manage activities (e.g., football, chess games) for students.
  - Execute queries to allot hostels based on criteria like CGPA.
  - View and manage student data, including hostel allotment details.

- **Student Interface**:
  - Login using Firebase authentication.
  - Update personal profile information.
  - View allotted hostel details and fees/fine status.
  - Access a list of alloted hostels and associated information.

## Tech Stack

- **React Native**: For building the mobile application.
- **Expo**: For development and deployment.
- **Firebase**: For authentication and backend services.
- **SQL Queries**: For executing complex queries related to hostel allotment.

## Screenshots

### Admin Interface

<p align="center">
  <img src="https://github.com/user-attachments/assets/a3637870-f79f-4ca2-a0d9-6050bdbe6a78" alt="Admin Dashboard" width="320"/>
  <img src="https://github.com/user-attachments/assets/e0636e9b-b40f-47a3-80ba-9684eee8cda9" alt="Hostel Management" width="320"/>
  <img src="https://github.com/user-attachments/assets/30b81f75-b3a4-4d16-ae0b-bd6d7cb9227f" alt="Activity Management" width="320"/>
  <img src="https://github.com/user-attachments/assets/e9543671-3b70-4e76-82a6-5e01a9533578" alt="Student Management" width="320"/>
</p>

### Student Interface

<p align="center">
  <img src="https://github.com/user-attachments/assets/77401172-0cca-43e2-8bd1-303f75dd1279" alt="Student Dashboard" width="320"/>
  <!-- Add more screenshots here if available -->
</p>

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/hostel-allotment-app.git
   cd hostel-allotment-app
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project and configure authentication.
   - Download the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) files from your Firebase project settings.
   - Place these files in the appropriate directories:
     - For Android: `android/app/`
     - For iOS: `ios/`

4. **Run the App**:
   - For development:
     ```bash
     expo start
     ```
   - For building the app:
     ```bash
     expo build:android
     expo build:ios
     ```

## Configuration

- **Firebase Configuration**:
  Ensure that Firebase configuration is properly set up in your project. You might need to update Firebase settings in your project files.

- **Environment Variables**:
  Configure any environment variables or settings required by Firebase and your app.

## Usage

- **Admin Login**: Admins can log in to manage hostels, criteria, and activities.
- **Student Login**: Students can log in to view and update their profiles, and access hostel and fee information.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please reach out to:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
