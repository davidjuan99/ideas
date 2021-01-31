<!DOCTYPE html>
<html>
<head>
	<title>Prueba</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="{{asset('css/styles.css')}}">
	<meta name="csrf-token" id="token" content="{{ csrf_token() }}">
	<script src="js/ajax.js"></script>
</head>
<body>
<div class="form">
  	<form method="post" onsubmit="crear(); return false">
  	@csrf
    <input type="text" id="title" name="title" placeholder="Title">

    <input type="text" id="description" name="description" placeholder="Crear la nota...">

    <input type="submit" name="Crear" value="Crear">
  	</form>
	<div id='mensaje'></div>
</div>


<div id="tblnotas" class="tblnotas"></div>




</body>
</html>