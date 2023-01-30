import { Layout } from '@/layouts';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //temp
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [setProducts]);

  return (
    <>
      <Head>
        <title>Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>this is main</main>
        <main>
          {products.map((product) => {
            return <span key={product.id}>{product.tile}</span>;
          })}
        </main>
      </Layout>
    </>
  );
}
