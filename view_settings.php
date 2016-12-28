  <?php
  ?>
<!DOCTYPE html>
<html>
<head>
	<title>View Your Settings</title>
	<style type="text/css">
		body{
			<?php
			//检查font_size的值
             if (isset($_COOKIE['font_size'])) {
             	print "\t\t font-size: #".htmlentities($_COOKIE['font_size']).";\n";
             }
             else{
             	print "\t\t font-size:medium";
             }
             //检查font_color的值
             if (isset($_COOKIE['font_color'])) {
             	print "\t\t color: #".htmlentities($_COOKIE['font_color']).";\n";
             }
             else{
             	print "\t\t color:#000";
             }
			?>
		}
	</style>
</head>
<body>
 <p><a href="customize.php">Customize Your Settings!</a></p>
 <p><a href="reset.php">Reset Your Settings</a></p>
  <p>yadadda yadadda yadadda yadadda yadadda yadadda yadadda
     yadadda yadadda yadadda yadadda yadadda yadadda yadadda
   </p>
</body>
</html>