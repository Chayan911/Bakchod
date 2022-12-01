<!-- 20)	Write a PHP program to list all the cookies stored on the press of a button.
 -->

<?php
$cookie=$_COOKIE;
foreach ($cookie as $key=>$val)
echo "<br>$key : $val";
?>