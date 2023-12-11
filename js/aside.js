class Aside extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {

        this.render()
    }
  
    render () {
        this.shadow.innerHTML =
        /*html*/`
        <style>        
           
            
        </style>

            
      `


    }

}
  
customElements.define('aside-component', Aside);