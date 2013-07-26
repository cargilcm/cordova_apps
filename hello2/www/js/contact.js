function setupContact {
	var myContact = navigator.contacts.create({"displayName": "Test User"});
	myContact.note = "This contact has a note.";
	console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
	navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
	navigator.notification.alert('message', false, 'AlertTitle', false);
	showAlert(myContact);
};

function showAlert(msg) {
		var message='You are the winner!';
		if(msg==false)
				msg=message;
		navigator.notification.alert(
			msg,  // message
			false,         // callback
			'Game Over',            // title
			'Done'                  // buttonName
		);
	}
