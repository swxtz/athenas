export function SuccessMessage() {
  return (
    <div className="flex flex-col items-center min-h-full">
      <h1 className="text-3xl mt-32 md:mt-64 font-bold text-gray-800">
        Email verificado
      </h1>
      <p className="text-gray-600 mt-4">
        Seu email foi verificado com sucesso.
      </p>
    </div>
  );
}