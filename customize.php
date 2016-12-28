 <?php
  //如果表单被创建，则处理它
	
   if (isset($_POST['font_size'])&&isset($_POST['font_color'])) {
   	//发送cookie

   setcookie('font_size',$_POST['font_size']);
   setcookie('font_color',$_POST['font_color']);
   //打印一条消息
   $msg='<p>Your settings have been entered,Click <a href="view_settings.php">here</a>to see them in action.</p>';
 
   }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Customize Your Settings!</title>
</head>
<body>


<?php
  if (isset($msg)) {
  	print($msg);
  }
?>
<p>Use this from to set your preferences:</p>
<form action="customize.php" method="post">
	<select name="font_size">
		<option value="">FOnt Size</option>
		<option value="xx-small">xx-smalll</option>
	</select>
	<select name="font_color">
		<option value="">Font Color</option>
	    <option value="00f">Gray</option>
	</select>
	<input type="submit" name="sub" value="Set My preferences">
	<?php
     echo "sd"."<br>"."we all have a try!";
	?>
</form>
</body>
</html>
