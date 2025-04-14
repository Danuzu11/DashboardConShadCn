"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ComerciosTable } from "@/components/comercios/ComerciosTable"
import { ComercioForm } from "@/components/comercios/ComercioForm"
import { Comercio } from "@/types/types"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ComerciosPage() {
  const [comercios, setComercios] = useState<Comercio[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [comercioToEdit, setComercioToEdit] = useState<Comercio | undefined>()
  // const { toast } = useToast()

  const handleSubmit = (data: Omit<Comercio, "id" | "fechaCreacion">) => {
    if (comercioToEdit) {
      // Actualizar comercio existente
      const updatedComercios = comercios.map((c) =>
        c.id === comercioToEdit.id
          ? { ...comercioToEdit, ...data }
          : c
      )
      setComercios(updatedComercios)
      toast.success("Comercio actualizado exitosamente")
    } else {
      // Crear nuevo comercio
      const newComercio: Comercio = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        fechaCreacion: new Date(),
      }
      setComercios([...comercios, newComercio])
      toast.success("Comercio creado exitosamente")
    }
    handleCloseForm()
  }

  const handleEdit = (comercio: Comercio) => {
    setComercioToEdit(comercio)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    setComercios(comercios.filter((c) => c.id !== id))
    toast.error("Comercio eliminado")
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setComercioToEdit(undefined)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Comercios</h1>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Button onClick={() => setIsFormOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Comercio
          </Button>
        </div>
      </div>

      <ComerciosTable
        comercios={comercios}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {comercioToEdit ? "Editar" : "Crear"} Comercio
            </DialogTitle>
          </DialogHeader>
          <ComercioForm
            comercio={comercioToEdit}
            onSubmit={handleSubmit}
            onCancel={handleCloseForm}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
} 