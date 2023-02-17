const cors = require("cors");
var express = require("express");

var app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.post("/send", function (req, res, next) {
  console.log(req.body);
  return res.json(req.body);
});

app.get("/", function (req, res, next) {
  return res.json({ retornando: "A|L|G|O" });
});

// app.get("/hello", (req, res) => {
//   axios
//     .post(
//       "https://agenciamagma.myvtex.com/api/dataentities/ta/documents",
//       {
//         bairro: "Santa Monica",
//         cellphone: "96771112",
//         cep: "88034610",
//         cidade: "Florianopolis",
//         cpnj: "00000000000000",
//         email: "fabiohigoralm2@gmail.com",
//         endereco: "rua servida das pedras",
//         inscricaoestudal: "00000000000000",
//         name: "Fabio",
//         nomefantasia: "Decora Iluminação",
//         numero: "45",
//         razaosocial: "Naves e Almeida LTDA.",
//         referencia: "em frente aos correios",
//         surname: "Almeida",
//         telefoneempresa: "32685515",
//         telephone: "32687540",
//         uf: "SC",
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     )
//     .then((data) => console.log(data));
//   res.json({ enviou: "ok" });
// });
module.exports = app;
