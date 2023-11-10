const FAQ = () => {
    const categories = document.getElementById('categories');
  
    const fetchData = async () => {
      const response = await fetch('./json/database.json');
      const data = await response.json();
  
      data.forEach(element => {
        const { id, image, avatar, slug, title, text } = element;
        categories.innerHTML += `
          <div class="card card--flip" key="${id}">

            <div class=" card__body--flip">
              <img src="${image}" width="48px" height="80px" class="img img--category"/>
            </div>

            <div class="card__body2 card__body--flip">

              <h1 class="card__title2">${title}</h1>

              <p class="card__text2">${text}</p>

              <img src="${avatar}" width="30px" height="30px" class="avatar"/>

              <a href="${slug}" target="_blank" class="button button--primary">Hacer Pedido</a>
            </div>
          </div>
        `;
      });
    };
    fetchData();
  };
  
  export default FAQ;