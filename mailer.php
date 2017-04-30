<?php
//die();
    // Only process POST reqeusts.
    /*if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$fname = $_POST["cm-f-bejdi"];
		$lname = $_POST["cm-f-bejdd"];
		$postcode = $_POST["cm-f-bejdt"];
		$email = $_POST["cm-xujdrh-xujdrh"];
		$to = 'akash.bhatia1184@gmail.com';

        $subject = 'gf alt';

        $email_content = "Hi,\n\n has sent you this email from $email";

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers = "From: Finfeed <admin@finfeed.com>";

        if (mail($to, $subject, $email_content, $headers)) {
            http_response_code(200);
        } else {
            http_response_code(501);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }*/
http_response_code(200);
?>