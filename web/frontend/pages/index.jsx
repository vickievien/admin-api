import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";

export default function HomePage() {
  const navigate = useNavigate();

  const isLoading = false;
  const isRefetching = false;
  const genProduct = [];

  const loadingMarkup = isLoading ? 
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  : null;

  const emptyStateMarkup = !isLoading && !genProduct.length ? (
    <Card sectioned>
      <EmptyState
        heading="Generate a product"
        action = {
          {
            content: "Generate a product",
            onAction: () => navigate("/generate_api/new")
          }
        }
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Allow customers to generate a product with a random image and price.</p>
      </EmptyState>
    </Card>
  ) 
  : null;


  return (
    <Page>
      
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {emptyStateMarkup}
        </Layout.Section>
        
      </Layout>
    </Page>
  );
}
