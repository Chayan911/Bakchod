<!-- 20)	Write a PHP program to list all the cookies stored on the press of a button. -->

<html>
<head>
<title> Choose List Cookies </title>
</head>
<body>
<form action="Displaycookie.php" method="POST"/>
<input type="submit" name="submit" value="List Cookies"/>
</form>
<?php
setcookie("Name","Madhu");
setCookie("Age","29");
setCookie("Address","Delhi");
?>
</body>
</html>