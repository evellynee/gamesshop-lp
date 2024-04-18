$(document).ready(function () {
    $('#telefone').mask ('(00) 0 0000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }


        },
        messages: {
            nome: 'Insira seu nome',
            email: 'Insira seu email',
            mensagem: 'Deixe sua mensagem'
        },
        sumitHandler: function (form){

        },
        invalidHandler: function(e,validador){
            let camposIncorretos = validador.numberOfInvalids()
        }
    })

});