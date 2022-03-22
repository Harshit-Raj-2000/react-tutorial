import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

// image - { url: "www.----.com"}
// now if image is not  passed in, and we try to acces the url property of image we'll get a big fat error
// this is where prop types comes in handy

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <img src={(image && image.url) || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// proptypes basically sets up a schema for the props that are coming in
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// We can set up default props if some prop is not passed into the component
// Product.defaultProps = {
//   name: "default name",
//   price: "3.99",
//   image: defaultImage,
// };

// price || 3.99 -- another way to set default props
// if price is there use price, otherwise use 3.99

export default Product;
