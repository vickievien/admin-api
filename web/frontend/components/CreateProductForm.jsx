import { useState, useCallback } from "react";
import {
    Page,
    Layout,
    Form,
    FormLayout,
    TextField,
    Button,
    Card,
} from "@shopify/polaris";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { setProperties } from "@shopify/app-bridge/actions/Cart";
import { useAppBridge } from "@shopify/app-bridge-react";

export function CreateProductForm() {
    const [products, setProducts] = useState([]);
    const [productTitle, setProductTitle] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productPic, setProductPic] = useState("");
    const [testText, setTestText] = useState("");

    const handleProductTitle = useCallback(
        (value) => setProductTitle(value),
        [],
    )

    const app = useAppBridge();
    const useFetch = authenticatedFetch(app);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        useFetch("/api/generate");
        
        // const getProductResponse = await fetch(`/api/generate`);

        // if (getProductResponse.ok) {
        //     console.log(getProductResponse);
        // } else {
        //     console.log("err");
        // }
        console.log("hello there");
    }, []);

    return (   
            <Form onSubmit={handleSubmit}>
                <Card sectioned>
                    <FormLayout>
                        <TextField
                            label="Product title"
                            value={productTitle}
                            onChange={handleProductTitle}
                            placeholder="Short sleeve shirt"
                            autoComplete="off"
                        />
                        <Button submit>Submit</Button>
                    </FormLayout>
                </Card>
            </Form>  
    );
}
