---
sidebar_position: 2
---

# Assignment 2

## Due Oct. 15th prior to 11:59pm.

Assignment 2,3 and 4 will use the same repository. Assignment 2 will consist of implementing Authentication using passport.js and implementing Unit test. The inivitation link to the repository can be found below. The application will need to implement each of the first 4 requirements. Requirement 5 provides instructions on how you will document, submit your application.

*REMINDER:  Your final project must utilize the following technologies.
 - Node.js (Server-side language), SQLite (Database), Jest Testing Framework, passport.js(Authentication)


## Requirement 1 (Back-end Architecture Implemented, Routes defined along with Application Logic)

- Application consist of hierarcial folder structure that implements some fashion of a Model, View, Controller architecture.  If you prefer, you can use the express.js skeleton found at this [link](https://expressjs.com/en/starter/generator.html) or you can build out your own folder structure that takes into consideration the separation of presentation, controller and application logic.

![Assignment Page Layout](https://instructorc.github.io/uic_course_app/img/mvc_uml_diagram.png)

- Application have routes defined that would allow the user to create an account, sign-up for the site, update user information and delete account.  Although database implementation is not needed for this assignment, your team should demonstrate CRUD functionality by reading and writing user data to some file.  It is permissible to use SQLite for this assignment, but it is not a requirement.  We will cover SQLite and Relational Databases in the coming weeks.

## Requirement 2 (View, Presentation Layer Implementation)
-  At a minimum, your application should have a interface/view for each of the routes defined in Requirement 1.  You should have a interface/view for the homepage route "/".

-  Each view should implement responsive design principles that will allow for pleasant viewing at smaller screen widths.

## Requirement 3 (Authentication Implemented using Passport.js and Security Authentication Considerations):

#### Passport.js requirements
- Passport.js is successfully implements the local-strategy.
- Application should properly implement the use of sessions using Passport.js definied functionality.

#### Authentication Security Measures
- Application will implement one of the following concepts we discussed in class.  A list of those concepts are below
    - Secure Storage of Passwords
    - Multifactor Authentication
    - Implementing CAPTCHA
    - Enforcing Strong Passwords

## Requirement 4 (Unit Test - Code Coverage of Functionality defined in Requirement 1):
 - You will need to implement the Jest.js testing framework.
 - Within your Repository readme file, you will need to formulate a plan for how you will write unit tests for your application that will ensure that your application logic is free of faults. Your ReadMe documentation will describe the unit tests that you have created, including a description of what each test is intended to do and how it serves a purpose in verifying application functionality. Your tests must cover the major system functionality, including both normal usage and erroneous input. You must explain why your tests will cover all major functionality, and not leave gaps in test coverage. 
 - For this assignment, unit test do not need to be automated, but rather a command defined in package.json file.


## Requirement 5 (Submission and Publishing your project):

Your project should be submitted via the GitHub Repository issued to you by the instructor.  You can accept the repository by clicking on the link below.  You will need to submit the assignment by the due date and and time listed above.  It is permissible to continue progress on the assignment after the due date and time listed if and only if a score has not been entered. The repository for your assignment should include all the necessary files for rendering your assignment. 

You will also need to submit a compressed folder of your project to GradeScope.  Make sure to delete the node_modules folder in your respective directories prior to compressing and submitting to GradeScope.

### GitHub Repository Invitation Link - https://classroom.github.com/a/_WauAZ4r 


## Rubric
Forthcoming 