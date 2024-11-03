interface CategoriesParams {
  params: Promise<{
    name: string;
  }>;
}

export default async function CategoriesPage(props: CategoriesParams) {
  const params = await props.params;

  const {
    name
  } = params;

  return (
    <div>
      <h1>CategoriesPage</h1>
      <h2>categoria: {name}</h2>
    </div>
  );
}
