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
import { setProperties } from "@shopify/app-bridge/actions/Cart";

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


    const handleSubmit = async() => {
        const getProductResponse = await fetch(`/generate`);

        if (getProductResponse.ok) {
            setTestText("fetching is good");
            console.log(testText);
        } else {
            setTestText("fetching no bueno");
            console.log(testText);
        }

        console.log(`submitted ${productTitle}`);

    }


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
