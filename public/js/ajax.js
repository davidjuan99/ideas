window.onload = function() {
    modal = document.getElementById('addImage');
    read();
}

function objetoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function read() {
    var ajax = new objetoAjax;
    var section = document.getElementById('tblnotas');
    var token = document.getElementById('token').getAttribute('content');
    ajax.open('GET', 'home', true);
    var datasend = new FormData();
    datasend.append('_token', token);
    ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var respuesta = JSON.parse(ajax.responseText);
        var tabla = '';
        tabla += '<table>';
        tabla += '<tr>';
        tabla += '<th>Titulo</th>';
        tabla += '<th>Description</th>';
        tabla += '<th>Operaciones</th>';
        tabla += '</tr>';
        for (let i = 0; i < respuesta.length; i++) {
            tabla += '<tr>';
            tabla += '<td>'+respuesta[i].title+'</td>';
            tabla += '<td>'+respuesta[i].description+'</td>';
            // tabla += '<form method="post" onsubmit="borrar('+respuesta[i].id+')">';
            tabla += '<td>'+'<button type="submit" onclick="borrar('+respuesta[i].id+')">Borrar</button>'+'</td>';
            // tabla += '</form>';
            tabla += '</tr>';
        }
        tabla += '</table>';
        section.innerHTML = tabla;
    }
    }
    ajax.send(datasend);

}

function crear(){
    var mensaje = document.getElementById('mensaje');
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var ajax = new objetoAjax();
    var token = document.getElementById('token').getAttribute('content');
    ajax.open('POST', 'crearNota', true);
    var datos = new FormData();
    datos.append('_token', token);
    datos.append('title', title);
    datos.append('description', description);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            // var tabla = '';
            // mensaje.innerHTML = 'Pokemon '+num+' agregado a favorito';
            if (respuesta.resultado == 'OK') {
                mensaje.innerHTML = "Usuario añadido"
            } else {
                mensaje.innerHTML = 'Ha ocurrido un error.' + respuesta.resultado;
            }
            read();
        }
    }
    ajax.send(datos);
}

function borrar(id){
    var mensaje = document.getElementById('mensaje');
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var ajax = new objetoAjax();
    var token = document.getElementById('token').getAttribute('content');
    ajax.open('POST', 'eliminar', true);
    var datos = new FormData();
    datos.append('_token', token);
    datos.append('id', id);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            // var tabla = '';
            // mensaje.innerHTML = 'Pokemon '+num+' agregado a favorito';
            if (respuesta.resultado == 'OK') {
                mensaje.innerHTML = "Usuario borrado"
            } else {
                mensaje.innerHTML = 'Ha ocurrido un error.' + respuesta.resultado;
            }
            read();
        }
    }
    ajax.send(datos);
}

// <!-- @foreach ($notas as $nota)
// 	<tr>
// 		<td>{{$nota->title}}</td>
// 		<td>{{$nota->description}}</td>
// 		<td>
//             <a href="#" id="{{$nota->id}}">Actualizar</a>
//         </td>
//         <td>    
//             <form method="post" action="{{url('/eliminar/'.$nota->id)}}">
//                 {{csrf_field()}}
//                 {{method_field('DELETE')}}
//                 <button type='submit' onclick="return confirm('¿Borrar?');">Borrar</button>
//             </form>
// 		</td>
// 	</tr>
// 	@endforeach
// 	@foreach ($notas as $nota)
// 	<div id="modal{{$nota->id}}" class="modal">
// 	<div class="modal-content">
//     	<span class="close" id="cerrar{{$nota->id}}">&times;</span>
//     	<form method="post" action="{{url('/modificar/'.$nota->id)}}">
//     		@csrf
//             {{method_field('PUT')}}
            
//             <input type="text"  name="title" value="{{$nota->title}}" required>
// 			      <input type="text"  name="description" value="{{$nota->description}}" required>

//             <input type='submit' id="actuali" value="Actualizar">
//         </form>
//   	</div>
//   </div>
//  @endforeach -->
// 	</table>
// 	<!-- @foreach ($notas as $nota) -->
//   	<script>

// // var pepe = btn.value;
// // alert(pepe);
// // Get the modal
// // var modal{{$nota->id}} = document.getElementById("modal{{$nota->id}}");

// // Get the button that opens the modal
// // var btn{{$nota->id}} = document.getElementById("{{$nota->id}}");

// // // Get the <span> element that closes the modal
// // var span{{$nota->id}} = document.getElementById("cerrar{{$nota->id}}");

// // // When the user clicks the button, open the modal 
// // btn{{$nota->id}}.onclick = function() {
//   modal{{$nota->id}}.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span{{$nota->id}}.onclick = function() {
//   modal{{$nota->id}}.style.display = "none";
// }

// var modales = modal{{$nota->id}};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal{{$nota->id}}) {
//     modal{{$nota->id}}.style.display = "none";
//   }
// }

// pepe++;