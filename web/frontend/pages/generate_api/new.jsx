import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { CreateProductForm } from "../../components";

export default function ManageCode() {
    const breadcrumbs = [{
        content: "Generate a product",
        url: "/"
    }]

    return (
        <Page>
            <TitleBar 
                title="Create new product"
                breadcrumbs={breadcrumbs}
                primaryAction={null}
            />
            <CreateProductForm />
        </Page>
    )
}