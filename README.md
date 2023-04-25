# * README UNDER CONSTRUCTION *

# Healio - A space for healing.

## Overview

Healio was created to be a means of connecting the valuable healer-type and the curious visitor-type of human. The visitor-type would visit this page and then engage with it, finding healing services and the healers that offer them in their local area. It should be a place for connection.

Healio uses a ReactJS client and a Rails API server to run. It incorporates packages from Material UI, Leaflet, Nominatim, and more.

Eventually, Healio will be launched regionally and then expand to meet a larger market. Accesibility is key. All visitors coming to healio can see a large list of the healers and services offered nearby.

## Installation Instructions

After cloning this repository, you will need to install the frontend dependencies and the backend gems. 
Open this project folder in your text editor and in your terminal, navigate to the root folder for Healio.

In the terminal, run the following:
`bundle install`

then,
`rails db:seed`

then,
`npm install --prefix client`

then,
`rails s`

finally,
`npm start --prefix client`

These commands download and install the necessary dependencies, then start up the React and Rails servers. You should see localhost:4000 pop up with the Auth page of Healio showing, prompting you to enter your login info. 

## Usage Instructions

A basic overview is as follows:

1. The app is set up so that you can find both registered healers and the services they may offer.
2. The two menu bars up in the top two corners house all of the page options you have to choose from.
3. If a user is signed up as a 'healer' and visits a service page, they can add that service to their offered services by clicking the plus sign in the upper left hand corner of that page. The healer can also edit the service page by clicking the edit icon in the upper right corner.
4. A healer is encouraged to fill out all the information they can by editing their healer profile, this way they are visible to visitors. 
5. If a user is signed up as a 'visitor' and visits a service page, they can add that service to their favorited services by clicking the empty heart icon in the upper left hand corner of that page. The healer or visitor can also leave comments and delete those comments that belong to them.
6. The map plots markers for each healer who has updated their healer info and added their address. These markers can be clicked on to route to that healers' healer page. 
7. Have fun and click around.

## Screenshots and Demo

**Video Demo:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/Su6p3yyp7MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Welcome page:**
![Screen Shot 2023-04-25 at 12 09 59 PM](https://user-images.githubusercontent.com/93106753/234338222-39c02681-ba00-4574-b097-9108bf682a80.png)

**Service page example:**
![Screen Shot 2023-04-25 at 12 13 29 PM](https://user-images.githubusercontent.com/93106753/234338922-b5b63cc7-7cf9-4ddf-9636-acdbc160b013.png)

**Healer page example:**
![Screen Shot 2023-04-25 at 12 15 45 PM](https://user-images.githubusercontent.com/93106753/234339281-57932373-4ea9-4ca7-b892-33731c81f572.png)

**Service-Healer selection:**
![Screen Shot 2023-04-25 at 12 26 55 PM](https://user-images.githubusercontent.com/93106753/234342053-8ad707e3-853c-41ef-9013-2ae82b4cd7ca.png)

**Account Details Page:**
![Screen Shot 2023-04-25 at 12 32 26 PM](https://user-images.githubusercontent.com/93106753/234343318-ea7e22d4-641e-4e6f-8cbc-58540b442620.png)

## Contribution Guidelines

In order to meet the needs of visitors, there are some extra goals which we would like to meet before sending Healio off for public deployment.
If you would like to make a contribution to this project, please contact Jared at `jaredsuryaATgmailDOTcom`. Please report bugs and submit pull requests.
Include "Healio" in the subject line.

## License

Copyright (c) 2023, Jared Dietz
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
   must display the following acknowledgement:
   This product includes software developed by the <organization>.
4. Neither the name of the <organization> nor the
   names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE 
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Contact Information

Reach out by email, jaredsuryaATgmailDOTcom
