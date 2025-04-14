"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Comercio } from "@/types/types"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"

interface ComerciosTableProps {
  comercios: Comercio[]
  onEdit: (comercio: Comercio) => void
  onDelete: (id: string) => void
}

export function ComerciosTable({ comercios, onEdit, onDelete }: ComerciosTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comercios.map((comercio) => (
            <TableRow key={comercio.id}>
              <TableCell>{comercio.nombre}</TableCell>
              <TableCell>{comercio.direccion}</TableCell>
              <TableCell>{comercio.telefono}</TableCell>
              <TableCell>{comercio.categoria}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  comercio.activo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {comercio.activo ? "Activo" : "Inactivo"}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(comercio)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(comercio.id)}
                      className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 