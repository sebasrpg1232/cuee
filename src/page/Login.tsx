import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import imagen from "/public/medellin_blanco_y_negro-modified.jpg?url"
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${imagen})`,
           backgroundSize: 'cover',
           width: '100vw',
           height: '100vh',
         }}>
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-xl mx-4 md:mx-0">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Territorios Inteligentes</h1>
          <p className="text-sm text-gray-600">Plataforma de Gestión de Proyectos</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1"
              placeholder="nombre@entidad.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1 relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full" onClick={()=>navigate("/homepage")}>
              Iniciar Sesión
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  )
}
