# QuietZone: Sonic Library Sensor System 
#### The Ultimate Library Discipline Solution


### Overview

We have developed a sound sensing device that produces three distinct outputs based on the decibel levels around each table in a library. This device is integrated with software, allowing the library manager to analyze and control the library in real-time. The device is connected to a network, which sends information to the backend and displays it dynamically on the front end. The result is an efficient and accurate integration of hardware and software.

### Problem with the Current System

As students, we often go to the library to have peaceful and productive study or work sessions. However, there is often still a problem with disturbance, and the librarian must manually go from table to table to maintain discipline, which is inefficient and time-consuming. To address this problem, we have developed a simple, one-stop solution for managing the library with our device and software.

### Solution

Our device consists of a decibel sensor encoded in an Arduino. It will be installed at each table and controlled unisystematically. If the decibel level at a table increases, our device will alert the people at the table visually, without disturbing them, and also notify the librarian through our developed software. This will help solve the issue of discipline in libraries, save time for the librarian, and enable the efficient use of the library for all users.

### Objectives

- Maintain discipline in the library
- Automate the issues faced in the library
- Track each table in the library
- Reduce the workload of the librarian
- Enable the efficient use of the library for all users
- Enhance a motivating study-work environment for everyone
- Make simple yet efficient use of hardware with low cost requirements


### Website 

#### Front End
- JavaScript framework: React.js
- Style sheet language: CSS (Cascading Style Sheets)

#### Back End
- JavaScript library: Express.js
- Cloud service: Google Cloud Platform's App Engine

The front end of the website was built using React.js and CSS, while the back end was developed using Express.js. The back end handles authentication and processes raw data from the Arduino, which is then sent to the front end to update the view. The project also uses Google Cloud Platform's App Engine as a cloud service.

Deployed using Gcloud: http://sonic-library.el.r.appspot.com/SonicLibrarySystem/                                                                                                   

## Screenshots


![Sonic Library System 01](https://user-images.githubusercontent.com/65449934/211350364-f1a7ff8e-10fc-4881-aef5-a3980daf6dce.png)


![Sonic Library System 02](https://user-images.githubusercontent.com/65449934/211350930-2065a835-4cf6-4522-9baa-3ab9dcbff4e2.png)

### Features
- Real-time monitoring: The website allows the library manager to view decibel levels at each table in real-time, allowing them to quickly identify and address any disruptions.
- Historical data analysis: The website provides a range of tools for analyzing decibel data over time, including graphs, charts, and other visualizations. This allows the library manager to identify trends and patterns, and make informed decisions on how to optimize the library environment.
- Alert notifications: The website can send notifications to the library manager when the decibel level at a table exceeds a certain threshold, alerting them to any disruptions that need to be addressed.


### One-Pager
[Document](https://docs.google.com/document/d/1v4ROqQ7UeUuHVVo-I8CKSAvSDu6iLb_uDSKcC_l0j2U/edit?usp=sharing)


### How to Deploy On Google Cloud?

First step, you have to enable App Engine Admin API in your Project. After enabling the API go to Cloud Shell and write the Command:
 ```
 gcloud app create
 
 ```

Second step,open the Text Editor and create a new directory www and add the project folders and files in it.In the root directory create a file deploy.yaml add the following code in it:
```
runtime: python27                             
api_version: 1                                  
threadsafe: true                      

handlers:                      
\- url: /                      
  static_files: www/index.html                              
  upload: www/index.html                               
   
\- url: /(.*)                       
  static_files: www/\1
  upload: www/(.*)
  
 ```
Third step,run the following commands:

```
gcloud app deploy deploy.yaml                              

gcloud app browse

```                              
(Remember to run this commands in the root directory)



<div align="center">
<h3>Connect With us on</h3>
<a href="https://twitter.com/gdscvitap" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a> 
<a href="https://www.linkedin.com/company/dscvitap/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://instagram.com/gdscvitap" target="_blank"><img alt="Instagram" src="https://img.shields.io/badge/instagram-%FF69B4.svg?&style=for-the-badge&logo=instagram&logoColor=white&color=cd486b" /></a>
</div>

----

GDSC VIT-AP projects adopt the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html). For more information see the [Code of Conduct FAQ](https://www.contributor-covenant.org/faq).

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)
