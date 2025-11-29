
const out = msg => document.getElementById('output').textContent = msg;

function ej3() {
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(function (r) { return r.json(); })
    .then(function (usuario) {
      var texto =
        "Name: " + usuario.name +
        "\nUsername: " + usuario.username +
        "\nEmail: " + usuario.email;

      out(texto);
    })
    .catch(function (err) {
      out(err);
    });
}


async function ej4() {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const usuario = await r.json();

    var texto =
      "Name: " + usuario.name +
      "\nUsername: " + usuario.username +
      "\nEmail: " + usuario.email;

    out(texto);

  } catch (e) {
    out(e);
  }
}


async function ej5(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(r=>r.json())
    .then(arr=>{
      let s=""; arr.forEach(x=> s+=x.name+"\n"); out(s);
    });
}
async function ej6(){
  const r = await fetch('https://jsonplaceholder.typicode.com/users');
  const arr = await r.json();
  out(arr.map(x=>x.name).join("\n"));
}

function ej7() {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(function (r) { return r.json(); })
    .then(function (u) {
      out(
        "Nombre: " + u.name +
        "\nEmail: " + u.email +
        "\nCiudad: " + u.address.city
      );
    });
}

async function ej8(){
  const r = await fetch('https://jsonplaceholder.typicode.com/users/2');
  const u = await r.json();
  out(`Nombre: ${u.name}\nEmail: ${u.email}\nCiudad: ${u.address.city}`);
}
// 10. Contraseña fuerte
ej10 = () => {
  // Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  out(regex.toString());
};

// 11. URL segura (https)
ej11 = () => {
  const regex = /https:\/\/[\w.-]+\.[a-z]{2,}(\/[\w.-]*)*/gi;
  out(regex.toString());
};

// 12. Quitar etiquetas HTML
ej12 = () => {
  const regex = /<[^>]+>/g;
  const limpio = " <h1>Hola</h1> ".replace(regex, "");
  out(limpio.trim());
};

// 13. Dividir en oraciones
ej13 = () => {
  const texto = "Hola. Cómo estás? Bien!";
  const partes = texto
    .split(/[.!?]+/)
    .map(oracion => oracion.trim())
    .filter(oracion => oracion.length > 0);

  out(JSON.stringify(partes));
};

// 14. Validar fecha DD/MM/YYYY
ej14 = ()=>{
const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
out(regex.toString());
};