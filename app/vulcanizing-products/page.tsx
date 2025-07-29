import type { NextPage } from "next"
import Head from "next/head"
import { Container, Typography, Button } from "@mui/material"

const VulcanizingProductsPage: NextPage = () => {
  const products = [
    {
      name: "Neu-Tech Technology",
      description: "Advanced Neu-Tech technology for superior tyre repair solutions",
    },
    // Additional products can be added here
  ]

  return (
    <>
      <Head>
        <title>Neu-Tech Vulcanizing Products</title>
        <meta name="description" content="Discover our comprehensive range of Neu-Tech vulcanizing products" />
      </Head>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h1">
            Our <span className="text-orange-500">Neu-Tech</span> Products
          </Typography>
          <Typography variant="p" style={{ marginTop: "20px" }}>
            Discover our comprehensive range of Neu-Tech vulcanizing products
          </Typography>
        </div>

        {/* Products Section */}
        <div style={{ marginTop: "50px" }}>
          {products.map((product, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <Typography variant="h2">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h2">Ready to Experience Neu-Tech Quality?</Typography>
          <Typography variant="p" style={{ marginTop: "20px" }}>
            Contact us today to learn more about our Neu-Tech products
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: "30px" }}>
            Contact Us
          </Button>
        </div>
      </Container>
    </>
  )
}

export default VulcanizingProductsPage
