import { Home, Calendar, Users, BarChart3, MessageSquare, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "/dashboard", icon: Home },
  { name: "Agendamentos", href: "/appointments", icon: Calendar },
  { name: "Clientes", href: "/clients", icon: Users },
  { name: "Relatórios", href: "/reports", icon: BarChart3 },
  { name: "WhatsApp", href: "/whatsapp", icon: MessageSquare },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-sidebar-foreground">
          Agendify
        </h1>
        <p className="text-sm text-sidebar-foreground/60 mt-1">
          Gestão Inteligente
        </p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Admin User
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              admin@agendify.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
