/*FUÇÃO PARA SELECIONAR OBJETOS */
let s = (el) =>document.getElementById(el);


/*FUNÇÃO MENU */

let toggleMenu = s('icone_menu');

toggleMenu.addEventListener('click', ()=>{
    s('navMenu').classList.toggle('navOpen');
});


/*toggle: roda toda vez que uma ação ocore nesse caso

ele verifica se a classe existe ou não

outra forma de fazer é fazendo uma verificação com  classList.contains("foo")

verificando se contém a classe ou não
*/
