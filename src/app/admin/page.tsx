import { projects } from "@/src/util/projectData";
import Image from "next/image";
import Link from "next/link";

export default async function AdminVendaPage() {
  const projeto = projects["admin"];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 pt-15 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-roboto">
            {projeto.nome}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Uma plataforma web moderna para gestão de vendas e controle de
            projetos com autenticação de usuários.
          </p>
        </div>

        <div className="mt-12">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={projeto.imagem}
              alt={`Imagem do projeto ${projeto.nome}`}
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
          {/* Card Acesso à Plataforma + Ver ao Vivo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                👥 Acesso à Plataforma
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Para explorar o painel, utilize os usuários de teste abaixo.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <p>
                  <strong>Admin:</strong> <code>admin@example.com</code> /{" "}
                  <code>senha123</code>
                </p>
                <p>
                  <strong>Funcionário:</strong> <code>joao@example.com</code> /{" "}
                  <code>senha123</code>
                </p>
              </div>
            </div>
            <a
              href="https://plataforma-admin-versao-deploy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max self-center text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Ver ao Vivo
            </a>
          </div>

          {/* Card Repositório + Ver no GitHub */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                📂 Repositório
              </h3>
              <p className="leading-relaxed mb-6">
                O código-fonte completo, incluindo front-end, back-end e
                integração com Supabase, está disponível no GitHub.
              </p>
            </div>
            <a
              href="https://github.com/AnthonyMdM/Plataforma-Admin-Versao-Deploy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max self-center text-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Ver no GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
          <h2 className="mt-2">Tecnologias Utilizadas:</h2>
          <ul className="flex flex-wrap gap-2 p-0 mt-3">
            {projeto.tecnologias.map((tech) => (
              <li
                key={tech}
                className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full list-none"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/home#projetos"
            className="text-blue-600 dark:text-cyan-400 hover:underline"
          >
            &larr; Voltar para todos os projetos
          </Link>
        </div>
      </div>
    </main>
  );
}
