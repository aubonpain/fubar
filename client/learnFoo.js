Courses = new Meteor.Collection("courses");
Meteor.subscribe("Courses");

if (Meteor.isClient) {

    // Browse
    Template.browse.helpers ({
        listAllCourses: function () {
            // console.log(Courses.find().toString());
            return Courses.find();
        }
    });

    // Teach
    Template.teach.helpers({
        courseList: function() {
            return Courses.find().fetch().map(function(it){ return it.name; });
        }
    });

    Template.teach.rendered = function() {
        Meteor.typeahead.inject();
    };
}
