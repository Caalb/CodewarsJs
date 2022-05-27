// Transformar horas/min/seg em milisegundos

function past(h, m, s){
    const horasEmMilisegundos = h * 60 * 60000
    const minutosEmMilisegundos = m * 60000
    const segundosEmMilisegundos = s * 1000

    return horasEmMilisegundos + minutosEmMilisegundos + segundosEmMilisegundos
}