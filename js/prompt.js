class Promt extends HTMLElement {

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

        
        <div class="prompt">
                
        </div>

        <div class="response">
            
        </div>
            
      `
        this.prompt.forEach(prompt => {
            
        });
        
        this.response.forEach(reponse => {
            
        });

    }

}
  
customElements.define('promt-component', Prompt);