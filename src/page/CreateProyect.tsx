import { useState } from 'react'
import { Search, Plus, Home, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'

export default function CrearProyectoPage() {
  const [activeTab, setActiveTab] = useState('crear')
  const navigate = useNavigate()
  return (
     <div className="min-h-screen bg-gray-50">
      <nav className="w-full bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`flex items-center ${
                activeTab === 'inicio' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => {
                              setActiveTab('inicio')
                              navigate('/homepage')
                          }}
            >
              <Home className="mr-2 h-4 w-4" />
              Inicio
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center ${
                activeTab === 'crear' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => {
                setActiveTab('crear')
                navigate('/crearproyecto')
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Crear Proyecto
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center ${
                activeTab === 'buscar' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => {
                setActiveTab('buscar')
                navigate('/buscarproyecto')
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar Proyecto
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full flex justify-center items-center p-4">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Crear Nuevo Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input id="titulo" placeholder="Ingrese el título del proyecto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objetivo">Objetivo</Label>
                <Textarea id="objetivo" placeholder="Describa el objetivo del proyecto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dimension">Dimensión del Proyecto</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione la dimensión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="movilidad">Movilidad Sostenible</SelectItem>
                    <SelectItem value="tecnologia">Desarrollo Tecnológico</SelectItem>
                    <SelectItem value="calidad">Calidad de Vida</SelectItem>
                    <SelectItem value="habitat">Hábitat</SelectItem>
                    <SelectItem value="personas">Personas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="documento">Documento de Estudio Previo - Anexo</Label>
                <div className="flex items-center space-x-2">
                  <Input id="documento" type="file" className="hidden" />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('documento')?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Subir Documento
                  </Button>
                  <span className="text-sm text-gray-500">Ningún archivo seleccionado</span>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Crear Proyecto
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}