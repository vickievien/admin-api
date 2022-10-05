import { useState, useCallback } from "react";
import {
    Page,
    Layout,
    Form,
    FormLayout,
    TextField,
    Button,
    Card,
    Stack,
    Icon,
    SkeletonThumbnail
} from "@shopify/polaris";
import { ImageMajor } from "@shopify/polaris-icons";
import { 
    useAppBridge,
    useNavigate,
    ContextualSaveBar    
} from "@shopify/app-bridge-react";
import { useAuthenticatedFetch, useAppQuery } from "../hooks";
import { useForm, useField, notEmptyString } from "@shopify/react-form";


export function CreateProductForm({ genProduct: InitialProduct }) {
    const [genProduct, setGenProduct] = useState(InitialProduct);
    const [productTitle, setProductTitle] = useState("");
    // const [productDescription, setProductDescription] = useState("");
    // const [productPrice, setProductPrice] = useState(0);
    // const [productPic, setProductPic] = useState("");
    // const [testText, setTestText] = useState("");

    const navigate = useNavigate();
    const appBridge = useAppBridge();
    const fetch = useAuthenticatedFetch();


    const onSubmit = (body) => console.log("submit", body);
    // const onSubmit = () => console.log("submitting");

    const randomPrice = Math.floor(Math.random() * 10)

    const {
        fields: {
            title,
            price
        },
        dirty,
        reset,
        submitting,
        submit,
        makeClean
    } = useForm({
        fields: {
            title: useField(''),
            price: randomPrice,
        },
        onSubmit,
    });

    const deleteProduct = () => console.log("hold for delete");
    
    return (   
        <Stack vertical>
            <Layout.Section>
                <Form>
                    <ContextualSaveBar 
                        saveAction={{
                            label: "Save",
                            onAction: submit,
                            loading: submitting,
                            disabled: submitting
                        }}
                        discardAction={{
                            label: "Discard",
                            onAction: reset,
                            loading: submitting,
                            disabled: submitting
                        }}  
                    />
                    <FormLayout>
                        <Card sectioned title="Product title">
                            <TextField
                                label="Product title"
                                {...title}
                                placeholder="Short sleeve shirt"
                                autoComplete="off"
                            />
                        </Card>
                        <Card sectioned title="Product price">
                            <TextField 
                                label="Price"
                                value="0"
                                type="currency"
                                {...price}
                                prefix="$"
                            />
                        </Card>
                        <Card sectioned title="Product image">
                            <SkeletonThumbnail size="large"/>
                            {/* <Icon source={ImageMajor} color="base"/> */}
                        </Card>
                    </FormLayout>
                </Form> 
            </Layout.Section>
            <Layout.Section>
                <Button
                    outline
                    destructive
                    onClick={deleteProduct}
                >
                    Delete product
                </Button>
            </Layout.Section>
             
        </Stack>
            
    );
}






// const app = useAppBridge();
    // const useFetch = authenticatedFetch(app);

    // const handleSubmit = useCallback((e) => {
    //     e.preventDefault();
    //     useFetch("/api/generate");
        
    //     console


    // const handleSubmit = (uri, options) => {
    //     const aggregateOptions = deepMerge(options, {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"}
    //     });
    //     return fetch(uri, aggregateOptions);
    // }
