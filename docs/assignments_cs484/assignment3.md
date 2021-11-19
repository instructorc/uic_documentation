---
sidebar_position: 3
---

# Assignment 3

## Due Nov. 12th prior to 11:59pm.

For assignment 3, you will use the same repository from assignment 2. Assignment 3 will consist of implementing your database using SQLite, adding REST/RESTFul Api and implementing your front-end charting, table or map that can be manipulated.  The application will need to implement each of the first 4 requirements. Requirement 5 provides instructions on how you will document, submit your application.

*REMINDER:  Your final project must utilize the following technologies.
 - Node.js (Server-side language), SQLite (Database), Jest Testing Framework, passport.js(Authentication)


## Requirement 1 (ER Diagram of Database)

- Within the readme file, include a picture of your ERD diagram.  Your ERD diagram must contain a minimum of 2 entities.  Your diagram should depict the following items below.
    - Cardinality
    - Attributes *Indication of NULL or NOT-NULL
    - Tables contains proper key allocation
    - Strength of Entity
    - Strength of Relationship

Example below:

![Assignment Page Layout](https://instructorc.github.io/uic_course_app/img/assign3_assignment_view.PNG)

- The ER diagram represented in your Readme file should represent the database schema implemented within your application.  If you make changes to your database, make sure those changes are reflected in your ER Diagram.

## Requirement 2 (Implementation of SQLite Database)
- Proper configuration of database 
    - Create, Retrieve, Delete and Update Operations (CRUD Operations) on one ore more of your tables.
    - Session store is properly configured and session is reflected and stored in database.
- A minimum of 4 SQL statements that perform CRUD operations
    - SQL prepared statments/parameterized queries
    - Database contains hashed passwords for authenticated users

## Requirement 3 (RESTFul API ):
- Establish a RESTFul API connection from a reliable source.  Select a reliable data source that provides multiple records/tuples to visually depict in chart, table, map, etc..
- Chosen API provides a suitable amount of request request per day (1000+ preferred)


## Requirement 4 (Front-end Data Manipulation using table, chart, map, etc..):
 - You will need to implement a charting library, sortable table or map that provides meaningful insight to the data you are displaying.
 - Within your Repository readme file, you will need to document the charting library and provide a description of how the data provides meaningful information to end-users.


## Requirement 5 (Submission and Publishing your project):

Your project should be submitted via the GitHub Repository issued by the instructor.  You will need to submit the assignment by the due date and and time listed above.  It is permissible to continue progress on the assignment after the due date and time listed if and only if a score has not been entered. The repository for your assignment should include all the necessary files for rendering your assignment. 

You will also need to submit a compressed folder of your project to GradeScope.  Make sure to delete the node_modules folder in your respective directories prior to compressing and submitting to GradeScope.

### GitHub Repository Invitation Link - Same as Assignment 2


## Rubric
| Rubric item  | 15 Total Points |Full Credit (3)|Partial Credit (1.5)|No Credit (0) |
| ------------- | ------------- |------------- |------------- |------------- |
| Requirement 1 (ER Diagram of Database) | 3 Points  | - ReadMe Files has picture of ER diagram.  <br /> - 2 or more Entities, Attributes, Relationships, Cardinality and Null and not Null depicted in diagram <br /> - SQLite Database file reflects the tables identified in ER Diagram  |   <br /> - ER Diagram found, but missing either attributes, relationship, cardinality or null/not_null attributes  <br /> - SQLite Database file reflects some of the tables identified in ER Diagram,  | Requirement not met - Missing ER Diagram and SQLite database |
| Requirement 2 (Implementation of SQLite Database)  | 3 Points  | - Database operations include Create, Retrieve, Delete and Update Operations (CRUD Operations) on one or more of tables. Minimum of 4 CRUD Operations <br /> -  All SQL statements are prepared statements/parameterized queries <br /> - Database have users represented and passwords are hashed for authenticated users | - Missing some of the CRUD Operations. <br /> - SQL Statements are not parameterized queries or prepared statements <br /> - User passwords are not hashed  |Requirement not met - Missing CRUD Operations, Missing prepared statements/parameterized queries, database passwords not hashed |
| Requirement 3 (RESTFul API )  | 3 Points  | - Successfully established a REST/RESTFul API connection from a reliable source - Data successfully retrieved from API and depicted in client | - REST/RESTFul API identified, but data not represented in client | Requirement not met |
| Requirement 4 (Front-end Data Manipulation using table, chart, map, etc..)  | 3 Points | - Either a charting library, sortable table or map that provides meaningful insight to the data you are displaying is represented in your site utilizing the data retrieved from API. *Native/User-defined tables are permissible <br /> - Readme file, documents charting library or third-party library used to depict data.  ReadMe file contains a description of how the data provides meaningful information to end-users | - Charting library, sortable table or map implemented, but displays static data and not dynamic data retrieved from API. <br /> - Description in ReadMe file lacks clarity on how data provides meaningful insight, data is not representative and incoherent of site topic |Requirement not met |
 Requirement 5 (Submission and publishing)  | 3 Points | - Branch identify as production/main branch contains project <br /> - Compressed folder of project uploaded to GradeScrope | -Missing submission to GradeScope or project missing from repository branch   |Requirement not met |

