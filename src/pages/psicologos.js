import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/psicologos/product-list-toolbar';
import { ProductCard } from '../components/psicologos/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import Link from 'next/link';
import { useRouter } from "next/router";

console.log("Verifying Page component"); // Adicione esta linha
const Page = () => {
  console.log("Inside Page component"); // Adicione esta linha
  const router = useRouter();
  console.log("Router initialized", router); // Adicione esta linha

  return (
    <>
      <Head>
        <title>Psicólogos | Mental Health</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />

          <Box sx={{ p: 3 }}>
            <Grid container
              spacing={3}>
              {products.map((product) => (
                <Link key={product.id}
                  href={`/psicologos/${product.id}`}>
                  <Grid item
                    key={product.id}
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}>
                    <ProductCard product={product}
                      id={product.id} />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary"
              count={3}
              size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
