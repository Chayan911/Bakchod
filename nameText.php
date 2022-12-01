
	<?php

    $myfile = fopen("note.txt", "w");
    $txt = "Yash Bavishi";
    fwrite($myfile, $txt);
    fclose($myfile);
    
    
    ?>
    
    