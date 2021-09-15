---
sidebar_position: 1
---

# Syllabus - CS484 Fall 2021
-------------------------------------------------------



## Logistics

Course: CS484 Secure Web Application Development  
Lectures: MWF 2pm - 3pm Room: Burnham Hall 209  
Prerequisite/Corequisite: CS341 Programming Language Design and Implementation  
Piazza Online Forum: piazza.com/uic/fall2021/cs484  ** *Post all course related questions to Piazza**   
Lecturer: Chris Fulton cifulton@uic.edu   
Office Hours: MW 11:30am - 12:30pm *Shoot me an email to notify me that you plan to stop by  
Office Location: 923 SEO  

## Textbook
(Required) WASEC: Web Application Security for the everyday software engineer: Everything a web developer should know about application security: concise, condensed and made to last.  Author: Alessandro Nadalin ISBN: 978-1670062444

## Learner Supplies
Laptop is required for each class session

## Course Delivery Format 
Our class sessions will be held in-person.  Our sessions are scheduled to be recorded and livestreamed to allow for a small measure of flexibility for those who might not be able to make it to a session for various reasons.  The expectation is that you would be able to attend the majority if not all class sessions.  All quizzes and exams will be administered n-person unless noted otherwise. There will be a few Friday sessions that will be delivered asynchronously.

## Course Description

Web applications integrate concepts from software engineering, systems programming, and computer security. Teaches security through web development, enabling students to design, deploy, scale, attack, and defend modern web applications. 

## Course Overview

This course integrates the concepts that underlie designing, deploying, and defending web applications to provide students with a foundational understanding of how to design and deploy scalable and secure web applications.

This class will teach students the concepts and techniques that enable web applications to maintain high performance in the face of numerous users and attackers. Students will learn and be able to apply software engineering concepts to manage the complexity of client‐side and server‐side software. Students will learn and be able to apply computer systems concepts to manage the scalability of the web application, and provide performant service to large numbers of simultaneous users. Students will learn and be able to apply computer security concepts to designing a web application which is robust to known and unknown attacks. Students will gain familiarity and facility with modern tools which enable creating applications that apply the aforementioned design, performance, and security concepts. Students will learn and be able to apply fundamental security concepts so that they can evaluate the security of future application designs in the face of potential future attacks.

### Languages and Frameworks:
 - Node.js, Express.js Framework, Handlebars.js templating
 - HTML, CSS, JS  *Brief overview of Component-based Frameworks - React
 - JSON
 - SQL, SQLite Database

### Topics Covered
 - Authorization and Authentication
 - Page Layout
 - XSS, CORS
 - Paramaterized Queries
 - Session Hijacking
 - SEO
 - DDOS Attack
 - Passport.js
 - SQL Injection
 - Sessions, Cookies, Tokens
 - Http/Https, TLS/SSL, Public/Private Key Exchange Algorithms
 - Http Headers
 - Version Control (Git and GitHub)
 - CI/CD pipelines
 - Containers (Docker)

## Succeeding in this Class
As the instructor, my job in class is to organize the material coherently, give helpful lectures, provide a framework that combines enough challenge and support for success, and grade reasonably. A reasonable academic expectation is that you spend 2 hours outside of class for every hour spent in class. For a few of your  assignments you may go over this time estimate.
- Complete the assigned reading and review material prior to each class session.  
- Take notes during lecture
- Utilize your Working Team's Expertise


## Discussion and Forum

This term we will be using Piazza for class discussion. The system is highly catered to getting you help fast and efficiently from classmates, the TA, and myself. Rather than emailing questions, I encourage you to post your questions on Piazza. If you have any problems or feedback for the developers, email team@piazza.com.

Find our class signup link at: https://piazza.com/uic/fall2021/cs484

## Grading Scale
| Grade| Range     |
| :--- | :---        |
|A     | 100% - 93.4%    |
|A-    | < 93.4% - 90.0% |
|B+    | < 90.0% - 86.7% |
|B     | < 86.7% - 83.4% |
|B-    | < 83.4% - 80.0% |
|C+    | < 80.0% - 76.7% |
|C     | < 76.7% - 73.4% |
|C-    | < 73.4% - 70.0% |
|D+    | < 70.0% - 66.7% |
|D     | < 66.7% - 63.4% |
|D-    | < 63.4% - 60.0% |
|F     | < 60.0% - 0.0%  |


## Grading Rationale

