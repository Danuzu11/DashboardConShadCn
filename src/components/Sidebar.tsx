"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Store, 
  LayoutDashboard, 
  Users, 
  Settings,
  ShoppingCart 
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="w-6 h-6" />,
    path: "/dashboard"
  },
  {
    title: "Comercios",
    icon: <Store className="w-6 h-6" />,
    path: "/comercios"
  },
  {
    title: "Productos",
    icon: <ShoppingCart className="w-6 h-6" />,
    path: "/productos"
  },
  {
    title: "Usuarios",
    icon: <Users className="w-6 h-6" />,
    path: "/usuarios"
  },
  {
    title: "Configuración",
    icon: <Settings className="w-6 h-6" />,
    path: "/configuracion"
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4 fixed">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Menú</h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors ${
                    pathname === item.path ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}