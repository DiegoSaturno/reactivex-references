

(async () => {
    console.time("Teste de chamada de 1000ms")
    setTimeout(() => {
        console.log("Chamada de 1000ms")
    }, 1000);
    console.timeEnd("Teste de chamada de 1000ms");
})();

// (async () => {
//     console.time("Teste de chamada de 500ms")
//     asyncFunction(500, () => console.log("Chamada de 500ms"));
//     console.timeEnd("Teste de chamada de 500ms");
// })();







