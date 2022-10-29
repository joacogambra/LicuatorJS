let estadoLicuadora = 'apagada'
let licuadora = document.getElementById('blender')

function controlarLicuadora(){
    if(estadoLicuadora == 'apagada'){
        estadoLicuadora = "encendida"
        licuadora.classList.add('active')
        console.log('ON');
    } else{
        estadoLicuadora = 'apagada'
        licuadora.classList.remove('active')
        console.log('OFF');
    }
}