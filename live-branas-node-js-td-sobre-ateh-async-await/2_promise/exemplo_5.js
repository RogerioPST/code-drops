const delayedSumRetornaCerto = function (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a + b);
    }, 500);
  });
};

//para o event loop esperar os 2 segundos, resolvo a promise com o then p permitir o comportamento
//assincrono da linguagem
console.time("performance");
Promise.all([delayedSumRetornaCerto(2, 2), delayedSumRetornaCerto(4, 4)]).then(
  function (result) {
    const [a, b] = result;
    delayedSumRetornaCerto(a, b).then(function (result) {
      console.log(result);
      console.timeEnd("performance");
    });
  }
);
console.log('executa antes das promises')
