var hardCodedArray = ['Swiggy coupon for dec', 'Free book my show tickets',
    'Update paytm wallet', 'Wooh!!!Tinder match', 'Update 42 android apps', 'PLease charge your phone',
    'Register for 22K marathon', 'Myntra winter sale', 'Dominos BOGO',
    'Chrome Update', 'Pocket tank crashed again', 'android updated'];
var notifications = [];
var badge = 0;
var randomNumber = 0;
var callToNotification;
var ongoingCall = false;

function getNotification() {
    return hardCodedArray[(randomNumber++) % (hardCodedArray.length + 1)];
}
function updateBadge() {
    callToNotification = setInterval(function () {
        ongoingCall = true;
        var message = getNotification();
        notifications.push(message);
        badge++;
        $('#myBadge').empty();
        $('#myBadge').append(badge);
        console.log("badge: " + badge);
        console.log("array: " + notifications[notifications.length - 1]);
    }, 2000);

}
updateBadge();


function myFunction() {
    badge = 0;
    if (ongoingCall) {
        clearInterval(callToNotification);
        ongoingCall = false;
        $('#myDropdown').empty();
        for (var i = 0; i < notifications.length; i++) {
            $('#myDropdown').append("<a>" + notifications[i] + "</a>");
            $('#myBadge').empty();
            $('#myBadge').append(badge);
        }
    }

    else {
        $('#myDropdown').empty();
        updateBadge();
        ongoingCall = true;
    }
    notifications = [];
    $('#myDropdown').toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        if (!ongoingCall) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
            badge = 0;
            notifications = [];

            $('#myBadge').empty();
            $('#myBadge').append(badge);
            $('#myDropdown').empty();
            $('#myDropdown').toggle("show");


            updateBadge();
            ongoingCall = true;

        }

    }
};


