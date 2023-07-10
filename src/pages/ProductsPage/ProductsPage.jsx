import React from 'react'
import { PageHeader, ProductSection } from '../../containers';

function ProductsPage() {
  return (
    <div className="ProductsPage">
      <PageHeader title={'All Products'}/>
      <ProductSection/>
    </div>
  );
}

export default ProductsPage;