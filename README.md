<div style="text-align:center;">
    <img src="public/dark_logo.png" alt="Logo" height="100" width="100"><br/><img src="public/logo.png" alt="Logo" height="100" width="100"> <h1>Hirelink</h1>
</div>

Hire-Link is a comprehensive platform developed by Team Dracarys to streamline the hiring process for both recruiters and candidates. The platform consists of a Next.js website for recruiters and a Flutter mobile application for candidates. It aims to automate the traditional hiring process, providing a seamless experience for both parties.


## Problem Statement

The traditional hiring process can be time-consuming and inefficient for both job applicants and recruiters. Applicants are often required to manually
apply for multiple jobs and recruiters must sift through numerous resumes to find suitable candidates. It involves a lot of manual work and is often time-consuming and expensive. Sorting through numerous applications and resumes can be overwhelming, and sometimes candidates with the right
qualifications are overlooked. This can lead to missed opportunities for both parties and a lack of diversity in the hiring process.


## Drawbacks of the Traditional Hiring Process

- Traditional hiring processes can take an average of 42 days to fill a position, resulting in longer hiring cycles and increased costs. (Source: Society for Human Resource Management).
- Manual filtering of applications is time-consuming and prone to human errors and bias, with recruiters spending an average of 23 hours per hire on manual screening. (Source: Glassdoor).
- A poor candidate experience can lead to negative reviews and deter future applicants. About 60% of job seekers report a negative candidate experience. (Source: Talent Board).
- Poor hiring decisions can result in costs of up to 30% of the employee's first-year earnings, including recruitment and training costs. (Source: Society for Human Resource Management).
- Lack of transparency and feedback in the hiring process can lead to a poor candidate experience, with 83% of candidates reporting that a negative interview experience can change their opinion about a role or company. (Source: LinkedIn)

  
## Solution Approach

The project addresses the inefficiencies of traditional hiring processes by leveraging modern technologies and approaches. The key components of our solution approach include:
1. **Automation**: Implementing automated processes for tasks such as resume parsing, candidate-job matching, and feedback generation reduces manual effort and improves efficiency.
2. **Integration of Machine Learning**: By incorporating machine learning algorithms, we can analyze candidate profiles and job requirements to provide personalized suggestions for both recruiters and candidates.
3. **User Experience Optimization**: Prioritizing user experience ensures that the platform is intuitive and easy to use for both recruiters and candidates. Features such as real-time notifications and personalized feedback contribute to a positive user experience.
4. **Security and Privacy**: Ensuring secure storage and handling of sensitive data is paramount. Our solution employs industry-standard security measures to protect user information and maintain privacy.


## Hire-Link Features

**Website for Recruiters**:
  - Create and manage job postings with eligibility criteria, responsibilities, and other details.
  - Candidates can add their resume from which required fields can be extracted so that manual feeding can be automated.
  - Filter applicants based on job requirements.
  - Receive suggestions for top candidates based on machine learning algorithms.
  - Provide feedback to applicants and improve their profiles.


## Technologies Used

- **Next.js**: Used for developing the web-based platform for recruiters.
- **Flutter**: Utilized for building the cross-platform mobile application for candidates.
- **MongoDB Atlas**: MongoDB Atlas is used as the database for storing and managing data. It offers flexibility and scalability for handling application data.
- **OCR Technology**: Optical Character Recognition (OCR) technology is used to extract text from PDF files. This allows for automatic parsing of resumes and other documents.
- **Google's Gemini AI**: Google's Gemini AI is used for querying and performing intelligent searches within the application. It enhances the search functionality and provides relevant results for recruiters and candidates.
- **GitHub**: Version control and collaboration platform for team development.


## Installation of our Website

### Next.js Website
1. Clone the repository:
   ```bash
   git clone https://github.com/ShantanuR03/nextjs-website.git

2. Install dependencies:
   ```bash
   cd nextjs-website npm install

3. Run the development server:
   ```bash
   npm run dev
   
The website will be accessible at .

## Website Preview

### Next.js Website
![Screenshot 1](/public/UI/hero.png)
Here is our hero section which enables new users to get started with the website and existing user to login to our website.
##

![Screenshot 2](/public/UI/deside.png)
A new user can be a recruiter or a candidate which can be differentiated on this screen.
##

![Screenshot 3](/public/UI/candidatereg.png)
If a user selects 'Register as a Candidate' then he will be redirected to this page where he can fill up his resume.
##

![Screenshot 4](/public/UI/loadingcv.png)
Our System will analyze the uploaded Resume
##

![Screenshot 5](/public/UI/cvfilled.png)
After analyzing the Resume, all the fields of candidate profile will be filled in automatically
##

![Screenshot 6](/public/UI/successreg.png)
The Candidate will be successfully registered on our database 
##

![Screenshot 7](/public/UI/recruitreg.png)
The Recruiter will be successfully registered on our database
##

![Screenshot 10](/public/UI/signin.png)
Users can sign In on our Platform
##

![Screenshot 8](/public/UI/dash1.png)
Recruiter will be able to see total openings, completed interviews, applications accepted and rejected
##

![Screenshot 9](/public/UI/dash2.png)
The recruiter will be able to see the potential matching candidates for a particular job opening, matching is done according to candidates profile
#


## Installation of HireLink App

1. Clone the repository:

   ```bash
   git clone https://github.com/Sanket80/HireLink-App.git

