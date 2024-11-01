'use client'

import { useState } from 'react'
import { Search, Plus, Home, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import "../style/SearchProyect.css"
import { useNavigate } from 'react-router-dom'

// Mock data for search suggestions and results
const mockSuggestions = [
  "Parque tecnológico",
  "Movilidad sostenible",
  "Energía renovable",
  "Smart city",
  "Gestión de residuos",
]

const mockResults = [
  { id: 1, title: "Implementación de sistema de bicicletas compartidas", dimension: "Movilidad Sostenible", status: "En proceso" },
  { id: 2, title: "Desarrollo de app para reportar problemas urbanos", dimension: "Desarrollo Tecnológico", status: "Finalizado" },
  { id: 3, title: "Instalación de paneles solares en edificios públicos", dimension: "Calidad de Vida", status: "En proceso" },
  { id: 4, title: "Creación de huertos urbanos comunitarios", dimension: "Hábitat", status: "Finalizado" },
  { id: 5, title: "Programa de capacitación en habilidades digitales", dimension: "Personas", status: "En proceso" },
]

export default function BuscarProyectoPage() {
      const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('buscar')
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedDimension, setSelectedDimension] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    // Filter suggestions based on input
    const filtered = mockSuggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(value.toLowerCase())
    )
    setSuggestions(filtered)
  }

  const filteredResults = mockResults.filter(result => 
    (searchTerm === '' || result.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDimension === '' || result.dimension === selectedDimension) &&
    (selectedStatus.length === 0 || selectedStatus.includes(result.status))
  )

  return (
      <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Buscar Proyectos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full"
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSearchTerm(suggestion)
                            setSuggestions([])
                          }}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Select value={selectedDimension} onValueChange={setSelectedDimension}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Dimensión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Movilidad Sostenible">Movilidad Sostenible</SelectItem>
                    <SelectItem value="Desarrollo Tecnológico">Desarrollo Tecnológico</SelectItem>
                    <SelectItem value="Calidad de Vida">Calidad de Vida</SelectItem>
                    <SelectItem value="Hábitat">Hábitat</SelectItem>
                    <SelectItem value="Personas">Personas</SelectItem>
                  </SelectContent>
                </Select> 
                <div className="space-y-2">
  <Label>Estado</Label>
  <div className="flex flex-col space-y-1">
    <div className="flex items-center space-x-2">
      <Checkbox
        id="finalizado"
        checked={selectedStatus.includes('Finalizado')}
        onCheckedChange={(checked) => {
          setSelectedStatus(prev => 
            checked
              ? [...prev, 'Finalizado']
              : prev.filter(status => status !== 'Finalizado')
          )
        }}
        className="text-white bg-white ring-2 ring-gray-300 focus:ring-black checked:bg-white checked:ring-black"
      />
      <label htmlFor="finalizado" className="text-gray-700">Finalizado</label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox
        id="en-proceso"
        checked={selectedStatus.includes('En proceso')}
        onCheckedChange={(checked) => {
          setSelectedStatus(prev => 
            checked
              ? [...prev, 'En proceso']
              : prev.filter(status => status !== 'En proceso')
          )
        }}
        className="text-white bg-white ring-2 ring-gray-300 focus:ring-black checked:bg-black checked:ring-black"
      />
      <label htmlFor="en-proceso" className="text-gray-700">En proceso</label>
    </div>
  </div>
</div>

              </div>
            </div>
          </CardContent>
        </Card>

        {searchTerm && (
          <Card>
            <CardHeader>
              <CardTitle>Resultados Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {filteredResults.slice(0, 3).map(result => (
                  <li key={result.id} className="border-b pb-2">
                    <h3 className="font-semibold">{result.title}</h3>
                    <p className="text-sm text-gray-600">{result.dimension} - {result.status}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Todos los Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {filteredResults.map(result => (
                <li key={result.id} className="border-b pb-4">
                  <h3 className="font-semibold">{result.title}</h3>
                  <p className="text-sm text-gray-600">{result.dimension} - {result.status}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}