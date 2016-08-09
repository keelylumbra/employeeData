
/* Created a new database just for this app so it doesn't interrupt others **jtc**
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPKDNOWQRrOosLLIA4CKPCp00pcxfEsR4",
    authDomain: "empdata-17990.firebaseapp.com",
    databaseURL: "https://empdata-17990.firebaseio.com",
    storageBucket: "empdata-17990.appspot.com",
};
firebase.initializeApp(config);
*/

var dataRef = firebase.database();


// Initial Values
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";


// Capture Button Click
$("#addUser").on("click", function() {

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Dont forget to provide initial data to your Firebase database.
    name = $('#employeeName').val().trim();
   role = $('#role').val().trim();
   startDate = $('#startDate').val().trim();
    monthlyRate = $('#monthlyRate').val().trim();


    // Code for the push
    dataRef.ref().push({
        name: name,
        role: role,
        startDate: startDate,
       monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    // Don't refresh the page!
    return false;
});

//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
});
 /*   // full list of items to the well

    $('#full-member-list').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" </span><span id='email'> "+childSnapshot.val().email+" </span><span id='age'> "+childSnapshot.val().age+" </span><span id='comment'> "+childSnapshot.val().comment+" </span></div>");


// Handle the errors
}, function(errorObject){
    //console.log("Errors handled: " + errorObject.code)
});

dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    // Change the HTML to reflect
    $("#namedisplay").html(snapshot.val().name);
    $("#emaildisplay").html(snapshot.val().email);
    $("#agedisplay").html(snapshot.val().age);
    $("#commentdisplay").html(snapshot.val().comment);
})
*/