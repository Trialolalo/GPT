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
          .prompts {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .prompt {
            border: 1px solid #dddddd;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.5rem;
          }

          h3 {
            margin: 0;
          }

          p {
            margin: 0;
          }

          .responses {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .response {
            border: 1px solid #dddddd;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.5rem;
          }

        </style>

        
        <div class="prompts">
                
        </div>

        <div class="responses">
            
        </div>
            
      `
        this.prompts.forEach(prompt => {
          const promptsContainer = this.shadow.querySelector('.prompts')
          const promptContainer = document.createElement('div')
          promptContainer.classList.add('prompt')

          const user = document.createElement('h3')
          user.textContent = prompt.user
          promptContainer.appendChild(user)

          const input = document.createElement('p')
          input.textContent = prompt.input
          promptContainer.appendChild(input)

          promptsContainer.appendChild(promptContainer)
            
        });
        
        this.responses.forEach(reponse => {
          const promptsContainer = this.shadow.querySelector('.prompts')
          const promptContainer = document.createElement('div')
          promptContainer.classList.add('prompt')

          const gpt = document.createElement('h3')
          gpt.textContent = prompt.gpt
          promptContainer.appendChild(gpt)

          const answer = document.createElement('p')
          answer.textContent = prompt.answer
          promptContainer.appendChild(answer)

          promptsContainer.appendChild(promptContainer)
        });

    }

}
  
customElements.define('promt-component', Prompt);