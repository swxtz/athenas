interface CategoriesParams {
  params: {
    name: string;
  };
}

export default function CategoriesPage({ params: { name } }: CategoriesParams) {
  return (
    <div>
      <h1>CategoriesPage</h1>
      <h2>categoria: {name}</h2>
    </div>
  );
}