3 Assignments - (15pts each)  

4 Quizzes (20pts)  

1 Final Project (25pts)  

1 Final Exam (50pts)  

200pts Total  

## Course Schedule

| Week | Monday      | Wednesday   | Friday        |
| :--- | :----:      |    :----:   |          :----: |
|1     | **Aug. 23rd** <br /> **Topic:** Syllabus Review, Pre-Assessment, Survey   | **Aug. 25th** <br /> **Topic:**  Web App Overview (Web Architecture), Final Project Review <br /> **Reading:** [Understanding Web Arch.](https://medium.com/storyblocks-engineering/web-architecture-101-a3224e126947) | **Aug. 27th** <br /> **Topic:** Threat Modeling (Various Models, DFD's) <br /> **Reading:** [OWASP Threat Modeling Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)  |
|2     | **Aug. 30th** <br /> **Topic** Version Control - Git <br /> **Review:** [Videos 1 -3 in Git Lecture](https://instructorc.github.io/site/slides/webtools/git.html#/20)| **Sept. 1st** <br /> **Topic:** Version Control - GitHub <br /> **Review:** [Videos 4 -6 in Git Lecture](https://instructorc.github.io/site/slides/webtools/git.html#/20)    | **Sept. 3rd** <br />  Version Control - Resources <br /> **Release:** Assignment 1   |
|3     | **Sept. 6th** <br /> **No Lecture - Labor Day** <br />   | **Sept. 8th** <br /> HTML/CSS/JS Overview <br /> **Review:** [HTML Lecture Videos](https://instructorc.github.io/site/slides/webdev/html5.html#/22) <br /> [CSS Lecture Videos](https://instructorc.github.io/site/slides/webdev/css.html#/31)  | **Sept. 10th** <br /> **Topic:**  **Working Groups** <br />  **Due:** Quiz 1 (Weeks 1 - 2 Material) |
|4     | **Sept. 13th** <br /> HTML/CSS/JS Page Layout <br /> **Review:** [Page Layout](https://instructorc.github.io/site/slides/webdev/layout.html#/23)    | **Sept. 15th** <br />  **Topic:** HTML/CSS/JS Responsive Design <br /> **Review:** [Responsive Design](https://instructorc.github.io/site/slides/webdev/responsive.html#/24)  | **Sept. 17th** <br /> **Topic:** Client-side JS - CSP/XSS Attack Mitigation (Asynchronous Class - Pre-recorded Lecture) <br /> **Reading:** [XSS Attacks](https://owasp.org/www-community/attacks/xss/) <br />[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)   |
|5     | **Sept. 20th** <br /> **Topic:** Node.js Overview  | **Sept. 22nd** <br /> **Topic** Core Modules Http/Https, TLS/SSL  | **Sept. 24th** <br /> **Topic:** Understanding NPM <br /> **Due @ 11:59pm:** Assignment 1  |
|6     | **Sept. 27th** <br /> **Topic:** Routing, Express, HTTP Verbs  | **Sept. 29th** <br /> **Topic:** Authentication and Authorization  | **Oct. 1st** <br /> **Topic:** Sessions, Cookies and Tokens <br /> **Reading:** [Using HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) <br /> **Released:** Assignment 2 |
|7     | **Oct. 4th** <br /> **Topic:** App Testing - Unit Testing   | **Oct. 6th** <br /> **Topic:** CI, Automation   | **Oct. 8th** <br /> **Topic:** **Working Groups** <br /> Quiz 2 (3 - 7 Material) |
|8     | **Oct. 11th** <br /> **Topic:** Working with Data + Data Modeling (JSON, Tables)   | **Oct. 13th** <br /> **Topic:** RDMS/NoSQL, ERD Diagrams    | **Oct. 15th** <br /> **Topic:** SQL(DDL/DML) <br /> **Reading:** [DDos + Dos Attacks](https://www.cloudflare.com/learning/ddos/ddos-attack-tools/how-to-ddos/) <br /> **Due @ 11:59pm:** Assignment 2|
|9     | **Oct. 18th** <br /> **Topic:** Database Querying | **Oct. 20th** <br /> **Topic:** Node.js + SQLite     | **Oct. 22nd** <br /> **Topic:** Parameterized Queries, SQL Injection <br /> **Released:** Assignment 3  |
|10    | **Oct. 25th** <br /> **Topic:** Understanding RESTFul API | **Oct. 27th** <br /> **Topic:** RESTFul API Tools and Security  | **Oct. 29th** <br /> **Topic:** Http Headers   |
|11    | **Nov. 1st** <br /> **Topic:** Brief Overview of React | **Nov. 3rd** <br /> **Topic:** Review of React Cont.   | **Nov. 5th** <br /> **Working Groups** <br /> Quiz 3 (8 -10 Material)   |
|12    | **Nov. 8th** <br /> **Topic:** Understanding Docker  | **Nov. 10th** <br /> **Topic:** Dockerfile, Docker Images     | **Nov. 12th** <br /> **Topic:** Image Repository, Deploying Containers  <br /> **Due @ 11:59pm:** Assignment 3 |
|13    | **Nov. 15th** <br /> **Topic:** Understanding Kubernetes <br /> **Review:** [Kubernetes Essentials from Google Cloud](https://www.youtube.com/watch?v=_2fiMli8p3E&list=PLIivdWyY5sqLmnGdKSdQIXq2sd_1bWSnx)    | **Nov. 17th** <br /> **Topic:** Scaling and Cloud Vendors     | **Nov. 19th** <br /> **Topic:** CD, GitHub Actions <br /> **Released:** Final Project (Assignment 4)  |
|14    | **Nov. 22th** <br /> Usability and Performance | **Nov. 24th** <br /> **Working Teams** <br /> Quiz 4(11 -14)  | **Nov. 26th** <br /> **NO CLASS**    |
|15    | **Nov. 29th** <br /> OWASP, Bug Bounty Programs  | **Dec. 1st** <br /> Presentations     | **Dec. 3rd** <br />  Presentations <br /> **Due @ 11:59pm:** Final Project (Assignment 4)  |
|16    | **Dec. 6th** <br /> **NO CLASS**  | **Dec. 8th** <br /> **FINAL EXAM**   | **Dec. 10th** <br />  **NO CLASS**   |

## Formative Assessment

In-Class Lecture Activities, Assignments, Quizzes

## Summative Assessment

Final Project, Final Exam

## Late Work Policy

All assignments must be submitted by the due date and time listed on the assignment. If assignment is not turned in by the due date and time listed, the assignment will not receive points and will be assessed a zero for the assignment.

Students are permitted to continue work on assignments beyond the due date if a grade has not posted. Once a grade post for the assignment, no further progress on the assignment can be made.

## Academic Honesty

Cheating, plagiarism, and any other forms of academic dishonesty will not be tolerated

## COVID-19 

### Mask Mandate
Face Masks: Masks covering both the mouth and nose must be worn at all times by all students, faculty, and staff while on campus and inside any building regardless of vaccination status.  If you do not wear a mask, you will be asked to leave the classroom and will not be allowed back in class unless or until you wear a mask. If you have forgotten your mask, you may pick one up from one of the student information desks on campus during the first two weeks of campus. Students who do not comply with the mask-wearing policy will be reported to the Dean of Students. Eating and drinking are not allowed in classrooms.

### COVID Procedures
My expectation is what is given on the [FAQ Covid page](https://today.uic.edu/frequently-asked-questions), where the latest "Circle Back to Campus" newsletter is from.  My understanding is that we will all be vaccinated (or be tested regularly), meet masked and in person in our classroom, without extra physical distancing.  Of course this could all change!  Should there be the need to go back to online only, our plan is to have synchronous class online using Zoom. 
We will make every effort to have all classes recorded so those who need to can watch a class recording asynchronously if needed for Covid reasons.    Email me if you know you will need to attend class remotely because of Covid, and we can figure out a reasonable adjustment.  This does not apply to you if you simply miss class and watch the recording remotely some day(s), or miss lab for non-Covid reasons.
We have selected the streaming option for class recordings.  While I haven't tried this before, it is myunderstanding that you should be able to watch the class live, remotely, by selecting the option under the Echo360 link on the course Blackboard page (see link to Blackboard in the Navigation bar).


## Disability Services, Letters of Accommodation (LOA)
Refer as needed to the [UIC campus disability services policy](https://registrar.uic.edu/campus-policies/disability-notification/) which applies to students in this class. If you have special circumstances such as a letter of accommodation (LOA) from the UIC Disability office, then please indicate this to me directly via email along with a copy of your letter, and remind me before each exam of any accommodations needed.


## Disclaimer
This syllabus is subject to change at the instructor's discretion with prior student notification.
