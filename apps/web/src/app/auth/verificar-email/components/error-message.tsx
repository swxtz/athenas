export function ErrorMessage() {
  return (
    <div className="flex flex-col items-center min-h-full">
      <h1 className="text-3xl mt-32 md:mt-64 font-bold text-gray-800">
        Erro ao verificar email
      </h1>
      <p className="text-gray-600 mt-4">
        Ocorreu um erro ao verificar seu email.
      </p>
    </div>
  );
}