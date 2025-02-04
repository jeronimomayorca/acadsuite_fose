
<script type="text/javascript">
    
       
    function cargarapropiacion(){
        var ano='2024';
        var accion='cargarapropiacion';
        $.ajax({
            url:"presupuesto-acciones.php",
            type:"POST",
            cache:false,
            data:{ano:ano},
            success: function(resp){//alert(resp);return;
                $('#tablaapropiacion').html(resp);
            }                
        });
                
    }

</script>       