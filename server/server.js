// Note that collections must be defined in both
// server and client .js files or nothing will
// happen when you query the DB.
Courses = new Meteor.Collection("courses");
//Meteor.subscribe("Courses");

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup

        /*// Browse
        Template.browse.helpers ({
            listAllCourses: function () {
                console.log(Courses.find().toString());
                return Courses.find();
            }
        });

        // Courses
        Template.teach.helpers ({
            courseList: function () {
                return Courses.find().fetch().map(function(it){ return it.name; });
            }
        });*/
    });

    //Courses.insert({name:"ChromeCourse"});
}
