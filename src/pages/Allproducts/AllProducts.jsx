import { Filter, ProductList } from "../../components/index";

const AllProducts = () => {

    return (
        <div class="product-container">
            <Filter />
            <ProductList />
        </div>
    )
}

export { AllProducts }