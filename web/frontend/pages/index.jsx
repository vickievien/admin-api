import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { ProductsCard } from "../components";
import { CreateProductForm } from "../components";

export default function HomePage() {

  return (
    <Page title="Generate new product">
      
      <Layout>
        <Layout.Section>
          <ProductsCard />
          <CreateProductForm />
        </Layout.Section>
        
      </Layout>
    </Page>
  );
}
