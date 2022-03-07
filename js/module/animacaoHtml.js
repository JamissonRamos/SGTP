/*
    Essa pagina js vai tratar todos as animações da minha aplicação, como por exemplo ao receber e perder o focu dos inputs, dando cor ao elemento da pagina.

    1 => fazer a importação das functions da pagina animacaoHtml.js
        import {addcl} from './module/animacaoHtml.js'
        import {remcl} from './module/animacaoHtml.js'

    2 => faz a chamada na main_AlgumaCoisa com esse trecho de código 
        document.querySelectorAll('input').forEach(input => 
        {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);    
        });
*/
    
export function addcl()
{
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

export function remcl()
{
    let parent = this.parentNode.parentNode;

    if(this.value == "")
    {
        parent.classList.remove("focus");
    };
}

window.addcl=addcl;
window.remcl=remcl;
