var bio = {
    "name" : "Khalid Fahad Aljurashi",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "k.jurashi@gmail.com",
        "github" : "khalid1434",
        "LinkedIn": "Khalid Aljurashi",
       
        "location" : "Aqarabiyya, Khobar",
		 "mobile"   : "+966583298299"
    },
    "biopic": "images/New Doc 2017-09-29_2.jpg",
    "welcomeMessage": "Hi, I'm a web developer"
};


var objective = {
	
	"objective":[
		{
		"ob":"Eager to grasp more knowledge and skills in my field with a fine experience in teamwork, work ethic and overcome challenges. Looking forward to utilizing my qualifications in coding and designing in a creative and promised work environment."
		},
		]
};



var work = {
    "jobs": [
        {
            "employer": "► Saudi Aramco Internship ",
            "location": "Dhahran, Khobar",
            "dates": "Jul 2017 - Sep 2017",
			"url": "https://www.linkedin.com/in/khalid-aljurashi-685845138/detail/treasury/position:1217071128/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACGViYUBTrRxIInUKm_nre9z4ucegh3HpIo%2C1518780300778)&section=position%3A1217071128&treasuryCount=2",
            "description": "I was assigned to work at Field Application Support Unit under Support Business Application Department as System Analyst. There were two main systems I worked on which are AIS and VTMS for monitoring sea ports in Saudi Aramco business-related areas."
        },
    ]
};

var projects = {
	"projects": [
		{
			"title": "► Virtual Clinic Web Application (Graduation Project)",
			"dates": "May 2018",
			"description": "-An online platform that allows nurses to get the treatments for their patients out of doctors around Saudi Arabia remotely without physical presence of doctors in the clinic. <br><br> - HTML, JavaScript, jQuery and Firebase were used.",
			
		},
		
		{
			
			"title": "► Neighborhood Map Webpage",
			"dates": "Nov 2017 – Dec 2017",
			"description": "- Establishing Google Map by web page using API."
			
		},
		{
			
			"title": "► Web Optimization",
			"dates": "Dec 2017 – Jan 2018",
			"description": "- Minimizing the load on the website to get 60FPS."
		},
		{
			
			"title": "► Feed Reader",
			"dates": "Jan 2018 – Feb 2018",
			"description": "By using Jasmine Testing Suite to test all website functionalities."
		}
	
	]
	
	
};


var courses = {
	"courses": [
		{
			"title": "► Front-End Web Development Nanodegree",
			"dates": "Oct 2017 – Feb 2018",
			"url": "https://www.linkedin.com/in/khalid-aljurashi-685845138/detail/treasury/education:538442787/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACGViYUBTrRxIInUKm_nre9z4ucegh3HpIo%2C1529199757029)&section=education%3A538442787&treasuryCount=1"
			
		},
		
		{
			
			"title": "► CCNA Routing & Switching",
			"dates": "Sep 2016",
			"url": "https://drive.google.com/file/d/1mgqS4GEibEJB98iYVlAXdJ89qVBQQ9lB/view"
			
			
		},
		
		{
			"title": "► Ethical Hacking and Countermeasures Expert",
			"dates": "Sep 2016",
			"url": "https://drive.google.com/file/d/11s3WrK0AcI6LxBsLyabgCm-XGFC1lUFU/view"
			
		}
	
	]
	
	
};



var education = {
	
	schools: [
        {
            name: "► Imam Abdulrahman bin Faisal University",
            location: "Dammam City, Saudi Arabia",
            degree: "",
            majors: ["Bachelor of Science, Computer Science, GPA: 4.12/5"],
            dates: "Aug 2013 - May 2018", 
        }],
    /*"onlineCourses": [
        {
            "school": "Udacity",
            "title": "Frontend Web Development Nanodegree",
            "dates": "January 2018",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]*/
};




bio.display = function(){
		//var formattedName = HTMLheaderName.replace('%data%', bio.name);
		
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		//var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

		var formattedContactInfo = [];
			formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
			formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
			formattedContactInfo.push(HTMLCell.replace('%data%', bio.contacts.mobile));
            formattedContactInfo.push(HTMLlinkedin.replace('%data%',bio.contacts.LinkedIn));
			formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
			

			//$('#header').prepend(formattedRole);
			//$('#myname').prepend(formattedName);
			$('#shape1').append(formattedBioPic).css("padding-left","950px");
			
			//$('#header').append(formattedWelcomeMsg);

				for (var i = 0; i < formattedContactInfo.length; i++) {
    			$('#topContacts').append(formattedContactInfo[i]);
    			$('#footerContacts').append(formattedContactInfo[i]);
}

			if (bio.skills.length > 0) {
    		$('#header').append(HTMLskillsStart);

    			for (var j = 0; j < bio.skills.length; j++) {
        		var formattedSkills = HTMLskills.replace('%data%', bio.skills[j]);
        		$('#skills').append(formattedSkills);
    }
}};

education.display = function() {
	
	  
        $('#education').append(HTMLschoolStart);
        this.schools.forEach(function(school) {
            var formatedSchool = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
            $('.education-entry').append(formatedSchool);
            $('.education-entry').append(HTMLschoolDates.replace("%data%", school.dates));
            $('.education-entry').append(HTMLschoolLocation.replace("%data%", school.location));
            school.majors.forEach(function(major) {
                $('.education-entry').append(HTMLschoolMajor.replace("%data%", major));
            });
        });
	
        /*$('.education-entry').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            var formatedSchool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
            $('.education-entry').append(formatedSchool);
            $('.education-entry').append(HTMLonlineDates.replace("%data%", course.dates));
            $('.education-entry').append(HTMLonlineURL.replace("%data%", course.url));
        });*/
    };



projects.display = function() {
    if (projects.projects.length > 0) {
        $('#projects').append(HTMLprojectStart);


      
		for (var i=0; i< projects.projects.length; i++){
            var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace("#", projects.projects[i]);
            var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);


            $('.project-entry:last').append(formattedProjTitle);
            $('.project-entry:last').append(formattedProjDates);
            $('.project-entry:last').append(formattedProjDescription);
			
		
			
//			for(var j=0; j < projects.projects[i].images.length; j++)
//     
//		  {
//          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
//
//          $('.project-entry:last').append(formattedImage);
//        }
    }
}};


courses.display = function() {
    if (courses.courses.length > 0) {
        $('#courses').append(HTMLcourseStart);


      
		for (var i=0; i< courses.courses.length; i++){
            var formattedcourTitle = HTMLcourseTitle.replace('%data%', courses.courses[i].title).replace("#", courses.courses[i].url);
            var formattedcourDates = HTMLcourseDates.replace('%data%', courses.courses[i].dates);
		
            


            $('.course-entry:last').append(formattedcourTitle);
            $('.course-entry:last').append(formattedcourDates);
        
			
			
		
			
//			for(var j=0; j < projects.projects[i].images.length; j++)
//     
//		  {
//          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
//
//          $('.project-entry:last').append(formattedImage);
//        }
    }
}};


work.display = function() {
    if (work.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);

        for (var i=0; i < work.jobs.length; i++ ) {
			var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i]);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace("#",work.jobs[i].url);
            var formattedEmployerTitle = formattedEmployer;
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            var formattedWorkDate = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkDate);
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
};



	

//$('#mapDiv').append(googleMap);
education.display();
work.display();
projects.display();
courses.display();
bio.display();

