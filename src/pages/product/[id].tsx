import Image from "next/image";
import { ImageContainer, ProductContaienr, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContaienr>
      <ImageContainer>
        {/* <Image /> */}
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis illum, asperiores eveniet magni doloribus maxime, voluptatem rem error dicta eligendi illo quisquam laudantium incidunt eum dolore perspiciatis? Explicabo, fugit!</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContaienr>
  )
}
