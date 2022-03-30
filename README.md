# masterTable

## REST APIs

### ADD a course.
http://localhost:3000/course/add This api is used to create a course. It takes some details about the course like name, description, coaches in body of the request.
It returns a JSON object of the course added.

![Screenshot (41)](https://user-images.githubusercontent.com/57585655/160767916-2d803910-61fe-4efc-9c12-cd2d33ef0a29.png)

### Update details of the course.
http://localhost:3000/course/update?course=coursename This api is used to update details of a course. It takes the to be updated parameters in body of the request and returns the JSON object of the updated course.

![Screenshot (42)](https://user-images.githubusercontent.com/57585655/160768139-dc1d3ace-6207-4a79-848e-ddfca46db0a0.png)

### GET a course by name.
http://localhost:3000/course?course=coursename This api is used to return a json object of the course specified in the query.

![Screenshot (44)](https://user-images.githubusercontent.com/57585655/160768910-6df91d41-946d-4508-b30f-1d82fe63c6a9.png)

### GET all courses.
http://localhost:3000/course This api is used to return a JSON object containing all the courses and their details.

![Screenshot (43)](https://user-images.githubusercontent.com/57585655/160768685-2f5bde3f-b35b-40cf-80f9-7a756a2c6d31.png)

### ADD a session for a course.
http://localhost:3000/schedule/add this api is used to create a session for a course. It takes a json object containing details like course, title, agenda, link, start_time, end_time of the course in the body of the request.

![Screenshot (47)](https://user-images.githubusercontent.com/57585655/160769745-02be2b02-f9b4-44bc-8d97-8a1fa6538fd2.png)

### Update details of the session
http://localhost:3000/schedule/update?course=courseName&start_time=startTime this api is used to update the details of a session scheduled for a course.It takes a json object containing the updatedd details of the session in the body of the reques.

![Screenshot (46)](https://user-images.githubusercontent.com/57585655/160769463-f6fdf2e1-c142-4d79-a4fc-06e4922cb31e.png)

### GET all sessions for a course (Paginated API)
http://localhost:3000/schedule?course=courseName&page=Page&limit=Limit this api returns the sessions scheduled for a course in a paginated format.

![Screenshot (45)](https://user-images.githubusercontent.com/57585655/160769226-7fa687ec-c16b-452e-a2b7-4c18874b5ee4.png)

### Delete a session for a course
http://localhost:3000/schedule/delete?course=courseName&start_time=startTime this api is used to delete a session scheduled for a course.

![Screenshot (48)](https://user-images.githubusercontent.com/57585655/160770011-88c48329-0466-4282-ac13-59715493c6e2.png)
