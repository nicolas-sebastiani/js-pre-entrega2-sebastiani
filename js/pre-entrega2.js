// Segunda Pre Entrega
// Es una interfaz para crear nuevos usuarios, eliminarlos, y mostrar una lista por nombre de usuarios registrados


let navegador = 0
let usuarios = []

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    userWelcome(){
        alert(`Bienvenido ${this.username}!`);
    }
}

function createUser(){
    alert('Crear nueva cuenta.');
    let username = prompt('Ingrese nombre de Usuario (5-15 caracteres): ');
    while(username.length < 5 || username.length > 15){
        username = prompt('Nombre de usuario INVALIDO. Ingrese un nombre de Usuario (5-15 caracteres): ')
    }
    let email = prompt('Ingrese un Email (10-25 caracteres): ');
    while(email.length < 10 || email.length > 25){
        email = prompt('Email INVALIDO. Ingrese un Email (10-25 caracteres): ')
    }
    let password = prompt('Ingrese una Contraseña (min. 8 caracteres): ');
    while(password.length < 8){
        password = prompt('Contraseña INVALIDA. Ingrese una Contraseña (min. 8 caracteres): ')
    }
    const newUser = new User(username, email, password);
    console.log('Nuevo usuario creado')
    alert('Cuenta creada con exito!');
    newUser.userWelcome();
    usuarios.push(newUser);
}

function deleteUser(userToDelete){
    usuarios = usuarios.filter(user => user.username !== userToDelete);
    alert(`El usuario ${userToDelete} fue ELIMINADO con exito!`);
}

alert('Bievenido al asistente de usuarios');
while(navegador !== 4){
    navegador = parseInt(prompt('| 1 - Crear Cuenta | 2 - Ver Lista de Usuarios | 3 - Eliminar Cuenta | 4 - Salir |'))
    if(navegador == 1){
        createUser();
    } else if (navegador == 2){
        if (usuarios.length > 0){
        alert(usuarios.map(user => user.username).join(', '));
        } else {
            alert('No se registro ningun usuario');
        }
    } else if (navegador == 3){
        let user = prompt('Ingrese el nombre de usuario que desea ELIMINAR.');
        deleteUser(user);
    } else if (navegador !== 4 && navegador !== 0 ){
        alert('Opcion no valida, elija una opcion valida.');
    }
}
