'use client'

import { useState } from 'react'
import { Search, Plus, Home, BarChart2, Activity, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// Datos simulados para los gráficos
const projectData = [
  { mes: 'Ene', proyectos: 12, completados: 8, presupuesto: 150, formulacion: 8 },
  { mes: 'Feb', proyectos: 19, completados: 12, presupuesto: 180, formulacion: 5 },
  { mes: 'Mar', proyectos: 15, completados: 10, presupuesto: 160, formulacion: 10 },
  { mes: 'Abr', proyectos: 25, completados: 18, presupuesto: 200, formulacion: 3 },
  { mes: 'May', proyectos: 23, completados: 15, presupuesto: 190, formulacion: 2 },
  { mes: 'Jun', proyectos: 30, completados: 22, presupuesto: 220, formulacion: 3 },
]

const projectTypes = [
  { nombre: "Movilidad Sostenible", progreso: 10 },
  { nombre: "Desarrollo Tecnológico", progreso: 25 },
  { nombre: "Calidad de Vida", progreso: 35 },
  { nombre: "Habitad", progreso: 5 },
  { nombre: "Personas", progreso: 10 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red']

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('inicio')

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
              onClick={() => setActiveTab('inicio')}
            >
              <Home className="mr-2 h-4 w-4" />
              Inicio
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center ${
                activeTab === 'crear' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('crear')}
            >
              <Plus className="mr-2 h-4 w-4" />
              Crear Proyecto
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center ${
                activeTab === 'buscar' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => setActiveTab('buscar')}
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar Proyecto
            </Button>
          </div>
          
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Proyectos Totales
              </CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">
                +20% respecto al mes anterior
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Proyectos Activos
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <p className="text-xs text-muted-foreground">
                78 en fase de implementación
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Presupuesto Ejecutado
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.2M</div>
              <p className="text-xs text-muted-foreground">
                65% del presupuesto anual
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribución Dimensiones de Proyectos</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectTypes}
                    dataKey="progreso"
                    nameKey="nombre"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {projectTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} /> {/* Leyenda agregada */}
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proyectos por Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="proyectos" 
                    name="Proyectos Totales"
                    stroke="#8884d8" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="completados" 
                    name="Proyectos Completados"
                    stroke="#82ca9d" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="formulacion" 
                    name="Proyectos En Formulación"
                    stroke="red" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
