Courses = new Meteor.Collection("courses");
Meteor.subscribe("Courses");

if (Meteor.isClient) {

    Template.browse.helpers ({
        listAll: function () {
            console.log(Courses.find().count());
            return Courses.find();
        }
    });
}