2. flutter pub get:

   ```bash
   flutter pub get

3. Run the app::

   ```bash
   flutter pub run

## App Preview
1. **Splash Screen**: Displays branding elements and app logo while the app loads, creating a visually engaging start.
2. **Onboarding Screens**: Guides users through the app's features and functionalities, offering a smooth introduction to its capabilities.
3. **Login Screen**: Prompts users to authenticate their identity, ensuring secure access to personal data and app features.
4. **Resume Selection Screen**: Allows users to upload their resumes directly from their device, simplifying the application process.
5. **Resume Uploaded Screen**: Confirms successful resume upload, providing users with assurance and peace of mind.
6. **Form Screen**: Collects additional details required for job applications, enhancing the user's profile and increasing chances of success.
7. **Offered Jobs Screen**: Presents users with a curated list of available job opportunities, enabling efficient browsing and selection.
8. **Chat Bot Screen**: Offers an interactive chat experience for users to seek assistance or clarification on any queries they may have.
9. **Statistics Screen**: Provides insightful data and analytics related to job search activities, empowering users with valuable insights for informed decision-making.


<div style="display: flex;">
    <img src="assets/App%20Preview/Splash.jpg" alt="SplashScreen.jpg" height="500" width="235">
  <img src="assets/App%20Preview/onBoarding1.jpg" alt="onBoarding1.jpg" height="500" width="235">
  <img src="assets/App%20Preview/onBoarding2.jpg" alt="onBoarding2.jpg" height="500" width="235">
</div>

<div style="display: flex;">
    <img src="assets/App%20Preview/onBoarding3.jpg" alt="onBoarding3.jpg" height="500" width="235">
  <img src="assets/App%20Preview/Login.jpg" alt="Login.jpg" height="500" width="235">
  <img src="assets/App%20Preview/SelectResume.jpg" alt="SelectResume.jpg" height="500" width="235">
</div>

<div style="display: flex;">
    <img src="assets/App%20Preview/ResumeUploaded.jpg" alt="UploadResume.jpg" height="500" width="235">
  <img src="assets/App%20Preview/Form.jpg" alt="Form.jpg" height="500" width="235">
 <img src="assets/App%20Preview/Offered%20Jobs.jpg" alt="JobOfferDetails.jpg" height="500" width="235">
</div>

<div style="display: flex;">
    <img src="assets/App%20Preview/Statistics.jpg" alt="Statistics.jpg" height="500" width="235">
  <img src="assets/App%20Preview/Chat_Bot.jpg" alt="ChatBot.jpg" height="500" width="235">
</div>


## Repository Link

The source code for the HireLink app is available in the following GitHub repository:

[GitHub Repository](https://github.com/Sanket80/HireLink-App.git)


## Enhancements Planned:

1. **Integration of Calendar, Mail, and Meet APIs**: HireLink will be upgraded to seamlessly integrate with calendar, mail, and meet APIs. This integration will facilitate scheduling meetings by automatically checking for free time slots using AI algorithms.

2. **Automated Meeting Scheduling**: Users will be able to schedule meetings effortlessly, with the system intelligently suggesting available time slots based on participants' schedules.

3. **Tailored Email Generation**: The platform will generate personalized email content tailored to each job and candidate. This feature will optimize communication efficiency and enhance engagement between recruiters and candidates.

4. **Automatic Calendar Updates**: Scheduled meetings will be automatically synced with users' calendars, ensuring timely reminders and efficient time management.


## Video Demo

Watch our project demo video on Google Drive:

[Project Demo Video](https://drive.google.com/file/d/1cipeFD78BN13mC07_6oXMCL1gnpE7ymB/view?usp=sharing)




## Contributing
We welcome contributions from the community! If you have any ideas for improvement or would like to report issues, please feel free to submit a pull request or open an issue on GitHub.


## License
hirelink © 2024 Team Dracarys. Licensed under the [License Type]. See LICENSE for more information.
