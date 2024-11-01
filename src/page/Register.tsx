import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import background from "/public/medellin_blanco_y_negro-modified.jpg?url"

export default function RegisterEntityPage() {
  const [entityType, setEntityType] = useState("public")

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${background})`,
           backgroundSize: 'cover',
           width: '100vw',
           height: '100vh',
         }}>
      <div className="w-full max-w-lg p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg mx-4 md:mx-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Registro de Entidades</h1>
          <p className="text-base text-gray-700 mt-1">Registra una nueva entidad para la plataforma de gestión de proyectos</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="entityName" className="block text-sm font-medium text-gray-800">
              Nombre de la Entidad
            </label>
            <Input
              id="entityName"
              name="entityName"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: Alcaldía de Medellín"
            />
          </div>

          <div>
            <label htmlFor="entityType" className="block text-sm font-medium text-gray-800">
              Tipo de Entidad
            </label>
            <select
              id="entityType"
              name="entityType"
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
            >
              <option value="public">Universidad</option>
              <option value="private">Secretaria</option>
              <option value="non-profit">Entidad</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-800">
              Descripción
            </label>
            <Textarea
              id="description"
              name="description"
              required
              className="mt-1 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe brevemente el objetivo de la entidad y su área de impacto"
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-800">
              Correo de Contacto
            </label>
            <Input
              id="contactEmail"
              name="contactEmail"
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="contacto@entidad.com"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-800">
              Usuario de Ingreso
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Usuario de ingreso"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Contraseña
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-gray-200 text-gray-700 font-medium rounded-full py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Registrar Entidad
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm font-medium text-gray-700 hover:underline">
            Regresar al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
