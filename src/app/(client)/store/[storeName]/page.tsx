type StorePreview = {
  params: Promise<{ storeName: string }>;
};

export default async function storePreview({ params }: StorePreview) {
  return(
    <h1>{(await params).storeName}</h1>
  )
}
