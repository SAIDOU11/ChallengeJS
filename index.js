import placeholderPropertyObj from './properties/placeholderPropertyObj.js';
import propertyForSaleArr from './properties/propertyForSaleArr.js';

const getPropertyHtml = () => {
  propertyForSaleArr
    .map((property) => {
      const { comment, image, priceGBP, roomsM2, propertyLocation } = property;
      roomsM2.reduce();
      return `
    <section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation} </h2>
        <h3>${priceGBP} </h3>
        <p>${comment} </p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
    `;
    })
    .join('');
};
const container = document.createElement('div');
container.append(getPropertyHtml());

document.getElementById('container').innerHTML = container;
