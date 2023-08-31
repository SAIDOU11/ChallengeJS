import propertyForSaleArr from './properties/propertyForSaleArr.js';
import placeholderPropertyObj from './properties/placeholderPropertyObj.js';

const getPropertyHtml = (propertiesArr = [placeholderPropertyObj]) => {
  return propertiesArr
    .map((property) => {
      console.log(property);
      const { comment, image, priceGBP, propertyLocation, roomsM2 } = property;
      const roomSurface = roomsM2.reduce(
        (total, currentSurface) => total + currentSurface
      );
      return ` 
    <section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2> 
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${roomSurface} m&sup2;</h3>
    </div>
</section> 
    `;
    })
    .join('');
};

document.getElementById('container').innerHTML =
  getPropertyHtml(propertyForSaleArr);

document.getElementById('container').innerHTML = getPropertyHtml();
