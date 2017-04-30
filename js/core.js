// JavaScript Document
"use strict";

$(document).ready(function() {
	$('.register-form-slide').click(function() {
		$('.content').slideToggle('fast');
		$('.register-form').slideToggle('fast');
		
		return false;
	});
	
	$(function() {
		// Set up an event listener for the contact form.
		$('#subForm').submit(function(event) {
		    // Stop the browser from submitting the form.
		    event.preventDefault();
			// Serialize the form data.
			var formData = $('#subForm').serialize();

			$.getJSON(
				"https://cannatrek.createsend.com/t/d/s/xujdyy/",
				$(this).serialize(),
				function (data) {
					if (data.Status === 400) {
						$('#subFrom').fadeOut('fast');
						$('#form-message').text('Your Message was not sent!');
						$('#form-message').fadeIn('fast');
					} else { // 200
						$('#subFrom').fadeOut('fast');
						$('#form-message').text('Your Message was sent successfully!');
						$('#form-message').fadeIn('fast');
					}
				}
			);
			
			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $('#subForm').attr('action'),
				data: formData
			})
			.done(function() {
					$('#subForm').hide();
					$('#form-message').html('<h2>Thank you for your registration.</h2><p>We will keep you posted and contact you shortly.</p>');
					$('#form-message').fadeIn('fast');
					setTimeout(function() {
						$('.content').slideToggle('fast');
						$('.register-form').slideToggle('fast');
					}, 3000);
			})
			.fail(function(data) {
				// Set the message text.
				if (data.responseText !== '') {
					$('#form-message').text(data.responseText);
				} else {
					$('#form-message').text('Oops! An error occured and your message could not be sent.');
				}
			});
		});
	});
});