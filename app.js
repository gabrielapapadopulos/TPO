function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("por favor complete el campo nombre");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }

    if(form.apellido.value==0){
        alert("por favor complete el campo apellido");
        form.apellido.value="";
        form.apellido.focus();
        return false;
    }

    if(form.consulta.value==0){
        alert("por favor complete el campo con su consulta");
        form.consulta.value="";
        form.consulta.focus();
        return false;
    }
    
}

