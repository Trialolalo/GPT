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
   
          aside{
            background-color: hsl(0, 0%, 0%);
            height: 100%;
            max-width: 235px;
            min-width: 235px;
            position: relative;
            top: 0;
            left: 0;
            transition: max-width 0.3s ease-in-out, min-width 0.3s ease-in-out;
          }

          aside.active{
            max-width: 0;
            min-width: 0;
          }

          .history-menu{
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            position: fixed;
            width: 2rem;
            top: 50vh;
            left: 32vh;
          }

          .button-aside{
            width: 10px;
            cursor: pointer;

          }

          .button-aside.active{
            position: fixed;
            transform: translateX (-235px);
            transition: all 2s;
          }

          .button-aside span{
            display: block;
            height: 12px;
            background: hsl(0, 0%, 100%);
            transition: all .3s;
            cursor: pointer;
            box-sizing: border-box;
            height: .8rem;
            width: .25rem;
            transform: translateY(0.15rem) rotate(0deg) translateZ(0px);
          }

          .button-aside span:first-child{
            border-radius: 1rem 1rem 0 0;
          }

          .button-aside span:last-child{
            border-radius: 0 0 1rem 1rem;
          }

          .button-aside:hover span:first-child{
            transform: rotate(15deg)
          }

          .button-aside:hover span:last-child{
            transform: rotate(-15deg)
          }

          .button-aside.active:hover span:first-child{
            transform: rotate(-15deg)
          }

          .button-aside.active:hover span:last-child{
            transform: rotate(15deg)
          }
 
        </style>

        <aside>
          <slot name="content"></slot>
        </aside>
        <button class="history-menu">
          <div class="button-aside">
            <span></span>
            <span></span>
          </div>
        </button>
        
      `
      const toggleButton = this.shadow.querySelector('.button-aside');
      const asideElement = this.shadow.querySelector("aside");

      toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        asideElement.classList.toggle('active');
      });
    }

}
  
customElements.define('aside-component', Aside);