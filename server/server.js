// Note that collections must be defined in both
// server and client .js files or nothing will
// happen when you query the DB.
Courses = new Meteor.Collection("courses");

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
/*        Template.browse.helpers({
            listAll: function () {
                console.log(Courses.find().count());
                return Courses.find();
            }
        });*/
    });
}
