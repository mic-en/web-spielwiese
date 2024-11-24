


    (function domTraversal(parentElement){
      parentElement.childNodes.forEach((element) => {
        if(element.innerText && element.className === 'change'){
            element.innerText = `${element.innerText} changed`
        }
        if(element.hasChildNodes()){
            domTraversal(element);
        }
        return;
      });
    })(document.querySelector('body'))
