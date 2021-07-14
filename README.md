# Avalon

Avalon is a MERN framework, which serves the primary purpose to be **PLUG and PLAY**. Following some simple steps will get you up and running in no time, and will save a lot of time for you to start writing a framework from the scratch. 

In Avalon, react app is served through the Node application and is build using a command so you essentially do not have to worry about the optimization and cleaning of code that has to be done for the production deployment as that is already been taken care of by webpack. 

## **Get Started** 

### LOCAL DEVELOPMENT - Running FrontEnd and BackEnd application separately.

1) Run the command `npm install` on folder `root`, `backend` and `frontend`.
2) open two separate terminal or command prompt window - one in frontend and one in backend folder.
4) run `npm start` in both.
5) Front-End Application will be running on port `4009` and backend will be running on `3001`.

**NOTE** - Node application is set to work on port 3001 although that can be changed in `.env.prod` file (please be advised in local if you are chaning the node application port you will also have to change the `proxy` property in `frontend/package.json` as that will redirect all the API calls to backend on the port mentioned in proxy url). You can also change the front end port by changing the `PORT` property in `.env.prod` file.

### LOCAL DEVELOPMENT - Running FrontEnd and Backend Application Together as one.

1) Run the command `npm install` on folder `root`, `backend` and `frontend`.
2) In the root folder of application open a terminal or command prompt. 
3) Run Command - `npm run build:prod`
4) once it is completed, go to `/backend` folder in terminal and run `npm start`
5) your application will be hosted on `localhost:3001`

**NOTE** - `localhost:3001` is the homepage of application will serve your react application too. 

### **Setting Up Mongo** (Optional)

1) Install the latest distribution of Mongo in your system. 
2) If you are on windows create a folder in your c: drive root named `data` and inside that create another folder named as `bin`
3) go to your `C:\Program Files\MongoDB\Server\4.4\bin` and open terminal or command prompt and run `mongod`.
4) you will have your mongoServer up and running on port 27017.

**NOTE** - All the mongo related configurations are there in `\backend\Mongo`. 

## Deployment on AWS

### Deploying Mongo Server

1) Go to AWS Console and create a new EC2 linux instance by clicking Launch Instance. 
2) Make sure you whitelist the custom HTTP Connection to port 27017 in security groups while creating the machine.
3) Download the private key Pair and launch the instance. 

**Making SSH connection with EC2 Machine**
1) Install the Putty and Putty gen on your local machine 
2) open putty gen and click on `load` select the downloaded `.pem` file and click generate(your browse might be defaulted to `.ppk` files make sure you change that to All Files to see your `.pem` file). 
3) save the private key(.ppk) and close the keygen. 
4) open Putty and in the Host name write `ec2-user@<Public IP Address of your ec2 instance>`
5) then go to `SSH` in the putty category on left open it and click on `Auth`
6) Under Authentication Parameters browse the private key file for authentication and select the ppk file that was recently generated.
7) go back to session from the category on left and click `Open`
8) You will be connected to the ec2 machine. 

**Installing mongo on the ec2 Machine** 
1) Run `sudo vi /etc/yum.repos.d/mongodb-org-4.2.repo`
2) add following code to it : 
  ```
   [mongodb-org-4.2]
   name=MongoDB Repository
   baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.2/x86_64/
   gpgcheck=1
   enabled=1
   gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
  ```
3) Save the file and run `sudo yum install -y mongodb-org`
4) After installation is finished open `sudo vi /etc/mongod.conf` file.
5) Change the bindIp to the 0.0.0.0 to accept the connection from everywhere ( this is to test the connection, later change that to IP of node appliation ec2 instance)
6) Save file and Run `sudo chkconfig mongod on`
7) Run `sudo service mongod start` to start the mongo server
8) You can restart the servive with command : `sudo service mongod restart`
9) You can check the Mongo running status by runnng command `mongo` and then `show databases`. write `exit` to exit the mongo console.







