import { Image, ImageEdge, Product as ShopiftProduct } from "../schema";
import { Product } from "@common/types/product";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
    };
  });
};

export function normalizeProduct(productNode: ShopiftProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };
  return product;
}
